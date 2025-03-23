// src/middlewares/error.middleware.ts
import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

interface CustomError extends Error {
	status?: number;
}

export const errorHandler = (
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	console.error(err);

	if (err instanceof ZodError) {
		return res.status(400).json({ error: err.errors });
	}

	if (err instanceof Error) {
		const customErr = err as CustomError;
		if (customErr.status) {
			return res.status(customErr.status).json({ error: customErr.message });
		}
		return res.status(500).json({ error: customErr.message });
	}

	res.status(500).json({ error: 'Erro interno do servidor' });
};
