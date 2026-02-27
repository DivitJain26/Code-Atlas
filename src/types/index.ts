export type Language = 'python' | 'cpp' | 'java';

export interface CodeExecution {
  language: Language;
  code: string;
}

export interface ExecutionResult {
  output: string;
  error?: string;
  executionTime?: number;
}

export interface LanguageConfig {
  name: string;
  value: Language;
  monacoLanguage: string;
  defaultCode: string;
  icon: string;
}
