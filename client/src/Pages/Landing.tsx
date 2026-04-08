import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-indigo-700/10 via-white to-transparent -z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-10 pt-24 pb-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Master Coding
            <span className="text-indigo-700"> One Problem at a Time</span>
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Code-Atlas is your competitive programming platform to practice,
            learn, and level up. Solve curated problems, run code instantly,
            and prepare for technical interviews with confidence.
          </p>

          <div className="flex gap-4">
            <Link to="/experiments">
              <button className="bg-indigo-700 text-white px-7 py-3 rounded-lg font-medium hover:bg-indigo-800 transition shadow-md">
                Solve Problems
              </button>
            </Link>

            
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 text-sm text-gray-600">
            <div>
              <p className="text-2xl font-bold text-black">1000+</p>
              <p>Practice Problems</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">Real-time</p>
              <p>Code Execution</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">Global</p>
              <p>Leaderboard</p>
            </div>
          </div>
        </div>

        {/* Right - Code Preview Card */}
        <div className="bg-black rounded-2xl shadow-xl p-6 text-white font-mono text-sm relative">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <pre className="text-green-400 leading-relaxed">
{`// Two Sum Problem
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
}`}
          </pre>

          <p className="text-xs text-gray-400 mt-4">
            Code compiled successfully. Runtime: 2ms
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h3 className="text-3xl font-semibold mb-4">
            Everything You Need to Excel
          </h3>
          <p className="text-gray-600">
            Designed for students, developers, and interview preparation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Curated Problems",
              desc: "Practice problems ranging from easy to hard across multiple topics.",
            },
            {
              title: "Instant Execution",
              desc: "Run your code in multiple languages with real-time results.",
            },
            {
              title: "Test Cases",
              desc: "Validate your solutions with custom and hidden test cases.",
            },
            {
              title: "Contests",
              desc: "Participate in timed contests and challenge yourself.",
            },
            {
              title: "Leaderboard",
              desc: "Track your ranking and compare with other coders.",
            },
            {
              title: "Interview Prep",
              desc: "Prepare with frequently asked interview questions.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h4 className="text-lg font-semibold text-indigo-700 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h3 className="text-3xl font-semibold mb-4">
            How It Works
          </h3>
          <p className="text-gray-600">
            Start solving in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              step: "01",
              title: "Choose Problem",
              desc: "Pick a problem based on difficulty or topic.",
            },
            {
              step: "02",
              title: "Write Code",
              desc: "Solve using your preferred programming language.",
            },
            {
              step: "03",
              title: "Submit & Improve",
              desc: "Run test cases, optimize, and climb the ranks.",
            },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-indigo-700 text-4xl font-bold mb-3">
                {item.step}
              </div>
              <h4 className="font-semibold text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
