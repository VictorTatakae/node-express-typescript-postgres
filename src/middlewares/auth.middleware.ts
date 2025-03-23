// src/middlewares/auth.middleware.ts
import type { NextFunction, Request, Response } from 'express';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { env } from '../core/config/env';

export interface AuthUserPayload extends JwtPayload {
	id: string;
	email: string;
	role: 'USER' | 'ADMIN' | 'MASTER';
}

export interface AuthRequest extends Request {
	user?: AuthUserPayload;
}

export const authenticateJWT = (
	req: AuthRequest,
	res: Response,
	next: NextFunction,
) => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		const token = authHeader.split(' ')[1];

		jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
			if (err) {
				return res.status(403).json({ error: 'Token inválido' });
			}
			req.user = decoded as AuthUserPayload;
			next();
		});
	} else {
		res.status(401).json({ error: 'Token não fornecido' });
	}
};
