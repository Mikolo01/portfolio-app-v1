require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'portfolio',
  port: process.env.DB_PORT || 5432,
});

app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: `Hello from backend! Time: ${result.rows[0].now}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
