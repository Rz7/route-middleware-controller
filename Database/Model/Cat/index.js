import mongoose from 'mongoose';

const Cat = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});

export default mongoose.Model('Cat', Cat);
