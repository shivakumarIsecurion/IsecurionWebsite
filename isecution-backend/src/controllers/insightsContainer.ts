export const getAllInsights = async (req: any) => {
    try {
        const insights = await req.payload.find({
            collection: 'insights'
        })

        return Response.json({
            success: true,
            message: "Insights fetched successfully",
            data: insights?.docs || []
        }, {
            status: 200
        })
    } catch (error) {
        console.error("Error while fetching Insights:", error)
        return Response.json({
            success: false,
            message: 'Error fetching Insights'
        }, {
            status: 500
        })
    }
}