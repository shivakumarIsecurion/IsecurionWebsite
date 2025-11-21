"use client";
import Image from 'next/image';
import Img2015 from '../../assets/2015.png'
import Img2016 from '../../assets/2016.png'
import Img2019 from '../../assets/2019.png'
import Img2021 from '../../assets/2021.png'
import Img2022 from '../../assets/2022.png'
import Img2023 from '../../assets/2023.png'
import Img2024 from '../../assets/2024.png'

import React, { useEffect, useState } from "react";

const data = [
    {
        year: "2010",
        text: "ISECURION was founded with the unwavering commitment to information security and the pursuit of excellence.",
        img: Img2015,
    },
    {
        year: "2015 – Growth",
        text: "With pride, ISECURION is listed as one of India’s 25th Most Promising Cyber Security Consultants.",
        img: Img2016
    },
    {
        year: "2020 – Innovation",
        text: "ISECURION achieves ISO 27001 Certification, demonstrating our commitment to superior information security procedures and practices.",

        img: Img2019
    },
    {
        year: "2025 – Future Forward",
        text: "ISECURION received CERT-In Empanelled Certification, solidifying our commitment to excellence in cybersecurity.",
        img: Img2021,
    },
    {
        year: "2015 – Growth",
        text: "With pride, ISECURION is listed as one of India’s 25th Most Promising Cyber Security Consultants.",
        img: Img2022
    },
    {
        year: "2020 – Innovation",
        text: "ISECURION achieves ISO 27001 Certification, demonstrating our commitment to superior information security procedures and practices.",
        img: Img2023
    },
    {
        year: "2025 – Future Forward",
        text: "ISECURION received CERT-In Empanelled Certification, solidifying our commitment to excellence in cybersecurity.",
        img: Img2024
    },

]

function AboutSnapScroll() {

    return (


        <section className="relative py-6 sm:py:8 md:py-10 lg:py-10  container mx-auto px-4 z-10">

            <div className="relative">

                <div className="container flex flex-col space-y-[30px] relative">

                    <div className="bg-[#E1EAFF] container h-auto rounded-2xl p-4 sm:p-10 sticky top-[170px] z-10 transition-all duration-500 ease-in-out">

                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">OUR VISION</h2>
                        <p className="  text-black">
                            At ISECURION, our vision is to build a digitally secure world where trust,
                            innovation, and resilience go hand in hand. <br />  We believe cybersecurity should not only protect but also empower -
                            enabling businesses to innovate with confidence, governments to safeguard their citizens, and individuals to embrace technology without fear.
                            We aspire to be recognized as the trusted global partner that helps organizations stay one step ahead of evolving threats, ensuring a safer digital future for all.
                        </p>

                    </div>

                    <div className="bg-[#B6CAFF] container h-auto rounded-2xl p-4 sm:p-8 sticky  top-[190px] z-20 transition-all duration-500 ease-in-out">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">OUR MISSION</h2>
                        <p className="">
                            Our mission is to secure the digital future by helping organizations
                            anticipate, withstand, and recover from cyber threats.
                        </p>
                        <p className=""> We go beyond being a service provider - we act as a trusted partner, enabling businesses to operate with confidence in an increasingly complex digital world</p>
                        <p className="">Through continuous innovation, deep expertise, and a client-first mindset, we design and deliver cybersecurity solutions that:</p>
                        <ul className="list-disc ml-7  text-sm md:text-base mx-auto w-fit">
                            <li>Protect critical systems and sensitive data.</li>
                            <li>Ensure compliance with security standards.</li>
                            <li>Build resilience for long-term sustainability.</li>
                            <li>Empower clients to innovate and grow.</li>
                        </ul>
                        <p className="">
                            Our mission is not just about defense - it is about creating a safer, smarter, and more resilient digital ecosystem for businesses, governments, and individuals worldwide.
                        </p>
                    </div>

                    <div className="bg-[#6B84C6] h-auto rounded-2xl p-4 sm:p-8 sticky top-[210px] z-30 transition-all duration-500 ease-in-out">
                        <h3 className="ml-1 mb-4 text-center sm:ml-5 md:ml-6 lg:ml-1 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold">
                            OUR VALUE
                        </h3>
                        {/* <div className="container mx-auto rounded-2xl flex flex-col md:flex-row gap-4 sm:gap-8 sm:mt-5 md:mt-7 justify-between">
                            <div className="flex-1 p-2 sm:p-6">
                                <h2 className="text-xl font-semibold mb-3 text-[#1E2A47]">Use Case: IT Asset Inventory</h2>
                                <ul className="list-disc pl-5 space-y-2 ml-1 text-[#333] text-[15px] leading-relaxed">
                                    <li>Maintains an accurate, real-time inventory of all hardware and software.</li>
                                    <li>Tracks license compliance and asset lifecycle management.</li>
                                </ul>
                                <h4 className="mt-4 font-medium text-[#2E3A59]">
                                    Value:Accurate inventory, optimized IT spending, reduced audit risk.
                                </h4>
                            </div>
                            <div className="flex-1 p-2 sm:p-6">
                                <h2 className="text-xl font-semibold mb-3 text-[#1E2A47]">Use Case: Configuration Management</h2>
                                <ul className="list-disc pl-5 space-y-2 text-[#333] text-[15px] leading-relaxed">
                                    <li>Ensures all system configurations align with organizational policies.</li>
                                    <li>Automates configuration changes and validation.</li>
                                </ul>
                                <h4 className="mt-4 font-medium text-[#2E3A59]">
                                    Value:Consistent operations, fewer misconfigurations, increased stability.
                                </h4>
                            </div>
                        </div> */}
                        <p className="text-white">Integrity First – We uphold the highest standards of ethics, transparency, and accountability in everything we do.</p> <br />
                        <p className="text-white">Client-Centric Approach – Your success is our priority; we tailor solutions to your unique needs.</p> <br />
                        <p className="text-white">Innovation Driven – We continuously evolve with technology, staying ahead of emerging threats.</p> <br />
                        <p className="text-white">Collaboration & Trust – We work as an extension of your team, building partnerships that last.</p> <br />
                        <p className="text-white">Excellence in Execution – Every project, big or small, is handled with precision, quality, and dedication.</p>
                    </div>

                    <div className="bg-[#304782] text-white h-auto rounded-2xl p-4 sm:p-8 sticky top-[2800px] z-40 transition-all duration-500 ease-in-out">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Journey</h2>
                        <div className="space-y-12 pt-10">

                            {data.map((item, index) => (
                                <div key={index} className="flex h-auto flex-col sm:flex-row items-center justify-between w-full relative gap-6">

                                    {/* center dot */}
                                    <div className="hidden sm:block absolute left-1/2 top-0 w-0.5 h-full bg-white/50 -translate-x-1/2"></div>
                                    <div className="hidden sm:block absolute left-1/2 top-0 w-4 h-4 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 z-10"></div>


                                    {index % 2 === 0 ? (
                                        <>
                                            {/* left image */}
                                            <div className="w-full sm:w-1/2 flex justify-end pr-6">
                                                <Image src={item.img} alt={item.year} className="w-50 h-50 rounded-xl object-cover shadow-lg hidden sm:block" />
                                                {/* <Image src={item.img} /> */}
                                            </div>

                                            {/* right content */}
                                            <div className="w-full sm:w-1/2 pl-6">
                                                <div className="bg-white/20 p-4 rounded-lg shadow-md">
                                                    <h3 className="font-semibold text-lg text-blue-300">{item.year}</h3>
                                                    <p className="text-gray-300 text-sm">{item.text}</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* left text */}
                                            <div className="w-full sm:w-1/2 pr-6">
                                                <div className="bg-white/20 p-4 rounded-lg shadow-md inline-block">
                                                    <h3 className="font-semibold text-lg text-blue-300">{item.year}</h3>
                                                    <p className="text-gray-300 text-sm">{item.text}</p>
                                                </div>
                                            </div>

                                            {/* right image */}
                                            <div className="w-full sm:w-1/2 flex justify-start pl-6 ">
                                                <Image src={item.img} alt={item.year} className="w-50 h-30 rounded-xl object-cover  hidden sm:block" />
                                            </div>
                                        </>
                                    )}

                                </div>
                            ))}
                        </div>

                    </div>
                </div>


            </div>
        </section >

    );
}
export default AboutSnapScroll

