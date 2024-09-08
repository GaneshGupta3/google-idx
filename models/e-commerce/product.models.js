import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        productImage: {
            type: String,
        },
        price: {
            type: Number,
            required: true
        },
        stockRemaining:{
            type: Number,
            default: 0
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        

    },
    { timestamps: true }
)

export const Product = mongoose.model("Product", productSchema);