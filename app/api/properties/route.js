import connectDB from "@/config/database";

export const GET = async (request) => {
    try {
        await connectDB();
        return new Response('Hello World', { status: 200 })
        
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
}