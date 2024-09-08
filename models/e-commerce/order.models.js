import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.type.ObjectId,

        },
        quantity: {
            type: Number,
            required: true
        }
    }
)

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        orderItem: {
            type: ["orderItemSchema"]
        },
        address: {
            type: Stirng,
            required: true
        },
        orderStatus: {
            type: String,
            enum: ["PENDING","Cancel","DELIVERED"],
            default: "PENDING"
        }
    },
    { timestamps: true }
)

export const Order = mongoose.model("Order", orderSchema);