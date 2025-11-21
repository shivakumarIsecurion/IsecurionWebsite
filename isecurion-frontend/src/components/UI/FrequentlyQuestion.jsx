"use client"
import React, { useState } from 'react'

function FrequentlyQuestion() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Vulnytics and how does it help in VAPT?",
            answer: "Vulnytics is a centralized vulnerability management platform  developed by ISECURION, designed to enhance,streamline, and modernize the end-to-end Vulnerability lifecycle. It empowers security teams  with a unified interface to track, prioritize, remediate, and report vulnerabilities across diverse assets and environments reducing manual overhead, improving collaboration, and accelerating remediation timelines."
        },
        {
            question: "Is Vulnytics suitable for SOC 2 and ISO 27001 compliance?",
            answer: "Yes, Vulnytics generates comprehensive reports  aligned with SOC 2, ISO 27001, PCI DSS, and GDPR standards, making it easier to prepare for audits and demonstrate compliance."
        },
        {
            question: "How often can I run vulnerability scans with Vulnytics?",
            answer: "At least once a year or after major business/technology changes - threats evolve too quickly to leave it static."
        },
        {
            question: "What types of vulnerabilities does Vulnytics detect?",
            answer: "It creates a structured framework to meet ISO 27001, SOC 2, GDPR, HIPAA, etc., avoiding costly fines and reactive fixes."
        },
        {
            question: "Does Vulnytics integrate with CI/CD tools?",
            answer: "Higher risk of breaches, financial loss, regulatory penalties, and erosion of customer trust."
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='max-w-6xl mx-auto h-auto'>
            <h1 className='text-center font-bold text-[20px] sm:text-[26px] md:text-[32px]'>FREQUENTLY ASKED QUESTIONS (FAQS)</h1>

            <div className="w-full space-y-4 mx-auto cursor-pointer py-10 px-4 ">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className=" overflow-hidden transition-all ease-in-out" style={{ transitionDuration: "3s" }}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full bg-[#0C1A3E] p-4 text-left font-semibold text-lg focus:outline-none text-white"
                        >
                            <h2 className='font-medium text-[16px]'>    {faq.question}</h2>
                            <span className="text-2xl text-white  cursor-pointer">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {openIndex === index && (
                            <div className="p-4 pt-0 text-gray-600 mt-2 text-sm transition-all duration-300 max-w-[1000px]">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FrequentlyQuestion