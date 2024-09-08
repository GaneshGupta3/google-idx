import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {},
    {timestamps : true}
)

export const User = mngoose.model("User", userSchema);