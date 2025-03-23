import app from './app';
import { PORT } from './core/env/env';

const port = PORT;

app.listen(port, () => {
	console.log(`🚀 Server is running at http://localhost:${port}`);
});
