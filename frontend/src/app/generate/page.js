"use client";
import { useState, useEffect } from "react";

export default function GeneratePage() {
  const [userInput, setUserInput] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [initialMessage, setInitialMessage] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendClick = async () => {
    try {
      const response = await fetch("http://localhost:5000/getReply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: userInput }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setBotResponse(data.response);
    } catch (error) {
      console.error("Error sending message to backend:", error);
    }
  };

  useEffect(() => {
    const fetchInitialMessage = async () => {
      try {
        const response = await fetch("http://localhost:5000/initial");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setInitialMessage(data.message);
      } catch (error) {
        console.error("Error fetching initial message:", error);
      }
    };

    fetchInitialMessage();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black px-4 mb-4 mt-8 pt-32">
        <div className="w-full max-w-2xl text-white bg-gray-800 p-4 rounded-lg">
          <p>{initialMessage || "Loading..."}</p>
          <p>{botResponse}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-black px-4 mt-10">
        <textarea
          className="w-3/4 md:w-1/2 h-40 p-4 text-lg text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Chat with Hackentor"
          value={userInput}
          onChange={handleInputChange}
        />
        <button
          className="mt-4 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
          onClick={handleSendClick}
        >
          Send
        </button>
      </div>
    </>
  );
}
