import jwt from 'jsonwebtoken';
import type ms from 'ms';
import { env } from './env';

export const signToken = (
	payload: object,
	expiresIn: number | ms.StringValue | undefined,
): string => {
	return jwt.sign(payload, env.JWT_SECRET, { expiresIn: expiresIn });
};

export const verifyToken = (token: string) => {
	return jwt.verify(token, env.JWT_SECRET);
};
