import express from 'express';
import cors from 'cors';
import router from './routes/studentRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] Incoming request to: ${req.method} ${req.originalUrl}`);
  next();
});

// 404 handler
app.use((req, res) => {
  console.log(`[${new Date().toISOString()}] 404 Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Endpoint not found' });
});

export default app;
