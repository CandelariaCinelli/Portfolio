const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/portfolioWeb'
});

app.use(cors());
app.use(express.json());

app.get('/api/health', async (_request, response, next) => {
  try {
    const result = await pool.query('SELECT current_database() AS database');
    return response.json({ ok: true, database: result.rows[0].database });
  } catch (error) {
    return next(error);
  }
});

app.post('/api/contactos', async (request, response, next) => {
  const { nombreCompleto, correoElectronico, asunto, mensaje } = request.body;

  if (!nombreCompleto || !correoElectronico || !asunto || !mensaje) {
    return response.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contactos (
        id BIGSERIAL PRIMARY KEY,
        nombre_completo VARCHAR(150) NOT NULL,
        correo_electronico VARCHAR(200) NOT NULL,
        asunto VARCHAR(200) NOT NULL,
        mensaje TEXT NOT NULL,
        creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    await pool.query(
      'INSERT INTO contactos (nombre_completo, correo_electronico, asunto, mensaje) VALUES ($1, $2, $3, $4)',
      [nombreCompleto, correoElectronico, asunto, mensaje]
    );

    return response.status(201).json({ ok: true });
  } catch (error) {
    return next(error);
  }
});

app.use((error, _request, response, _next) => {
  console.error('Error de PostgreSQL:', error);
  response.status(500).json({ error: 'No fue posible guardar el mensaje.' });
});

const apiPort = Number(process.env.API_PORT || 8787);
app.listen(apiPort, () => {
  console.log(`API de contacto disponible en http://localhost:${apiPort}`);
});
