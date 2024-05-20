import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
    try {
        // Ensure that the database is connected
        await connectDB();
        console.log("Database connected");

        // Log the parameters received
        console.log(`Received params: ${JSON.stringify(params)}`);

        // Retrieve the property by ID
        const property = await Property.findById(params.id).exec();
        console.log(`Property ID: ${params.id}`);

        // Check if the property was found
        if (!property) {
            console.log("Property not found");
            return new Response(JSON.stringify({ error: "Property not found" }), { status: 404 });
        }

        // Return the found property
        return new Response(JSON.stringify(property), { status: 200 });
    } catch (error) {
        console.error("Error fetching property:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
};
