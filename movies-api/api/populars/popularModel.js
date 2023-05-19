import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PopularSchema = new Schema({
id: { type: Number,  unique: true, required: true},
original_title: {type: String, required: true },
overview: {type: String, required: true },
release_date: {type: String, required: true },
});

export default mongoose.model('Popular', PopularSchema);