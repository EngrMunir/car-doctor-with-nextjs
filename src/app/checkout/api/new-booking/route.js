import { connectDB } from "@/lib/connectDB";

export const POST=async(request)=>{
    const newBooking = await request.json();
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");

    try {
        const res = await bookingCollection.insertOne(newBooking)
        return Response.json({message:"booked successfully"},{status:200})
    } catch (error) {
        return Response.json({message:"something went wrong"},{status:400})
    }
}