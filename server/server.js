const express = require('express');
const cors = require('cors');
const { executePython } = require('./executors/python');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '2mb' }));   // increased a bit for input

app.post('/api/execute', async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`🚀 Python Docker backend with input() support running on http://localhost:${PORT}`);
});