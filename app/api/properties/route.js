import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async (request) => {


    try {
        await connectDB();

        const properties = await Property.find({});
        return new Response(JSON.stringify(properties), { status: 200 })
        
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
}