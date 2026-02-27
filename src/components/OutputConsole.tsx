import { Terminal } from 'lucide-react';

interface OutputConsoleProps {
  output: string;
  isExecuting: boolean;
  executionTime?: number;
}

export function OutputConsole({ output, isExecuting, executionTime }: OutputConsoleProps) {
  return (
    <div className="h-full flex flex-col bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
        <Terminal className="w-4 h-4 text-green-400" />
        <span className="text-sm font-semibold text-gray-200">Output Console</span>
        {executionTime && (
          <span className="ml-auto text-xs text-gray-400">
            Execution time: {executionTime.toFixed(0)}ms
          </span>
        )}
      </div>

      <div className="flex-1 overflow-auto p-4">
        {isExecuting ? (
          <div className="flex items-center gap-2 text-blue-400">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
            <span className="text-sm">Executing code...</span>
          </div>
        ) : output ? (
          <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
            {output}
          </pre>
        ) : (
          <div className="text-gray-500 text-sm">
            Click "Run Code" to see output here...
          </div>
        )}
      </div>
    </div>
  );
}
