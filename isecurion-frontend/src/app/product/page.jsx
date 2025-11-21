"use client";
import React, { useEffect, useState } from "react";
import vulnytics_logo from "../../assets/Vulnytics-logo.png";
import Image from "next/image";
import { Icon } from "@iconify/react";
import rectangle from "../../assets/ProductPage/Rectangle.png";
import AutomatedVaptPlatForm from "@/components/UI/AutomatedVaptPlatForm";
import ChooseVulnytics from "@/components/UI/ChooseVulnytics";
import RoleBasedUsecases from "@/components/UI/RoleBasedUsecases";
import FrequentlyQuestion from "@/components/UI/FrequentlyQuestion";

import VulnyticsDashBoard from "../../assets/VulnyticsDashBoard1.png";
import Vulnerabilities from "../../assets/Vulnerabilities.png";

const imagesData = [
  {
    img: VulnyticsDashBoard,
    alt: "Client Project Manager Screen",
  },
  {
    img: Vulnerabilities,
    alt: "Vulnerabilities Dashboard Screen",
  },
];

const useCases = [
  {
    role: "CISO / Security Leadership",
    bgClass: "bg-[#E1EAFF]",
    textClass: "text-[#0C1A3E]",
    cards: [
      {
        title: "Use Case: Centralized Risk Visibility",
        list: [
          "Reviews status dashboard to get real-time visibility of security posture.",
          "Tracks KPIs, vulnerability trends, and remediation progress.",
          "Prepares board-level updates with compliance-ready reports.",
        ],
        value:
          "Informed decision-making, better governance, reduced risk exposure.",
      },
      {
        title: "Use Case: Streamlined Reporting",
        list: [
          "Generates audit-ready compliance reports instantly.",
          "Reduces manual reporting workload.",
          "Improves stakeholder communication.",
        ],
        value: "Time savings, accuracy, and transparency.",
      },
    ],
  },
  {
    role: "Security Engineers",
    bgClass: "bg-[#B6CAFF]",
    textClass: "text-[#0C1A3E]",
    cards: [
      {
        title: "Use Case: Automated Scanning",
        list: [
          "Schedules and runs vulnerability scans automatically.",
          "Prioritizes findings based on severity and impact.",
          "Integrates with CI/CD pipelines.",
        ],
        value: "Increased efficiency, faster remediation.",
      },
      {
        title: "Use Case: Centralized Dashboard",
        list: [
          "Monitors all systems from one interface.",
          "Tracks patching and risk status in real time.",
          "Collaborates with developers on mitigation.",
        ],
        value: "Streamlined communication, fewer blind spots.",
      },
    ],
  },
  {
    role: "Compliance Teams",
    bgClass: "bg-[#6B84C6] text-white",
    textClass: "text-white",
    cards: [
      {
        title: "Use Case: Continuous Compliance",
        list: [
          "Maps vulnerabilities to compliance frameworks.",
          "Maintains audit trails automatically.",
          "Identifies gaps before audits.",
        ],
        value: "Easier audits, improved regulatory alignment.",
      },
      {
        title: "Use Case: Automated Evidence Collection",
        list: [
          "Captures scan results as proof of security posture.",
          "Centralizes all compliance artifacts.",
          "Enables faster audit readiness.",
        ],
        value: "Less manual effort, greater transparency.",
      },
    ],
  },
  {
    role: "Executives / Board",
    bgClass: "bg-[#304782] text-white",
    textClass: "text-white",
    cards: [
      {
        title: "Use Case: Risk Summary Reports",
        list: [
          "Access concise summaries of security status.",
          "View high-level metrics and trends.",
          "Make data-driven strategic decisions.",
        ],
        value: "Strategic visibility, proactive governance.",
      },
      {
        title: "Use Case: Budget & ROI Tracking",
        list: [
          "Connects risk reduction to budget allocation.",
          "Tracks ROI of security investments.",
          "Supports data-driven funding requests.",
        ],
        value: "Optimized spending, measurable outcomes.",
      },
    ],
  },
];

export default function product() {
  const background = {
    backgroundImage: `url(${rectangle.src})`,
  };
  const stackOrder = useCases;

  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imagesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section
        className="w-full bg-white/20 backdrop-blur-sm  bg-center bg-cover"
      // style={background}
      >
        <div className="max-w-6xl mx-auto">
          <div className="p-4 flex gap-3 items-center justify-between h-auto">
            {/* Logo Section */}
            <div className="sm:w-auto justify-start ">
              <Image
                src={vulnytics_logo}
                width={186}
                height={60}
                alt="Vulnytics Logo"
              />
            </div>

            {/* Contact Info Section */}
            <div className=" sm:w-auto flex sm:gap-5 flex-wrap flex-1">
              {/* Email */}
              <div className="flex items-center gap-3">
                <Icon icon="ic:baseline-email" width="24" height="24" />
                <h5 className="text-sm sm:text-base md:text-lg">
                  vulnytics@isecurion.com
                </h5>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Icon icon="ion:call" width="24" height="24" />
                <h5 className="text-sm sm:text-base md:text-lg whitespace-nowrap">
                  +918861201570
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* vulbytics section logo */}
      {/* <section className="w-full mt-15 ">
                <div className="container  border-2 mx-auto flex justify-around items-center flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-20">

                   
                    <div className="flex flex-col border-2 gap-4 sm:gap-5 sm:w-1/2  ">
                        <h1 className="font-bold text-[20px] sm:text-[26px] md:text-[32px]   text-[#162B63] whitespace-nowrap">
                            INTRODUCING - VULNYTICS
                        </h1>

                        <Image
                            src={vulnytics_logo}
                            alt="vulnytics"
                            width={453}
                            height={145}
                            className="w-[220px] sm:w-[320px] md:w-[400px] lg:w-[453px] h-auto"
                        />

                        <div className="flex flex-col gap-2">
                            <h2 className="font-medium text-[18px] sm:text-[24px] md:text-[32px]  text-[#162B63]">
                                Automate. Detect. Secure.
                            </h2>
                            <h4 className="text-[#162B63] font-normal text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-snug">
                                Real-time vulnerability management built for  <br className="hidden sm:block" /> modern

                                teams.
                            </h4>
                        </div>
                    </div>


                    <div className="hidden sm:block sm:w-1/2 border-2">

                    </div>

                </div>
            </section> */}

      <section className="w-full  py-14   px-4">
        <div className="max-w-6xl gap-20  mx-auto flex flex-col md:flex-row justify-evenly items-center ">
          {/* LEFT CONTENT */}
          <div className="flex justify-center  flex-col gap-5 w-full md:w-1/2">
            <h1 className="font-bold text-[20px] sm:text-[26px] md:text-[32px] text-[#162B63] whitespace-nowrap">
              INTRODUCING - VULNYTICS
            </h1>

            <Image
              src={vulnytics_logo}
              alt="vulnytics"
              width={453}
              height={145}
              className="w-[220px] sm:w-[320px] md:w-[400px] lg:w-[453px] h-auto"
            />

            <div className="flex flex-col gap-2">
              <h2 className="font-medium text-[18px] sm:text-[24px] md:text-[32px] text-[#162B63]">
                Automate. Detect. Secure.
              </h2>
              <h4 className="text-[#162B63] font-normal text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-snug">
                Real-time vulnerability management built for modern teams.
              </h4>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center w-full  md:w-1/2">
            <div className=" shadow-xl bg-white max-w-[550px] aspect-17/14  rounded-xl overflow-hidden">
              {mounted && (
                <Image
                  src={imagesData[activeIndex].img}
                  alt="vulnytics screen"
                  className=" h-full rounded-xl  opacity-0 animate-fade-in transition-all duration-700"
                />
              )}
              {!mounted && (
                <Image
                  src={imagesData[0].img}
                  alt="vulnytics screen"
                  className=" h-full rounded-xl  opacity-0 animate-fade-in transition-all duration-700"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-b w-full  from-[#6D768B] to-[#E7E8EC] mt-12 p-4 ">
        <div className=" mx-auto  container">
          <AutomatedVaptPlatForm />
        </div>
      </section>

      {/* why choose vulnytics section */}

      <section className="w-full  mt-16 ">
        <div className="max-w-6xl mx-auto ">
          <ChooseVulnytics />
        </div>
      </section>

      {/* Role based use cases section */}
      <section className="w-full mt-15  ">
        <div className="max-w-6xl  mx-auto">
          <RoleBasedUsecases />
        </div>
      </section>

      {/* FrequentlyQuestion  */}
      <section className="w-full  py-10">
        <div className="max-w-6xl container mx-auto ">
          <FrequentlyQuestion />
        </div>
      </section>
    </div>
  );
}
