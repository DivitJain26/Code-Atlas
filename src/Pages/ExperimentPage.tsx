import { useParams, useNavigate } from "react-router-dom";
import { experimentData } from "../data/experiments";

function ExperimentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const experiment = experimentData
    .flatMap((topic) => topic.questions)
    .find((q) => q.id === Number(id));

  if (!experiment) {
    return <h1 className="text-center mt-10 text-red-500">Experiment Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">

  <div className="flex justify-between items-center mb-8">
    <h1 className="text-3xl font-bold text-indigo-700">
      {experiment.title}
    </h1>

    <button
      onClick={() => navigate("/experiments")}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
    >
      ← Back
    </button>
  </div>

  <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6">

    <div className="bg-indigo-50 p-4 rounded-lg">
      <p className="text-sm text-gray-500">Course Outcome</p>
      <p className="text-lg font-semibold text-gray-800">{experiment.co}</p>
    </div>

    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-2">Aim</h2>
      <p className="text-gray-700">{experiment.aim}</p>
    </div>

    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-2">Theory</h2>
      <p className="text-gray-700 leading-relaxed">{experiment.theory}</p>
    </div>

    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-2">Procedure</h2>
      <ul className="space-y-2">
        {experiment.procedure.map((step, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded-lg border-l-4 border-green-500 text-gray-800"
          >
            Step {index + 1}: {step}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-2">Result</h2>
      <div className="bg-green-50 border border-green-400 p-4 rounded-lg text-green-800">
        {experiment.result}
      </div>
    </div>

    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-2">
        Viva Questions
      </h2>
      <ul className="list-disc ml-5 text-gray-700 space-y-1">
        <li>What is Docker?</li>
        <li>What is a container?</li>
        <li>Difference between Docker image and container?</li>
        <li>What is Dockerfile?</li>
      </ul>
    </div>

    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-2">
        Important Commands
      </h2>
      <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
        docker --version <br />
        docker build -t app . <br />
        docker run -p 8080:80 app
      </div>
    </div>

  </div>
</div>
  );
}

export default ExperimentPage;