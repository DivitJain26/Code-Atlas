import { executePython } from '../services/python.js';

export const Python = async (req, res) => {
	const { code, input = '' } = req.body;   // input is optional

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid "code" field' });
  }

  try {
    const result = await executePython(code, input);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Execution failed' });
  }
}