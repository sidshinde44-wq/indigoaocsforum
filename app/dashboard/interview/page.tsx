"use client";

import { useState } from "react";

export default function InterviewPage() {
  const questions = [
    "Tell me about yourself.",
    "Why do you want to work in AO&CS/Ground Staff role?",
    "How would you handle an angry passenger?",
    "What does customer service mean to you?",
    "Where do you see yourself in 5 years?",
  ];

  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setAnswer("");
    } else {
      alert("You’ve completed the interview prep! 🎉");
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Interview Prep 1v1</h1>
      <p className="text-gray-600">
        Practice answering common Indigo AO&amp;CS / Ground Staff interview questions.
      </p>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold">Q{current + 1}. {questions[current]}</h2>
        <textarea
          className="w-full mt-4 p-3 border rounded-lg"
          rows={4}
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <div className="flex justify-end mt-4">
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            {current < questions.length - 1 ? "Next Question" : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
}
