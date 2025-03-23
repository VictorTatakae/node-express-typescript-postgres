import express, { type Request, type Response } from 'express';

const app = express();

app.use(express.json());

// app.use('/api/auth', authRouter);

app.get('/', (_: Request, res: Response) => {
	res.status(200).json({ message: 'GG' });
});

export default app;
