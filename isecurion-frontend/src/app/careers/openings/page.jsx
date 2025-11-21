"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import JobDetailsModal from "@/components/JobDetailsModal";
import { Search } from "lucide-react";

function Page() {
  const [jobLoading, setJobLoading] = useState(true);
  const [jobData, setJobData] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
  });

  const [selectedJob, setSelectedJob] = useState(null);

  // React Hook Form
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      search: "",
      location: "",
    },
  });

  // Build URL from filters
  const buildUrl = useCallback(() => {
    const baseUrl = "/api/jobs/get-all?";
    const queryParams = new URLSearchParams({});

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, String(value));
      });
    }

    return `${baseUrl}${queryParams.toString()}`;
  }, [filters]);

  const fetchJobsData = useCallback(async () => {
    setJobLoading(true);
    try {
      const url = buildUrl();
      const response = await axios.get(url);

      if (response?.data?.data?.success) {
        const jobsArray = Array.isArray(response.data.data.data)
          ? response.data.data.data
          : [];
        setJobData(jobsArray);
      } else {
        setJobData([]);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to load Job data."
      );
      setJobData([]);
    } finally {
      setJobLoading(false);
    }
  }, [buildUrl]);

  // Fetch on first load + when filters change
  useEffect(() => {
    fetchJobsData();
  }, [fetchJobsData]);

  // When user submits filter form
  const onSubmit = (data) => {
    setFilters(data); // triggers useEffect → fetchJobsData
  };

  const onReset = () => {
    reset({
      search: "",
      location: "",
    });
    setFilters({
      search: "",
      location: "",
    });
  };

  return (
    <div className="min-h-screen w-full py-10 ">
      <div className="max-w-6xl mx-auto px-5 space-y-6">
        <h3 className="text-blue-800 text-2xl font-bold">Opening Positions</h3>

        <div className="space-y-6">
          {/* Filters */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-5 rounded-xl shadow-md"
          >
            {/* Search Input With Icon */}
            <div className="relative md:col-span-2">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search by title or keyword..."
                {...register("search")}
                className="w-full h-11 border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            {/* Location Dropdown */}
            <div>
              <select
                {...register("location")}
                className="w-full h-11 border border-gray-300 rounded-lg pl-5 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              >
                <option value="">All Locations</option>

                {/* Metro & Major IT Cities */}
                <option value="bengaluru-india">Bengaluru, India</option>
                <option value="chennai-india">Chennai, India</option>
                <option value="hyderabad-india">Hyderabad, India</option>
                <option value="pune-india">Pune, India</option>
                <option value="mumbai-india">Mumbai, India</option>
                <option value="delhi-india">Delhi, India</option>
                <option value="gurugram-india">Gurugram, India</option>
                <option value="noida-india">Noida, India</option>
                <option value="kolkata-india">Kolkata, India</option>

                {/* Tier-2 Tech & Business Cities */}
                <option value="ahmedabad-india">Ahmedabad, India</option>
                <option value="kochi-india">Kochi, India</option>
                <option value="thiruvananthapuram-india">
                  Thiruvananthapuram, India
                </option>
                <option value="coimbatore-india">Coimbatore, India</option>
                <option value="indore-india">Indore, India</option>
                <option value="jaipur-india">Jaipur, India</option>
                <option value="nagpur-india">Nagpur, India</option>
                <option value="surat-india">Surat, India</option>
                <option value="chandigarh-india">Chandigarh, India</option>
                <option value="visakhapatnam-india">
                  Visakhapatnam, India
                </option>
                <option value="lucknow-india">Lucknow, India</option>
                <option value="bhopal-india">Bhopal, India</option>

                {/* Work Mode Options */}
                <option value="remote-india">Remote, India</option>
                <option value="hybrid-india">Hybrid, India</option>
                <option value="work-from-home-india">
                  Work From Home, India
                </option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 justify-end">
              <button
                type="button"
                onClick={onReset}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition"
              >
                Apply Filters
              </button>
            </div>
          </form>

          {/* Job Cards List */}
          {jobLoading ? (
            <p className="text-gray-500 text-sm">Loading jobs...</p>
          ) : jobData.length === 0 ? (
            <p className="text-gray-500 text-sm">
              No jobs found. Try changing filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobData.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{job.location}</p>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition"
                    >
                      <span className="text-lg">&rarr;</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Popup / Modal */}
          <JobDetailsModal
            job={selectedJob}
            isOpen={!!selectedJob}
            onClose={() => setSelectedJob(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
