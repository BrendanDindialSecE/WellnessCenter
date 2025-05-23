export async function GET() {
    try {
        const res = await fetch("https://zenquotes.io/api/random");
        if (!res.ok) throw new Error("External API error");

        const data = await res.json();
        return Response.json(data);
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Failed to fetch quote" }),
            {
                status: 500,
            }
        );
    }
}
