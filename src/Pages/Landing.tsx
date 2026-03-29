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
            Code Without
            <span className="text-indigo-700"> Setup Barriers</span>
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Code-Atlas delivers a fully containerized lab environment for CBAD
            assignments—ensuring every student works in a consistent, secure,
            and reproducible system.
          </p>

          <div className="flex gap-4">
            <Link to="/compiler">
              <button className="bg-indigo-700 text-white px-7 py-3 rounded-lg font-medium hover:bg-indigo-800 transition shadow-md">
                Start Coding
              </button>
            </Link>

            <button className="border border-gray-300 px-7 py-3 rounded-lg hover:border-indigo-700 hover:text-indigo-700 transition">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 text-sm text-gray-600">
            <div>
              <p className="text-2xl font-bold text-black">100%</p>
              <p>Consistent Environments</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">0 Setup</p>
              <p>Required</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">Secure</p>
              <p>Execution</p>
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
{`# Dockerfile
FROM node:18

WORKDIR /app
COPY . .
RUN npm install

CMD ["npm", "run", "dev"]`}
          </pre>

          <p className="text-xs text-gray-400 mt-4">
            Running inside isolated container...
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h3 className="text-3xl font-semibold mb-4">
            Built for Academic Excellence
          </h3>
          <p className="text-gray-600">
            A platform tailored for structured learning and efficient lab work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Isolated Containers",
              desc: "Every student runs code in an identical environment using containerization.",
            },
            {
              title: "Instant Execution",
              desc: "Launch coding environments instantly without manual configuration.",
            },
            {
              title: "Secure Sandbox",
              desc: "Execute programs safely within controlled, sandboxed containers.",
            },
            {
              title: "Scalable System",
              desc: "Handles multiple students concurrently with optimized performance.",
            },
            {
              title: "Instructor Control",
              desc: "Simplified assignment distribution and evaluation workflows.",
            },
            {
              title: "Modern Stack",
              desc: "Powered by React, TypeScript, Tailwind, and container tech.",
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
            Simple Workflow
          </h3>
          <p className="text-gray-600">
            Focus on coding, not environment setup.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              step: "01",
              title: "Login",
              desc: "Securely access your dashboard.",
            },
            {
              step: "02",
              title: "Choose Lab",
              desc: "Select your assignment.",
            },
            {
              step: "03",
              title: "Execute",
              desc: "Run code inside containers instantly.",
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