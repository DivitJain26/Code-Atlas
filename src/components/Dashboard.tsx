import { Code2, History, Play, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800/50 border-r border-gray-700 p-6">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="text-cyan-400" />
          <h1 className="text-xl font-bold">CodeRunner</h1>
        </div>

        <nav className="space-y-4 text-gray-300">
          <div className="flex items-center gap-2 hover:text-white cursor-pointer">
            <User size={18} /> Profile
          </div>

          <div
            className="flex items-center gap-2 hover:text-white cursor-pointer"
            onClick={() => navigate("/editor")}
          >
            <Play size={18} /> Editor
          </div>

          <div className="flex items-center gap-2 hover:text-white cursor-pointer">
            <History size={18} /> History
          </div>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">
          Welcome 👋
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-5 rounded-xl shadow">
            <h3 className="text-gray-400">Total Runs</h3>
            <p className="text-2xl font-bold text-cyan-400">128</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl shadow">
            <h3 className="text-gray-400">Languages Used</h3>
            <p className="text-2xl font-bold text-green-400">3</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl shadow">
            <h3 className="text-gray-400">Saved Codes</h3>
            <p className="text-2xl font-bold text-yellow-400">24</p>
          </div>
        </div>

        {/* Recent Code */}
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Recent Programs</h3>

          <ul className="space-y-3 text-gray-300">
            <li className="flex justify-between hover:text-white">
              <span>Python - Hello World</span>
              <button
                className="text-cyan-400 hover:underline"
                onClick={() => navigate("/editor")}
              >
                Open
              </button>
            </li>

            <li className="flex justify-between hover:text-white">
              <span>C++ - Fibonacci</span>
              <button
                className="text-cyan-400 hover:underline"
                onClick={() => navigate("/editor")}
              >
                Open
              </button>
            </li>

            <li className="flex justify-between hover:text-white">
              <span>Java - Palindrome</span>
              <button
                className="text-cyan-400 hover:underline"
                onClick={() => navigate("/editor")}
              >
                Open
              </button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}