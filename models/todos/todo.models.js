import mongoose, { Schema, trusted } from "mongoose";

const todoSchema = new Schema({
    content: {
        type: String,
        required: trusted
    },
    complete: {
        type: boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "SubTodo" 
        }
    ]

}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema)//todos = name in database