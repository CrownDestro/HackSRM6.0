"use client";
import { useState } from "react";

export default function IdeaPage() {
  const [idea, setIdea] = useState("");
  const [summary, setSummary] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleSummarize = async () => {
    const response = await fetch("http://localhost:5000/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea }),
    });

    const data = await response.json();
    setSummary(data.summary);
    setShowOptions(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <textarea
        className="w-3/4 md:w-1/2 h-40 p-4 text-lg text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Briefly describe your idea"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <button
        className="mt-4 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
        onClick={handleSummarize}
      >
        Summarize
      </button>

      {summary && (
        <div className="mt-6 text-center text-white">
          <p className="text-lg bg-gray-900 p-4 rounded-lg">{summary}</p>

          <div className="mt-4 space-x-4">
            <button
              className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700"
              onClick={() => alert("Idea confirmed!")}
            >
              Yes, this is my idea
            </button>
            <button
              className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700"
              onClick={() => {
                setIdea("");
                setSummary(null);
                setShowOptions(false);
              }}
            >
              No, it's not
            </button>
          </div>
        </div>
      )}
    </div>
  );
}