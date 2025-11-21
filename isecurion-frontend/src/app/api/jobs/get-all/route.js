import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET(req) {
    try {
        const url = new URL(req.url);
        const department = url.searchParams.get("department") || ""
        const location = url.searchParams.get("location") || ""
        const search = url.searchParams.get("search") || "";

        const quertyParams = new URLSearchParams({
            department,
            location,
            search,
        });

        const response = await axios.get(
            `${BACKEND_URL}/api/jobs/get-all?${quertyParams.toString()}`,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        return Response.json({
            success: true,
            message: "Jobs fetched successfully",
            data: response.data
        })
    } catch (error) {

        console.error("jobs error:", error);
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
            message: payload.message || "Failed to fetch jobs"
        }, {
            status
        })
    }
}