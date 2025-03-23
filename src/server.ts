import app from './app';
import { env } from './core/config/env';

const port = env.PORT;

app.listen(port, () => {
	console.log(`🚀 Server is running at http://localhost:${port}`);
});
