// mongodb connection
import mongoose from "mongoose"

let intialized= false
export const Database  =async()=>{
    mongoose.set("strictQuery",true)

    if (intialized){
        console.log("Already database is connected")
        return
    }
    try {
        await mongoose.connect(process.env.MongoDB_Url,{
            dbName:"altafkhan1743",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected to mongodb")
        intialized=true
    } catch (error) {
        console.log("error creating database",error)
    }
}