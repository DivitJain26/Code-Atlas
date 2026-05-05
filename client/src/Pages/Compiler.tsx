import { useState } from 'react';
import { Play, Code2, RotateCcw, Pencil } from 'lucide-react';
import { CodeEditor } from '../components/CodeEditor';
import { OutputConsole } from '../components/OutputConsole';
import { LANGUAGES } from '../config/languages';
import { Language } from '../types';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('python');
  const [code, setCode] = useState(LANGUAGES[0].defaultCode);
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionTime, setExecutionTime] = useState<number>();
  const [userInput, setUserInput] = useState('');

  const currentLanguage = LANGUAGES.find((lang) => lang.value === selectedLanguage)!;

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    const langConfig = LANGUAGES.find((lang) => lang.value === language)!;
    setCode(langConfig.defaultCode);
    setOutput('');
    setExecutionTime(undefined);
    setUserInput('');                    // Reset input when language changes
  };

  const handleRunCode = async () => {
    setIsExecuting(true);
    setOutput('');
    setExecutionTime(undefined);

    try {
      const res = await fetch('http://localhost:5000/api/execute/python', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: selectedLanguage,
          code,
          input: userInput,                  // ← Now properly sending user input
        }),
      });

      const data = await res.json();

      if (data.success) {
        setOutput(data.output || '');
        if (data.executionTime !== undefined) {
          setExecutionTime(data.executionTime);
        }
      } else {
        setOutput(data.error || 'Execution failed');
      }
    } catch (err: any) {
      setOutput(`❌ Connection error: ${err.message || 'Could not reach backend at http://localhost:5000'}`);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleReset = () => {
    setCode(currentLanguage.defaultCode);
    setOutput('');
    setExecutionTime(undefined);
    setUserInput('');                        // Reset input on reset
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="h-screen flex flex-col">
        <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  CodeRunner
                </h1>
                <p className="text-xs text-gray-400">Online Code Compiler with Input Support</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-2 bg-gray-700/50 rounded-lg p-1">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => handleLanguageChange(lang.value)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      selectedLanguage === lang.value
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    <span className="mr-1">{lang.icon}</span>
                    {lang.name}
                  </button>
                ))}
              </div>

              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
                title="Reset to default code"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>

              <button
                onClick={handleRunCode}
                disabled={isExecuting}
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-600 disabled:to-gray-600 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg disabled:cursor-not-allowed"
              >
                <Play className="w-4 h-4" />
                {isExecuting ? 'Running...' : 'Run Code'}
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 grid grid-cols-3 gap-4 p-6 overflow-hidden">
          {/* Left: Code Editor - Wider now */}
          <div className="col-span-2 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-300">
                {currentLanguage.name} Editor
              </h2>
              <div className="text-xs text-gray-500">
                Lines: {code.split('\n').length}
              </div>
            </div>
            <div className="flex-1 min-h-0 border border-gray-700 rounded-xl overflow-hidden">
              <CodeEditor
                language={selectedLanguage}
                value={code}
                onChange={setCode}
              />
            </div>
          </div>

          {/* Right Column: Input + Output */}
          <div className="flex flex-col gap-4">
            {/* User Input Panel */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                  <Pencil className="w-4 h-4" />
                  Program Input (stdin)
                </div>
                <button
                  onClick={() => setUserInput('')}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Clear
                </button>
              </div>
              <div className="flex-1 min-h-0 border border-gray-700 rounded-xl overflow-hidden bg-gray-950">
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Enter input here...&#10;One line per input() call&#10;For multiple inputs, use new lines"
                  className="w-full h-full bg-transparent p-4 text-sm font-mono text-gray-200 resize-none focus:outline-none"
                  spellCheck={false}
                />
              </div>
              <p className="mt-1 text-[10px] text-gray-500">
                Tip: Each line corresponds to one <code>input()</code> call
              </p>
            </div>

            {/* Output Console */}
            <div className="flex flex-col flex-[1.6]">
              <h2 className="text-sm font-semibold text-gray-300 mb-3">Output</h2>
              <div className="flex-1 min-h-0 border border-gray-700 rounded-xl overflow-hidden">
                <OutputConsole
                  output={output}
                  isExecuting={isExecuting}
                  executionTime={executionTime}
                />
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700 px-6 py-3">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div>
              ✅ Connected to backend at <span className="text-emerald-400">http://localhost:3001</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Supported: Python, C++, Java</span>
              <span>•</span>
              <span>Monaco Editor + Docker Execution</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;