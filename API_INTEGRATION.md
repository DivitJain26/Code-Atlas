# Backend Integration Guide

## Overview

This online compiler frontend is ready to connect with your backend API. The application is built with a clean service layer that makes backend integration straightforward.

## API Endpoint

The application expects a single API endpoint:

```
POST /api/compile
```

## Request Format

```typescript
{
  "language": "python" | "cpp" | "java",
  "code": string
}
```

### Example Request

```json
{
  "language": "python",
  "code": "print('Hello, World!')"
}
```

## Response Format

```typescript
{
  "output": string,
  "error"?: string,
  "executionTime"?: number
}
```

### Success Response Example

```json
{
  "output": "Hello, World!\n",
  "executionTime": 1234
}
```

### Error Response Example

```json
{
  "output": "",
  "error": "SyntaxError: invalid syntax on line 1",
  "executionTime": 45
}
```

## How to Connect Your Backend

1. **Update the API URL** in `src/services/compilerService.ts`:

```typescript
private static API_URL = 'https://your-backend-url.com/api/compile';
```

2. **Add authentication headers** if needed:

```typescript
const response = await fetch(this.API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN', // Add if needed
  },
  body: JSON.stringify(execution),
});
```

3. **Test your integration** by clicking the "Run Code" button.

## Current Behavior

Without a backend connected, the application returns mock responses to demonstrate the UI functionality. The mock responses are defined in the `getMockResult` method of `CompilerService`.

## Backend Requirements

Your backend should:

1. Accept POST requests with the code and language
2. Execute the code in a secure, sandboxed environment
3. Return the output or error message
4. Include execution time if possible
5. Handle timeouts gracefully
6. Sanitize inputs to prevent security vulnerabilities

## Security Considerations

- Always run code execution in isolated containers/sandboxes
- Implement rate limiting to prevent abuse
- Set execution timeouts (recommended: 5-10 seconds)
- Monitor resource usage (CPU, memory)
- Validate and sanitize all inputs
- Never execute code with elevated privileges

## Recommended Backend Technologies

- Docker containers for code execution isolation
- Message queues for handling execution requests
- Language-specific runtime environments
- Timeout mechanisms
- Resource limits (CPU, memory, disk space)

## Example Backend Stack

- **Python**: Docker + subprocess + timeout
- **C++**: Docker + g++ compiler + execution sandbox
- **Java**: Docker + javac + java runtime

## Testing Without Backend

The current implementation includes mock responses, so you can:

- Test all UI features
- Demonstrate the application to stakeholders
- Develop frontend features independently
- Prepare for backend integration

Once your backend is ready, simply update the API URL and the integration will be seamless.
