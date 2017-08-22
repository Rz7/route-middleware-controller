import mongoose from 'mongoose';

const Dog = mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});

export default mongoose.model('Dog', Dog);
