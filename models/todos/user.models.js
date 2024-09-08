import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            lowercase: true,
            unique: true
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: [true,"password is required"]
        }
    },{timestamps: true}
)

export const User = mongoose.model("User", userSchema);