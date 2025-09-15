"use client";

import { useState } from "react";

export default function AssessmentPage() {
  const questions = [
    {
      question: "What is the primary role of AO&CS/Ground Staff?",
      options: [
        "Flying the aircraft",
        "Assisting passengers and managing airport operations",
        "Handling aircraft maintenance",
        "Controlling air traffic",
      ],
      answer: 1,
    },
    {
      question: "How should you handle a delayed flight announcement?",
      options: [
        "Avoid passenger interaction",
        "Give clear and timely updates to passengers",
        "Ignore passenger queries",
        "Wait until passengers complain",
      ],
      answer: 1,
    },
    {
      question: "Which quality is most important for ground staff?",
      options: ["Patience", "Customer service skills", "Teamwork", "All of the above"],
      answer: 3,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Basic Assessment</h1>
      <p className="text-gray-600">
        Test your knowledge with a short mock assessment.
      </p>

      {!completed ? (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">
            Q{current + 1}. {questions[current].question}
          </h2>

          <ul className="mt-4 space-y-2">
            {questions[current].options.map((option, idx) => (
              <li key={idx}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="option"
                    checked={selected === idx}
                    onChange={() => setSelected(idx)}
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>

          <div className="flex justify-end mt-4">
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
              {current < questions.length - 1 ? "Next Question" : "Finish Test"}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold">Assessment Complete 🎉</h2>
          <p className="mt-4 text-lg">
            You scored <span className="font-semibold">{score}</span> out of{" "}
            {questions.length}.
          </p>
          <p className="mt-2 text-gray-500">Great job! Keep practicing 🚀</p>
        </div>
      )}
    </div>
  );
}
