import mongoose, { Schema } from "mongoose";

const subTodoSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

export const SubTodoModel = mongoose.model("SubTodo",subTodoSchema);