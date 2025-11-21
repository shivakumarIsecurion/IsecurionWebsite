import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET(req) {
    try {
        const response = await axios.get(
            `${BACKEND_URL}/api/insights/get-all`,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        return Response.json({
            success: true,
            message: "Insights fetched successfully",
            data: response.data
        })
    } catch (error) {
        console.error("insights error:", error);
        // Improved axios error handling: prefer server-provided status & payload when available
        let status = 500;
        let payload = { message: "Internal server error" };

        if (axios.isAxiosError(error)) {
            if (error.response) {
                // Use status and body from backend
                status = error.response.status || 500;
                payload = error.response.data || {
                    message: error.response.statusText || "Server error",
                };
            } else if (error.request) {
                // No response received
                status = 502;
                payload = { message: "No response received from backend" };
            } else {
                // Axios setup error
                status = 500;
                payload = { message: error.message || "Request setup error" };
            }
        } else if (error instanceof Error) {
            payload = { message: error.message };
        }

        return Response.json({
            success: false,
            message: payload.message || "Failed to fetch Insights"
        }, {
            status
        })
    }
}