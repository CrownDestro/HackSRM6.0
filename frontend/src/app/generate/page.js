"use client";
import { useState } from "react";

export default function GeneratePage() {
  const [userMessage, setUserMessage] = useState(""); // State to hold the user's message

  return (
    <>
      {/* Bot chat area */}
      <div className="flex flex-col items-center justify-center bg-black px-4 mb-4 mt-8 pt-32"> {/* Adjusted margin-bottom */}
        <div className="w-full max-w-2xl text-white bg-gray-800 p-4 rounded-lg">
          <p>
            {/* Bot's message will appear here */}
          </p>
        </div>
      </div>    

      {/* User chat area */}
      <div className="flex flex-col items-center justify-center bg-black px-4 mt-10 " >
        <textarea
          className="w-3/4 md:w-1/2 h-40 p-4 text-lg text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Chat with Hackentor"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)} // Handle user input
        />

        <button className="mt-4 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700">
          Summarize
        </button>
      </div>
    </>
  );
}
