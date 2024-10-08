import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services";

export const GET = async ()=>{
    const db = await connectDB()
    const servicesCollection = db.collection('services')

    try {
        const services = await servicesCollection.find().toArray()
        return Response.json({services})
    } catch (error) {
        console.log(error)
    }
}