'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";
import FALLBACK_IMAGE from "../../../assets/isecurion_logo.png"


function blog() {
  const [insightsLoading, setInsightsLoading] = useState(true)
  const [insightsData, setInsightsData] = useState([])

  const fetchInsights = async () => {
    setInsightsLoading(true)
    try {
      const response = await axios.get(
        `/api/insights/gat-all`
      )

      console.log("response", response.data.data.data)
      if (response?.data?.success) {
        setInsightsData(
          Array.isArray(response.data.data.data) ? response.data.data.data : []
        )
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to load Insights data."
      );
      setJobData([]);
    } finally {
      setInsightsLoading(false)
    }
  }

  useEffect(() => {
    fetchInsights()
  }, [])
  return (
    <div className="w-full min-h-screen ">
      {/* HEADER BREADCRUMB */}
      <div
        className="w-full  bg-white/30 bg-cover"
      // style={{ backgroundImage: `url(${rectangle.src})` }}
      >
        <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8">
          <h3 className=" text-[#202123] font-bold text-2xl">INSIGHTS</h3>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base text-gray-600 mt-2">
            <Link
              href="/"
              className="whitespace-nowrap text-sm text-[#202123]/60 "
            >
              HOME
            </Link>
            <ul className="list-disc flex flex-wrap gap-3 sm:gap-6 list-inside">
              <li className="whitespace-nowrap text-sm text-[#202123]/60">
                BLOG
              </li>
              <li className="whitespace-nowrap text-sm text-[#202123]">
                INSIGHTS
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F3F4F5]">
        <div className="max-w-6xl mx-auto h-auto">
          <div className="px-4 sm:px-6  md:px-10 py-4 text-center sm:text-left">
            <h1 className="font-bold text-[20px] sm:text-[26px] text-center md:text-[32px]">
              ISECURION INSIGHTS
            </h1>
            <h3 className="text-[15px] text-center sm:text-[16px] text-[#202123] mt-2">
              Insights on VAPT, Compliance, Cloud Security, and more.
            </h3>
          </div>
        </div>
      </div>

      {
        insightsLoading ? (<div className="max-w-6xl mx-auto ">Loading....</div>) : (<div className="w-full ">
          <div className="max-w-6xl mx-auto  grid gap-7 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {insightsData.map((blog, index) => (
              <div
                key={index}
                className="p-4 h-auto  rounded-xl  shadow-sm  hover:shadow-md duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-14/9 w-full ">
                  <Image
                    src={blog?.imagePath || FALLBACK_IMAGE}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-sm text-[#202123B2]/70">{blog.date}</p>
                  <h3 className="text-[16px] font-bold  text-[#202123]">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-[#202123]">{blog.description}</p>
                </div>
                <div className="p-3">
                  <Link href={blog.path} className="text-[#202123] font-bold">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>)
      }

    </div>
  );
}

export default blog;
