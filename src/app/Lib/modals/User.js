import mongoose from "mongoose";

const userschema=({
    clertId:{
        type:String,
        unique,
        required:true
    },
    email:{
        type:String,
        unique,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    avator:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    
},{ timestamps:true}
)
const User =mongoose.model("Users",userschema)

export default User