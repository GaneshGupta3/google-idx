import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        userName:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password:{
            type: String,
            required: true,
            minlength: 8
        }
    }, 
    { 
        timestamps: true 
    }
)

export const User = mongoose.model("User",userSchema);