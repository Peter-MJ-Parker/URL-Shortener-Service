import express from 'express';
import mongoose from 'mongoose';
import { env, dbConnect } from '#config/utils';
import { router } from './routes/redirect.js';
import { urlRouter } from './routes/url.js';

const app = express();
mongoose.connection.once('open', () => console.log('DB Connected'));
mongoose.connection.on('error', () => console.log('Error'));
(async () => {
	app.use(express.json({}));
	app.use('/', router);
	app.use('/api/url', urlRouter);

	const PORT = env.PORT;
	app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));
	await dbConnect();
})();
