import mongoose from 'mongoose';

import Cat from './class';

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});

catSchema.loadClass(Cat);

export default mongoose.model('Cat', catSchema);
