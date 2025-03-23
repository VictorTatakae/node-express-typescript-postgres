import { z } from 'zod';

// Define o schema das variáveis de ambiente com os valores padrão desejados
const envSchema = z.object({
	PORT: z.coerce.number().default(3000),
	DATABASE_URL: z.string().default('file:./dev.db'),
	JWT_SECRET: z.string().default('your_jwt_secret'),
	PASSWORD_SALT: z.string().default('default_salt'),
});

// Valida o process.env contra o schema
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error(
		'Erro na validação das variáveis de ambiente:',
		parsedEnv.error.format(),
	);
	process.exit(1);
}

export const env = parsedEnv.data;
