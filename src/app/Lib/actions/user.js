import User from "../modals/User";
import { Database } from "../mongodb/Database";

export const CreateorUpdateuser=async(id,email_address,first_name,last_name,image_url)=>{
    try {
        await Database()
        const user =await User.findByIdAndUpdate(
            {clerkId:id},
            {
                $set:{
                    firstname:first_name,
                    lastname:last_name,
                    avator:image_url,
                    email:email_address
                }
            },
            { new: true, upsert: true }
        )
        return user
    } catch (error) {
        console.log("error creating or updating user",error)
    }
}

export const Deleteuser=async()=>{
    try {
        await Database()
        await User.findOneAndDelete({clerkId:id})
    } catch (error) {
        console.log("error creating Deleteuser",error)
    }
}