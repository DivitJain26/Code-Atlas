import { useNavigate } from "react-router-dom";
import { experimentData } from "../data/experiments";

function Experiments() {
  const navigate = useNavigate();

  const experiments = experimentData.flatMap((topic) => topic.questions);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Docker Lab Experiments
      </h1>

      <div className="grid gap-4">
        {experiments.map((exp) => (
          <div
            key={exp.id}
            onClick={() => navigate(`/experiment/${exp.id}`)}
            className="bg-white p-5 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">
              Experiment {exp.id}: {exp.title}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {exp.co}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Experiments;