"use client";
import React from "react";
import Link from "next/link";
import ServicesNavigationPage from "@/components/UI/ServicesNavigationPage";
// import rectangle from "../../../assets/ProductPage/Rectangle.png";
function Services({ params }) {
  const { id } = React.use(params);
  console.log("id", id)
  return (
    <div>
      <div
        className="w-full  bg-white/30 bg-cover"
        // style={{ backgroundImage: `url(${rectangle.src})` }}
      >
        <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8">
          <h3 className=" text-[#202123] font-bold text-2xl">SERVICES</h3>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base text-gray-600 mt-2">
            <Link
              href="/"
              className="whitespace-nowrap text-sm text-[#202123]/60 "
            >
              HOME
            </Link>
            <ul className="list-disc flex flex-wrap gap-3 sm:gap-6 list-inside">
              <li className="whitespace-nowrap text-sm text-[#202123]/60">
                <Link
                  href="/services"
                  className="whitespace-nowrap text-sm text-[#202123]/60 "
                >
                  SERVICES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ServicesNavigationPage id={id} />
    </div>
  );
}

export default Services;
