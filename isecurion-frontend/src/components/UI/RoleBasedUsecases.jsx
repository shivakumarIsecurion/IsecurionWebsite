import React from 'react'

function RoleBasedUsecases() {
    return (

        <section className="relative py-12 sm:py-7 md:py-12 lg:py-16  container mx-auto px-4 z-10">

            <div className="relative ">

                <div className="text-center mb-10">
                    <h2 className="text-center font-bold text-[20px] sm:text-[26px] md:text-[32px] primary-heading">ROLE-BASED USE CASES</h2>
                </div>

                <div className="flex flex-col space-y-[30px] relative">

                    <div className="bg-[#E1EAFF] h-auto rounded-2xl p-4 sm:p-10 sticky top-[170px] z-10 transition-all duration-500 ease-in-out">
                        <h3 className="ml-1 sm:ml-5 md:ml-6 lg:ml-1 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#202123] font-bold">
                            CISO / Security Leadership
                        </h3>
                        <div className="container mx-auto rounded-2xl flex flex-col md:flex-row gap-4 sm:gap-8 sm:mt-5 md:mt-7 justify-between">
                            <div className="flex-1 p-2 sm:p-6">
                                <h2 className="text-lg font-bold  mb-2  text-[#1E2A47]">Use Case: Centralized Risk Visibility</h2>
                                <ul className="list-disc pl-5 space-y-2 ml-1 text-[#333] text-sm leading-relaxed font-normal">
                                    <li>Reviews status dashboard to get real-time visibility of security posture.</li>
                                    <li>Tracks KPIs, vulnerability trends, and remediation progress.</li>
                                </ul>
                                <h4 className="mt-2 font-bold  text-sm text-[#2E3A59]">
                                    Value:Informed decision-making, better governance, reduced risk exposure.
                                </h4>
                            </div>
                            <div className="flex-1 p-2 sm:p-6">
                                <h2 className="text-lg font-bold  mb-2  text-[#1E2A47]">Use Case: Centralized Risk Visibility</h2>
                                <ul className="list-disc pl-5 space-y-2 ml-1 text-[#333] text-sm leading-relaxed font-normal">
                                    <li>Accesses auto-generated reports aligned with ISO, PCI DSS, SOC 2, etc.</li>
                                    <li>Provides auditors with clear evidence of remediation and verification.</li>
                                </ul>
                                <h4 className="mt-2 font-bold text-sm text-[#2E3A59]">
                                    Value: Saves audit preparation time, demonstrates due diligence.
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#B6CAFF] h-auto rounded-2xl p-4 sm:p-8 sticky  top-[190px] z-20 transition-all duration-500 ease-in-out">
                        <h3 className="ml-1 sm:ml-5 md:ml-6 lg:ml-1 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#202123] font-bold">
                            Security Manager / SPOC
                        </h3>
                        <div className="container mx-auto rounded-2xl flex flex-col md:flex-row gap-4 sm:gap-8 sm:mt-5 md:mt-7 justify-between">
                            <div className="flex-1 p-2 sm:p-6">
                                <h2 className="text-xl font-semibold mb-3 text-[#1E2A47]">Use Case: Real-Time Pentest Tracking</h2>
                                <ul className="list-disc pl-5 space-y-2 ml-1 text-[#333] text-[15px] leading-relaxed">
                                    <li>Monitors pentest progress as findings are discovered.</li>
                                    <li>Coordinates between pentesters, developers, and leadership.</li>
                                </ul>
                                <h4 className="mt-4 font-medium text-[#2E3A59]">
                                    Value:Accurate triage, faster root-cause analysis, reduced false positives.
                                </h4>
                            </div>
                            <div className="flex-1 p-2 sm:p-6">
                                <h2 className="text-xl font-semibold mb-3 text-[#1E2A47]">Use Case: Instant Alerts for Critical Risks</h2>
                                <ul className="list-disc pl-5 space-y-2 text-[#333] text-[15px] leading-relaxed">
                                    <li>Receives immediate alerts on high-risk vulnerabilities.</li>
                                    <li>Escalates issues to engineering before exploitation occurs.</li>
                                </ul>
                                <h4 className="mt-4 font-medium text-[#2E3A59]">
                                    Value: Reduces incident response time, avoids last-minute surprises.
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#6B84C6] h-auto rounded-2xl p-4 sm:p-8 sticky top-[210px] z-30 transition-all duration-500 ease-in-out">
                        <h3 className="ml-1 sm:ml-5 md:ml-6 lg:ml-1 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold">
                            IT Operations
                        </h3>
                        <div className="container mx-auto rounded-2xl flex flex-col md:flex-row gap-4 sm:gap-8 sm:mt-5 md:mt-7 justify-between">
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
                        </div>
                    </div>

                    <div className="bg-[#304782] text-white h-auto rounded-2xl p-4 sm:p-8 sticky top-[2800px] z-40 transition-all duration-500 ease-in-out">
                        <h3 className="ml-1 sm:ml-5 md:ml-6 lg:ml-1 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                            Compliance Manager
                        </h3>
                        <div className="container mx-auto rounded-2xl flex flex-col md:flex-row gap-4 sm:gap-8 sm:mt-5 md:mt-7 justify-between">
                            <div className="flex-1 p-2 sm:p-6">
                                <h2 className="text-xl font-semibold mb-3 text-white">Use Case: Audit Preparation</h2>
                                <ul className="list-disc pl-5 space-y-2 ml-1 text-white text-[15px] leading-relaxed">
                                    <li>Generates evidence reports mapped to common compliance frameworks.</li>
                                    <li>Monitors continuous compliance status against required standards.</li>
                                </ul>
                                <h4 className="mt-4 font-medium text-white">
                                    Value:Reduced audit time, proactive issue identification, increased confidence.
                                </h4>
                            </div>
                            <div className="flex-1 p-2 sm:p-6">
                                <h2 className="text-xl font-semibold mb-3 text-white">Use Case: Policy Enforcement</h2>
                                <ul className="list-disc pl-5 space-y-2 text-white text-[15px] leading-relaxed">
                                    <li>Defines and deploys security and IT policies across the organization.</li>
                                    <li>Automatically detects and remediates policy violations in real-time.</li>
                                </ul>
                                <h4 className="mt-4 font-medium text-white">
                                    Value:Consistent adherence to rules, automated governance, reduced liability.
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default RoleBasedUsecases