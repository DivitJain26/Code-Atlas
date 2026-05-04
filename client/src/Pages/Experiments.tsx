import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { experimentData } from "../data/experimentData";
import { getProblemById } from "../utils/getProblem.ts";

const Experiments: React.FC = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = experimentData.map((section) => ({
    ...section,
    questions: section.questions.filter((q) => {
      const problem = getProblemById(q.id);
      if (!problem) return false;

      const matchSearch = problem.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchFilter =
        filter === "All" || problem.difficulty === filter;

      return matchSearch && matchFilter;
    }),
  }));

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">
        Experiments
      </h1>

      {/* SEARCH + FILTER */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      {filteredData.map((section) => (
        <div key={section.topic} className="mb-8">
          <h2 className="text-xl font-bold text-indigo-700 mb-4 border-b pb-2">
            {section.topic}
          </h2>

          {section.questions.map((q) => {
            const problem = getProblemById(q.id);

            return (
              <div
                key={q.id}
                onClick={() => navigate(`/experiment/${q.id}`)}
                className="flex justify-between items-center p-4 mb-3 rounded-xl border hover:bg-indigo-50 cursor-pointer"
              >
                <div>
                  <h3 className="font-semibold">{problem?.title}</h3>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      problem?.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : problem?.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {problem?.difficulty}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/experiment/${q.id}`);
                    }}
                    className="bg-indigo-700 text-white px-4 py-1 rounded"
                  >
                    Solve
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Experiments;