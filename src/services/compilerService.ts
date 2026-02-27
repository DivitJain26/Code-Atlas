import { CodeExecution, ExecutionResult } from '../types';

export class CompilerService {
  private static API_URL = '/api/compile';

  static async executeCode(execution: CodeExecution): Promise<ExecutionResult> {
    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(execution),
      });

      if (!response.ok) {
        throw new Error('Failed to execute code');
      }

      return await response.json();
    } catch (error) {
      return this.getMockResult(execution);
    }
  }

  private static getMockResult(execution: CodeExecution): ExecutionResult {
    const mockOutputs = {
      python: `Hello, World!
Welcome to the Online Compiler!
Factorial of 5 is 120

[Mock Output - Backend Not Connected]
This is a simulated response. Connect your backend to see real execution results.`,
      cpp: `Hello, World!
Welcome to the Online Compiler!
Factorial of 5 is 120

[Mock Output - Backend Not Connected]
This is a simulated response. Connect your backend to see real execution results.`,
      java: `Hello, World!
Welcome to the Online Compiler!
Factorial of 5 is 120

[Mock Output - Backend Not Connected]
This is a simulated response. Connect your backend to see real execution results.`,
    };

    return {
      output: mockOutputs[execution.language],
      executionTime: Math.random() * 1000 + 500,
    };
  }
}
