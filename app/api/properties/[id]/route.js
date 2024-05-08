import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/:id
export const GET = async (request, {params}) => {


    try {
        await connectDB();

        

        const property = await Property.findById(params.id);
        console.log(params.id);
        if(!property) return new Response(JSON.stringify({ error: "Property not found" }), { status: 404 });
        return new Response(JSON.stringify(properties), { status: 200 })
        
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
}