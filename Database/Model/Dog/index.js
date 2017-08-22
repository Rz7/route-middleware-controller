import mongoose from 'mongoose';

const Dog = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});

export default mongoose.model('Dog', Dog);
