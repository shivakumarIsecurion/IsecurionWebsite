export const getAllJobs = async (req: any) => {
    try {

        const rawSearch = req.query.search
        const search = rawSearch && rawSearch !== 'null' && rawSearch !== 'undefined' ? rawSearch : null
        const rawLocation = req.query.location
        const location = rawLocation && rawLocation !== 'null' && rawLocation !== 'undefined' ? rawLocation : null

        // const rawDepartment = req.query.department
        // const department = rawDepartment && rawDepartment !== 'null' && rawDepartment !== 'undefined' ? rawDepartment : null


        let query: any = {
            and: [],
        }

        if (search) {
            query.and.push({
                title: { like: search }
            })
        }

        // if (department) {
        //     query.and.push({
        //         department: { like: department }
        //     })
        // }

        if (location) {
            query.and.push({
                location: { like: location }
            })
        }

        const jobsData = await req.payload.find({
            collection: 'jobs',
            where: query
        })

        return Response.json({
            success: true,
            message: "Jobs fetched successfully",
            data: jobsData?.docs || [] 
        }, {
            status: 200
        })
    } catch (error) {
        console.error("Error while fetching Jobs:", error)

        return Response.json({
            success: false,
            message: "Error fetching Jobs"
        }, {
            status: 500
        })
    }
}