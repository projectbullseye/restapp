import express from 'express';
import { errorMiddleware } from './middlewares/error.js';
import { timeMiddleware } from './middlewares/time.js';
import { router as calculatorRouter } from './routers/calculator.js';
import { router as healthRouter } from './routers/health.js';


const app = express();
app.use(express.json());
app.use(timeMiddleware);

app.use(healthRouter);
app.use(calculatorRouter);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});