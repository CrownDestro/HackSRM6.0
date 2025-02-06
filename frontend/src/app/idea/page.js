"use client";
import { useState } from "react";
import ParticlesBackground from "@/Components/ParticlesBackground";
export default function IdeaPage() {
  const [idea, setIdea] = useState("");
  const [summary, setSummary] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleSummarize = async () => {
    if (!idea.trim()) return; // Prevent empty submission

    const response = await fetch("http://localhost:5000/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea }),
    });

    const data = await response.json();
    setSummary(data.summary);
    setShowOptions(true);
  };

  const handleReset = () => {
    setIdea("");
    setSummary(null);
    setShowOptions(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <ParticlesBackground />
      {/* Input Area */}
      <textarea
        className="w-3/4 md:w-1/2 h-40 p-4 text-lg text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 z-40"
        placeholder="Briefly describe your idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      {/* Summarize Button */}
      <button
        className="mt-4 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 z-40"
        onClick={handleSummarize}
        disabled={!idea.trim()}
      >
        Summarize
      </button>

      {/* Summary Output */}
      {summary && (
        <div className="mt-6 text-left text-white w-3/4 md:w-1/2">
          <pre className="text-lg bg-gray-900 p-4 rounded-lg whitespace-pre-wrap">
            {summary}
          </pre>

          {/* Yes / No Buttons */}
          {showOptions && (
            <div className="mt-4 space-x-4 flex justify-center">
              <button
                className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700"
                onClick={() => alert("Idea confirmed!")}
              >
                Yes, this is my idea
              </button>
              <button
                className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
                onClick={handleReset}
              >
                No, it's not
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
