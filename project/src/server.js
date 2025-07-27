import app from './app.js';
import { initDB } from './db/index.js';

const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await initDB();
    app.listen(port, () => {
      console.log(`listening on port http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
