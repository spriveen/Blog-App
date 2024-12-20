import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://rpeanuka:riveen1234@cluster0.v7xit.mongodb.net/blog-app')
    console.log("DB Connected");
}