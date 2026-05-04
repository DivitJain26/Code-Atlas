import { useParams, useNavigate } from "react-router-dom";
import { getProblemById } from "../utils/getProblem.ts";

function ExperimentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const problem = getProblemById(Number(id));

  if (!problem) {
    return (
      <h1 className="text-center mt-10 text-red-500">
        Problem Not Found
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-700">
          {problem.title}
        </h1>

        <button
          onClick={() => navigate("/experiments")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
        >
          ← Back
        </button>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6">

        {/* Difficulty */}
        <div>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              problem.difficulty === "Easy"
                ? "bg-green-100 text-green-700"
                : problem.difficulty === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {problem.difficulty}
          </span>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            Description
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            {problem.description}
          </p>
        </div>

        {/* Input */}
        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            Input Format
          </h2>
          <pre className="bg-gray-100 p-4 rounded">
            {problem.inputFormat}
          </pre>
        </div>

        {/* Output */}
        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            Output Format
          </h2>
          <pre className="bg-gray-100 p-4 rounded">
            {problem.outputFormat}
          </pre>
        </div>

        {/* Example */}
        <div>
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">
            Example
          </h2>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
            Input:
            <br />
            {problem.example.input}
            <br /><br />
            Output:
            <br />
            {problem.example.output}
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate(`/compiler/${problem.id}`)}
          className="bg-indigo-700 text-white px-6 py-2 rounded-lg"
        >
          Start Coding 🚀
        </button>

      </div>
    </div>
  );
}

export default ExperimentPage;