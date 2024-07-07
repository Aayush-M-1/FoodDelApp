import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aayush1mahobia1:fooddelapp@cluster0.oc2l5dj.mongodb.net/fooddelapp').then(()=>console.log("DB connected"));
}