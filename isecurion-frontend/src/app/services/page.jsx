"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import STRATEGICSERVICES from "../../assets/StrageticServices.png";
import OFFENSIVE from "../../assets/offensiveServices.png";
import DEFENSIVE from "../../assets/defensiveServices.png";
import IsecurionLogo from "../../assets/isecurionEye.png";
import Link from "next/link";

import rectangle from "../../assets/ProductPage/Rectangle.png";
import { Icon } from "@iconify/react";

const data = [
  {
    title: "STRATEGIC SERVICES",
    description:
      "We align security with business goals to manage risk, ensure compliance, and build lasting resilience.",
    number: "1",
    img: STRATEGICSERVICES,
  },
  {
    title: "OFFENSIVE SERVICES",
    description:
      "We simulate real-world attacks and manage vulnerabilities to uncover weaknesses before adversaries strike.",
    number: "2",
    img: OFFENSIVE,
  },
  {
    title: "DEFENSIVE SERVICES",
    description:
      "We deliver 24/7 protection, secure identities, and safeguard apps, data, and cloud environments.",
    number: "3",
    img: DEFENSIVE,
  },
];

function Services() {
  const [index, setIndex] = useState(0);
  const current = data[index];

  const nextSlide = useCallback(() => {
    setIndex((p) => (p + 1) % data.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((p) => (p - 1 + data.length) % data.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((p) => (p + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mx-auto">
      {/* HEADER BREADCRUMB */}
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
                SERVICES
              </li>
              <li className="whitespace-nowrap text-sm text-[#202123]">
                {current.title}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto  py-8 ">
        <div className="flex flex-wrap items-center justify-center gap-y-10">
          <div className="w-full lg:w-1/2 flex flex-col items-center  px-4">
            <div className="flex flex-col items-center  text-center lg:text-left">
              {/* Logo and Number Header */}
              <div className="flex items-center gap-4 relative mb-6">
                {/* Image/Logo */}
                <div className="w-40 sm:w-60 flex ">
                  {/* Assuming IsecurionLogo is imported correctly */}
                  <Image
                    src={IsecurionLogo}
                    alt="Isecurion Logo"
                    width={320}
                    height={100}
                    className="w-full h-auto"
                  />
                </div>

                {/* Small Number Tag */}
                <div className="absolute  -translate-y-1/2 left-full flex items-center justify-center whitespace-nowrap">
                  <div className="w-7 h-0.5 bg-[#304782]" />
                  <div className="bg-[#304782] text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-xs shadow-md ml-2">
                    <p className="text-xs sm:text-sm font-semibold">
                      {current.number}
                    </p>
                  </div>
                </div>
              </div>

              {/* Title and Description */}
              <div className="mt-4 flex flex-col items-center justify-center">
                <h3 className="font-bold text-3xl text-[#202123]">
                  {current.title}
                </h3>
                <p className="mt-3 max-w-md text-gray-700 text-center">
                  {current.description}
                </p>
                {current.number == 1 ? (
                  <Link
                    href={`/services/strategyGovernance/strategygovernance-cybersecuritystrategy`}
                    className="bg-[#1B2E60] rounded-xl px-4 py-2 text-white mt-4 inline-block hover:bg-[#304782] transition duration-300"
                  >
                    Know More
                  </Link>
                ) : current.number == 2 ? (
                  <Link
                    href={`/services/strategyGovernance/threatsimulationemulation-continuousredteaming`}
                    className="bg-[#1B2E60] rounded-xl px-4 py-2 text-white mt-4 inline-block hover:bg-[#304782] transition duration-300"
                  >
                    Know More
                  </Link>
                ) : (
                  <Link
                    href={`/services/strategyGovernance/threatdetectionresponse-manageddetectionandresponsemdr`}
                    className="bg-[#1B2E60] rounded-xl px-4 py-2 text-white mt-4 inline-block hover:bg-[#304782] transition duration-300"
                  >
                    Know More
                  </Link>
                )}
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 border border-[#304782] rounded-full flex items-center justify-center text-[#304782] hover:bg-[#304782] hover:text-white transition"
              >
                <Icon icon="ic:round-chevron-left" width="24" height="24" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 border border-[#304782] rounded-full flex items-center justify-center text-[#304782] hover:bg-[#304782] hover:text-white transition"
              >
                <Icon icon="ic:round-chevron-right" width="24" height="24" />
              </button>
            </div>
          </div>

          {/* === RIGHT IMAGE COLUMN === */}
          <div className="w-full  lg:w-1/2 aspect-video   relative overflow-hidden rounded-xl">
            <Image
              src={current.img}
              alt={current.title}
              fill
              // object-cover ensures the image covers the aspect-ratio defined container
              className="object-cover transition duration-500 ease-in-out"
              key={current.title}
            />
          </div>
        </div>
      </div>

      {/* <div className="w-full bg-[#0C1A3EF2] mx-auto">
                <div className="max-w-7xl mx-auto"><Footer /></div>
            </div> */}
    </section>
  );
}
export default Services;
