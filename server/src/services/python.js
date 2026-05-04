import { spawn } from 'child_process';

const EXECUTION_TIMEOUT_MS = 30000;   // 10 seconds
const MEMORY_LIMIT_MB = '512m';
const CPU_LIMIT = '1';

export const executePython = (code, input = '') => {
  return new Promise((resolve, reject) => {
    // Unique delimiters to prevent any collision with user code/input
    const codeDelimiter = `CODE_DELIM_${Math.random().toString(36).slice(2)}`;
    const inputDelimiter = `INPUT_DELIM_${Math.random().toString(36).slice(2)}`;

    const shCommand = `cat > /tmp/script.py << '${codeDelimiter}'
${code}
${codeDelimiter}
cat > /tmp/input.txt << '${inputDelimiter}'
${input}
${inputDelimiter}
python -u /tmp/script.py < /tmp/input.txt`;

    const dockerArgs = [
      'run', '--rm',
      `--memory=${MEMORY_LIMIT_MB}`,
      `--cpus=${CPU_LIMIT}`,
      '-i',
      'python:3.12-slim',
      'sh', '-c', shCommand
    ];

    const docker = spawn('docker', dockerArgs);

    let stdout = '';
    let stderr = '';

    docker.stdout.on('data', (data) => { stdout += data; });
    docker.stderr.on('data', (data) => { stderr += data; });

    // No need to write to stdin anymore — heredoc handles everything
    docker.stdin.end();

    const timeout = setTimeout(() => {
      docker.kill('SIGKILL');
      reject(new Error('Execution timed out (10s limit)'));
    }, EXECUTION_TIMEOUT_MS);

    docker.on('close', (exitCode) => {
      clearTimeout(timeout);

      const result = {
        success: exitCode === 0,
        output: stdout.trim(),
        error: stderr.trim() || null,
        exitCode
      };

      resolve(result);
    });

    docker.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}
