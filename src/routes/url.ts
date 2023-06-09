import express from 'express';
import validUrl from 'valid-url';
import shortid from 'shortid';
import Url from '#schemas/urlModel';
import { env } from '#config/utils';

const baseUrl = `${env.BASE}:${env.PORT}`;
export const urlRouter = express.Router();
urlRouter.post('/shorten', async (req, res) => {
	const { longUrl } = req.body;
	if (!validUrl.isUri(baseUrl)) {
		return res.status(401).json('Invalid base URL');
	}
	const urlCode = shortid.generate();
	if (validUrl.isUri(longUrl)) {
		try {
			let url = await Url.findOne({
				longUrl,
			});
			if (url) {
				res.json(url);
			} else {
				const shortUrl = baseUrl + '/' + urlCode;
				url = new Url({
					longUrl,
					shortUrl,
					urlCode,
					date: new Date(),
				});
				await url.save();
				res.json(url);
			}
		} catch (err) {
			console.log(err);
			res.status(500).json('Server Error');
		}
	} else {
		res.status(401).json('Invalid longUrl');
	}
});
