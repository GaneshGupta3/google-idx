// Suggested code may be subject to a license. Learn more: ~LicenseLog:3160756797.
import mongoose from "mongoose";;

const serviceProviderSchema = new mongoose.Schema(
    {

    },
    {timestamps : true}
)

export const ServiceProvider = mongoose.model("ServiceProvider",serviceProviderSchema)