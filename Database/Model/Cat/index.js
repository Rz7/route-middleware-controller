import mongoose from 'mongoose';

// import { database } from '../../../Database/';
import Cat from './class';

const catSchema = mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});


catSchema.loadClass(Cat);

export default mongoose.model('Cat', catSchema);
