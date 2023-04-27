import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const name = 'antiroll';
export default model(
	name,
	new Schema({
		urlCode: String,
		longUrl: String,
		shortUrl: String,
		date: {
			type: String,
			default: Date.now,
		},
	}),
	name
);
