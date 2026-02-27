import { Editor } from '@monaco-editor/react';
import { Language } from '../types';

interface CodeEditorProps {
  language: Language;
  value: string;
  onChange: (value: string) => void;
}

const languageMap: Record<Language, string> = {
  python: 'python',
  cpp: 'cpp',
  java: 'java',
};

export function CodeEditor({ language, value, onChange }: CodeEditorProps) {
  return (
    <div className="h-full w-full border border-gray-700 rounded-lg overflow-hidden shadow-lg">
      <Editor
        height="100%"
        language={languageMap[language]}
        value={value}
        onChange={(newValue) => onChange(newValue || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          wordWrap: 'on',
          padding: { top: 16, bottom: 16 },
        }}
      />
    </div>
  );
}
