import crypto from 'node:crypto';
import { env } from '../config/env';

export const hashPassword = (password: string): string => {
	return crypto
		.createHmac('sha256', env.PASSWORD_SALT)
		.update(password)
		.digest('hex');
};

export const verifyPassword = (password: string, hashed: string): boolean => {
	return hashPassword(password) === hashed;
};
