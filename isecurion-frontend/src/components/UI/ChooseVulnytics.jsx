"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

// Assuming these paths are correct
import RealTimeUpdate from "../../assets/ProductPage/RealTimeUpdate.jpg";
import StatusBoard from "../../assets/ProductPage/StatusBoard.jpg";
import VulnerabilityTracking from "../../assets/ProductPage/VulnerabilityTracking.jpg";
import InstantNotification from "../../assets/ProductPage/InstantNotification.jpg";
import vulnyticsDashboard from '../../assets/vulnyticsDashBoard.png'

import clientProjectManager from '../../assets/01Client Project Manager Dashboard.png'
import engineerDashBoard from '../../assets/02Engineer Dashboard.png'
import vulnerabilitiesDashBoard from '../../assets/03Vulnerabilities Dashboard.png'
import notificationDashBoard from '../../assets/04Notification Dashboard.png'

const data = [
    {
        img: clientProjectManager,
        title: "1. Real-Time Updates",
        number: "01",
        discription:
            "Stay informed throughout the entire penetration testing process with live updates. Instead of waiting until the final report is delivered, you can follow progress as vulnerabilities are discovered, tested, and verified. This transparency reduces uncertainty, speeds up remediation efforts, and ensures teams can start fixing issues immediately rather than waiting weeks for a full report.",
    },
    {
        img: engineerDashBoard,
        title: "2. Status Dashboard",
        number: "02",
        discription:
            "Get a comprehensive, real-time overview of your security posture through an intuitive dashboard. Track key performance indicators (KPIs), testing coverage, and live status updates across all active engagements. The dashboard makes it easy for executives, managers, and technical teams alike to see where you stand, what risks are outstanding, and how quickly issues are being resolved—all in one central place.",
    },
    {
        img: vulnerabilitiesDashBoard,
        title: "3. Vulnerability Tracking",
        number: "03",
        discription:
            "Manage the full lifecycle of vulnerabilities from discovery to remediation. Each finding can be assigned, prioritized, and tracked until resolution, ensuring accountability at every stage. The platform allows you to verify fixes, maintain historical records for compliance, and demonstrate due diligence to auditors, regulators, or stakeholders. No vulnerability slips through the cracks.",
    },
    {
        img: notificationDashBoard,
        title: "4. Instant Notifications",
        number: "04",
        discription:
            "Never miss a critical security alert. The system sends real-time notifications whenever high-risk or exploitable vulnerabilities are identified, ensuring your team can act fast to contain threats. Configurable notification settings let you choose how and when alerts are delivered (email, in-app, integrations), so the right people are informed instantly without overwhelming noise.",
    },
];


export default function ChooseVulnytics() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    // Helper function to get responsive Tailwind classes for the 3D effect
    const getTransformClasses = (offset) => {
        // --- DESKTOP (lg and up) TRANSFORMATIONS (Your original settings) ---
        let lgTranslateX = "";
        let lgRotateY = "";

        if (offset === 0) {
            lgTranslateX = "lg:translate-x-[70px]";
            lgRotateY = "lg:rotate-y-[50deg]";
        } else if (offset === 1) {
            lgTranslateX = "lg:translate-x-[-10px]";
            lgRotateY = "lg:rotate-y-[60deg]";
        } else if (offset === 2) {
            lgTranslateX = "lg:translate-x-[-100px]";
            lgRotateY = "lg:rotate-y-[70deg]";
        } else {
            lgTranslateX = "lg:translate-x-[-140px]";
            lgRotateY = "lg:rotate-y-[60deg]";
        }


        let smTranslateX = "";
        let smRotateY = "";


        if (offset === 0) {

            smTranslateX = "translate-x-4 sm:translate-x-8";
            smRotateY = "rotate-y-[15deg]";
        } else if (offset === 1) {

            smTranslateX = "translate-x-[-5px] sm:translate-x-[-10px]";
            smRotateY = "rotate-y-[15deg]";
        } else if (offset === 2) {

            smTranslateX = "translate-x-[-10px] sm:translate-x-[-20px]";
            smRotateY = "rotate-y-[20deg]";
        } else {

            smTranslateX = "translate-x-[-15px] sm:translate-x-[-30px]";
            smRotateY = "rotate-y-[15deg]";
        }

        return `${smTranslateX} ${smRotateY} ${lgTranslateX} ${lgRotateY}`;
    };

    return (
        <div className="max-w-6xl mx-auto ">
            <h1 className="text-center font-bold text-[20px]  sm:text-[26px] md:text-[32px] text-[#202123]">
                WHY CHOOSE VULNYTICS BY ISECURION?
            </h1>

            <div className="flex flex-col mt-5 lg:flex-row justify-around items-center py-2 ">

                <div className="relative  max-w-[500px] h-[400px] lg:w-[600px] lg:h-[520px] md:flex items-center justify-center perspective transform-style-3d overflow-visible hidden">
                    {data.map((item, index) => {
                        const offset = (index - currentIndex + data.length) % data.length;

                        const transformClasses = getTransformClasses(offset);

                        const zIndex = 10 - offset;

                        return (
                            <div
                                key={index}

                                className={`absolute w-54 h-70 sm:w-70 sm:h-86 lg:w-[350px] lg:h-[400px] transform-gpu transition-all duration-700 ease-in-out ${transformClasses}`}
                                style={{
                                    zIndex,

                                    transformOrigin: '50% 50%',
                                }}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-fill shadow-lg"
                                />


                                <div className="absolute bottom-[-40px] left-5 -translate-x-1/2 text-[#0C1A3E] font-bold ">
                                    {item.number}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ================= TEXT BOX ================= */}
                <div className="max-w-[380px] p-6  rounded-xl flex flex-col items-center md:mt-10 lg:mt-0">
                    <h2 className="font-semibold text-xl mb-4 text-center text-[#0C1A3E]">
                        {data[currentIndex].title}
                    </h2>
                    <p className="text-[#333333] text-sm leading-relaxed text-center mb-4">
                        {data[currentIndex].discription}
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-3 mt-4">
                        <button
                            onClick={prevSlide}
                            className="border-2 rounded-2xl p-1 transition cursor-pointer"
                        >
                            <Icon
                                icon="weui:arrow-outlined"
                                width="28"
                                height="28"
                                className="rotate-180"
                            />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="border-2 rounded-2xl p-1 transition cursor-pointer"
                        >
                            <Icon icon="weui:arrow-outlined" width="28" height="28" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



