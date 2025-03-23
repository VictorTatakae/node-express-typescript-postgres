import cors from 'cors';
import express, { type Request, type Response } from 'express';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// app.use('/api/auth', authRouter);

app.get('/', (_: Request, res: Response) => {
	res.status(200).json({ message: 'GG' });
});

export default app;
