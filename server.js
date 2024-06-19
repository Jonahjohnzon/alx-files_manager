import express from 'express';
import controllerRouting from './routes/index';

const app = express();
const pt = process.env.PORT || 5000;

app.use(express.json());
controllerRouting(app);

app.listen(pt, () => {
  console.log(`Server running on port ${pt}`);
});

export default app;
