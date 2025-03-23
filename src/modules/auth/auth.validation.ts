// src/modules/auth/auth.validation.ts
import { z } from 'zod';

export const signUpSchema = z.object({
	userName: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(6),
	imgUrl: z.string().url().optional(),
});

export const signInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export const forgotPasswordSchema = z.object({
	email: z.string().email(),
});

export const verifyEmailSchema = z.object({
	token: z.string(),
});
