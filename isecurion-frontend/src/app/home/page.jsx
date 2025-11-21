// "use client"
// import React from 'react';
// import Image from 'next/image';
// import Knowbutton from '@/components/UI/Knowbutton';
// import vulnyticsimg from '../../assets/vulnyticsimg.png';
// import dewatermark from './../../../public/dewatermark.jpg'
// import { cardsData } from '@/servicesdata/strategicservices';
// import { offensiveData } from '@/servicesdata/offensiveServices';
// import { defensiveServices } from '@/servicesdata/defensiveServices';
// import Satrtbutton from '@/components/UI/Startbutton'
// import india from '../../assets/india.png'
// import { Icon } from "@iconify/react";
// import CountUp from 'react-countup';
// import adobe from '../../assets/adobeExpress.png'
// import isecurionlogo from '../../assets/isecurionlogo.png'

// const industries = [
//     {
//         icon: <Icon icon="carbon:finance" width="36" height="36" />,
//         label: "Financial Services"
//     },
//     {
//         icon: <Icon icon="streamline-pixel:health-hospital-building-1" width="36" height="36" />,
//         label: "Healthcare"
//     },
//     {
//         icon: <Icon icon="maki:communications-tower" width="36" height="36" />,
//         label: "Tele communications"
//     },
//     {
//         icon: <Icon icon="vscode-icons:folder-type-frontcommerce" width="36" height="36" style={{ background: "#f0f0f0" }} />,
//         label: "E-commerce"
//     },
//     {
//         icon: <Icon icon="ri:government-line" width="36" height="36" />,
//         label: " Government & Public Sector"
//     },
//     {
//         icon: <Icon icon="cil:education" width="36" height="36" />,
//         label: "Education"
//     },
// ];




// export default function Home() {
//     return (
//         <div>

//             <div className="container mx-auto p-4 flex flex-wrap items-center justify-center gap-13">


//                 <div className="w-full md:w-[600px] ">
//                     <h1 className="text-[32px] font-bold text-[#162B63] mb-4">
//                         INTRODUCING - VULNYTICS
//                     </h1>
//                     <p className="text-[22px] text-[#162B63] mb-4">
//                         Track, triage, and remediate vulnerabilities with Vulnytics — your command center
//                         for managing pentest results, bug reports, and remediation workflows.
//                     </p>
//                     <Knowbutton />
//                     <div className="mt-4">
//                         <Image src={vulnyticsimg} width={453} height={145} alt="Vulnytics Image" />
//                     </div>
//                 </div>


//                 <div className="w-full md:w-[320px] h-[390px]">
//                     <div className="relative w-[318px] h-[357px] bg-[#ECECEC80] shadow-lg p-6 text-[#162B63]
//                 [clip-path:polygon(0_0,100%_0,100%_85%,50%_100%,0_85%)]">


//                         <div className="absolute top-2 left-2 w-2 h-2 bg-gray-300 rounded-full"></div>
//                         <div className="absolute top-2 right-2 w-2 h-2 bg-gray-300 rounded-full"></div>

//                         <h2 className="text-xl font-bold mb-2">Unified Vulnerability Tracking</h2>
//                         <p className="text-sm">
//                             Aggregate findings from multiple sources pen testers,
//                             scanners, or external reports – into a single, organized workspace.
//                         </p>

//                     </div>



//                 </div>

//             </div>

//             {/* welcome section */}
//             <div className="w-full mt-13">

//                 <div className="container mx-auto gap-[10px]">
//                     <h1 className="text-[#0C1A3E] font-bold text-[32px] text-center">
//                         WELCOME TO ISECURION
//                     </h1>
//                     <p className="text-[#000000] text-center text-[14px]">
//                         ISECURION is a CERT-In and ISO 27001:2022 Certified information security consulting company providing out-most service quality, innovation and research in the field of
//                         Information Security and Consultancy. We provide a unique blend of services to our customers catering to the current information security landscape.
//                     </p>
//                 </div>

//                 {/* services section */}
//                 <div className='bg-[#0C1A3E] w-full h-auto'>
//                     <div>
//                         <h1 className='text-[32px] text-[#FFFFFF] text-center font-bold mt-6 pt-2.5'>OUR SERVICES</h1>
//                         <p className='text-[#FFFFFF80] text-center'>Tailored Cybersecurity Solutions for a Safer Digital Future</p>
//                     </div>

//                     {/* stragetic services */}
//                     <div className=" mt-3 w-full max-w-[1200px]  h-auto mx-auto p-4">
//                         <h1 className="text-xl md:text-[20px] font-medium text-[#FFFFFF] text-left mb-4 ml-0.5">
//                             STRATEGIC SERVICES
//                         </h1>
//                         {/* STRATEGIC SERVICES SECTION */}
//                         <div className="flex flex-wrap justify-center gap-10">
//                             {cardsData.map((card, index) => (
//                                 <div
//                                     key={index}
//                                     className="relative flex w-[320px] h-auto border-2 border-white/50 shadow-lg overflow-visible hover:shadow-xl hover:border-white transition-shadow duration-300 "
//                                 >
//                                     {/* Image on left border */}
//                                     {card.img && (
//                                         <div className="absolute -left-1 -top-6">
//                                             <div className="w-12 h-12 bg-gray-900 rounded-full  flex items-center justify-center">
//                                                 <Image
//                                                     src={card.img}
//                                                     alt={card.title}
//                                                     width={50}
//                                                     height={50}
//                                                     className="object-cover rounded-full"
//                                                 />
//                                             </div>
//                                         </div>
//                                     )}

//                                     {/* Card content */}
//                                     <div className="flex-1 p-4 ml-1 mt-4">
//                                         {/* ml-16 leaves space for the image */}
//                                         <h3 className="text-[12px] font-medium text-white">{card.title}</h3>
//                                         <p className="mt-2 text-white text-sm text-[12px] font-normal ">{card.discription}</p>
//                                     </div>
//                                 </div>
//                             ))}

//                         </div>



//                     </div>
//                     {/* offensive services */}
//                     <div className='mt-3 max-w-[1200px] w-full   h-auto mx-auto p-4 '>
//                         <h1 className="text-xl md:text-[20px] font-medium text-[#FFFFFF] text-left mb-4 ml-0.5">
//                             OFFENSIVE SERVICES
//                         </h1>
//                         <div className='flex flex-wrap justify-center gap-10'>
//                             {offensiveData.map((card1, index) => (
//                                 <div
//                                     key={index}
//                                     className='relative flex w-[320px] h-auto border-2 border-white/50 shadow-lg overflow-visible hover:shadow-xl hover:border-white transition-shadow duration-300'
//                                 >
//                                     {card1.img && (
//                                         <div className="absolute -left-1 -top-6">
//                                             <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
//                                                 <Image
//                                                     src={card1.img}
//                                                     alt={card1.title}
//                                                     width={40}
//                                                     height={40}
//                                                     className="object-cover rounded-full"
//                                                 />
//                                             </div>
//                                         </div>
//                                     )}

//                                     <div className="flex-1 p-4 ml-1 mt-4">
//                                         <h3 className="text-[12px] font-semibold text-white">{card1.title}</h3>
//                                         <p className="mt-2 text-white text-[12px]">{card1.discription}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>

//                     {/* Defensive Services */}
//                     <div className=' w-full  max-w-[1200px] h-auto mx-auto p-4 mt-3 pb-10'>
//                         <h1 className="text-xl md:text-[20px] font-medium text-[#FFFFFF] text-left mb-4 ml-0.5">
//                             DEFENSIVE SERVICES
//                         </h1>
//                         <div className='flex flex-wrap justify-center gap-10'>
//                             {defensiveServices.map((card, index) => (
//                                 <div
//                                     key={index}
//                                     className='relative flex w-[320px] h-auto border-2 border-white/50 shadow-lg overflow-visible hover:shadow-xl hover:border-white transition-shadow duration-300'
//                                 >
//                                     {card.img && (
//                                         <div className="absolute -left-1 -top-6">
//                                             <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
//                                                 <Image
//                                                     src={card.img}
//                                                     alt={card.title}
//                                                     width={40}
//                                                     height={40}
//                                                     className="object-cover rounded-full"
//                                                 />
//                                             </div>
//                                         </div>
//                                     )}

//                                     <div className="flex-1 p-4 ml-1 mt-4">
//                                         <h3 className="text-[12px] font-semibold text-white">{card.title}</h3>
//                                         <p className="mt-2 text-white text-[12px]">{card.discription}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </div>


//                 </div>

//             </div>

//             {/* why choose section */}
//             <div className="bg-gradient-to-b from-[#182547] to-[#E7E8EC] w-full py-20">

//                 <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl text-white">
//                     WHY CHOOSE ISECURION?
//                 </h1>
//                 <h5 className="text-center text-[#FFFFFF80] text-sm sm:text-base mt-2 font-normal">
//                     Trusted by Global Enterprises, Innovative Startups, and Industry Leaders
//                 </h5>

//                 <div className="container mx-auto max-w-[1280px] flex flex-wrap justify-center md:justify-center sm:justify-center lg:justify-center gap-10 mt-5">


//                     <div className="flex-1 flex flex-col gap-6">
//                         <div>
//                             <p className='font-medium font-serif text-[#FFFFFF] text-sm '>We focus on pragmatic security that maps to business risk. Our reports prioritize fixes that reduce
//                                 your exposure fastest.</p>
//                         </div>
//                         <div className="flex flex-col sm:flex-row gap-4">
//                             <div className="flex-1 bg-white p-4 rounded-sm">
//                                 <h4 className="font-medium text-lg ">Trusted & Certified</h4>
//                                 <p className="text-[12px] font-normal">
//                                     CERT-IN empanelled & ISO 27001:2022 certified, with experts holding CEH, CISSP, OSCP, and more.
//                                 </p>
//                             </div>
//                             <div className="flex-1  bg-white p-4 rounded-sm">
//                                 <h4 className="font-medium text-sm rounded-sm">Expert Team</h4>
//                                 <p className="text-[12px] font-normal">
//                                     Our team brings decades of cybersecurity experience to help you mitigate risks efficiently.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="flex flex-col sm:flex-row gap-4">
//                             <div className="flex-1  bg-white p-4 rounded-sm">
//                                 <h4 className="font-medium text-sm ">Proven Methodology</h4>
//                                 <p className="text-[12px] ">
//                                     We follow a pragmatic, business-risk-oriented approach to prioritize fixes.
//                                 </p>
//                             </div>
//                             <div className="flex-1  bg-white p-4 rounded-sm">
//                                 <h4 className="font-medium text-sm ">Global Reach</h4>
//                                 <p className="text-[12px] ">
//                                     Trusted by startups and enterprises worldwide, ensuring top-level security guidance.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className="w-full sm:w-[260px] border-0.5 bg-white shadow-md p-3 rounded-sm">
//                         <div className="rounded-sm ">
//                             <h4 className="font-sans font-normal text-xl sm:text-xl text-[#202123]">
//                                 Quick Contact
//                             </h4>
//                             <p className="font-normal text-sm mt-2   text-[#202123CC]/80">
//                                 Tell us about your environment & we’ll propose the right engagement.
//                             </p>
//                             <h4 className='text-sm font-medium font-outfit text-[#202123CC]/80 pt-3'>Email</h4>
//                             <p className='text-[12px] font-normal  text-[#202123CC]/80'>info@hello.com</p>
//                             <h4 className='text-sm font-medium font-outfit text-[#202123CC]/80 pt-3'>Phone</h4>
//                             <p className='text-sm font-medium font-outfit text-[#202123CC]/80 '>+9174382783</p>
//                             <div className='pt-1'>
//                                 <Satrtbutton />
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* industries section */}
//             <div className="max-w-[1280px] container  bg-[#F3F4F5] py-10 mb-1  sm:py-16 md:py-20 lg:py-24 h-auto border-2 ">

//                 <h1 className='text-center font-bold text-2xl sm:text-3xl md:text-4xl text-[#0C1A3EE5] '>INDUSTRIES WE SERVE</h1>
//                 <h5 className="text-center text-[#0C1A3E]/50 text-sm sm:text-base md:text-lg font-normal font-outfit sm:px-10 ">
//                     Protecting industries with tailored, expert-driven security solutions
//                 </h5>



//                 <div className=" max-w-[1280px] container  mx-auto mt-5 bg-white rounded-lg shadow-[5px_5px_5px_rgba(0,0,0,0.2)] p-4 ">
//                     <div className="flex flex-wrap justify-center sm:justify-between gap-1">
//                         {industries.map((item, index) => (
//                             <div key={index} className="flex items-center">

//                                 <div
//                                     className="group w-[100px] h-[90px] flex flex-col items-center justify-center
//                      bg-white text-gray-800 hover:bg-[#0C1A3E] hover:text-white
//                      transition-colors duration-300 cursor-pointer rounded-md"
//                                 >
//                                     <div className="text-gray-800 group-hover:text-white transition-colors duration-300">
//                                         {item.icon}
//                                     </div>
//                                     <p className="text-[12px] sm:text-[12px] md:text-[14px] font-medium font-outfit mt-2 text-center">
//                                         {item.label}
//                                     </p>
//                                 </div>


//                                 {index !== industries.length - 1 && (
//                                     <div className="hidden sm:block w-[2px] h-[65px] bg-gray-300 mx-1"></div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>


//                 <div className='container h-auto mx-auto mt-15  flex flex-wrap justify-center md:justify-center sm:justify-center lg:justify-center gap-10'>
//                     <div className="w-full max-w-[480px] mx-auto pt-10">

//                         {/* first row */}
//                         <div className="w-full max-w-[500px] mx-auto px-4">
//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 place-items-center text-center sm:text-left">

//                                 {/* Enterprise Customers */}
//                                 <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
//                                     <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
//                                         <CountUp end={22} duration={2} />+
//                                     </h2>
//                                     <p className="text-[12px] text-[#0C1A3E] leading-tight sm:max-w-[100px]">
//                                         Enterprise Customers
//                                     </p>
//                                 </div>

//                                 {/* Projects Completed */}
//                                 <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
//                                     <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
//                                         <CountUp end={660} duration={2} />+
//                                     </h2>
//                                     <p className="text-[12px] text-[#2B2F3A] leading-tight sm:max-w-[100px]">
//                                         Projects Completed
//                                     </p>
//                                 </div>

//                                 {/* Start Up Companies */}
//                                 <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
//                                     <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
//                                         <CountUp end={162} duration={2} />+
//                                     </h2>
//                                     <p className="text-[12px] text-[#2B2F3A] leading-tight sm:max-w-[100px]">
//                                         Start Up Companies
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>


//                         {/* Second Row */}
//                         <div className="w-full max-w-[500px] mx-auto px-4 mt-15">
//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 place-items-center text-center sm:text-left">

//                                 {/* Enterprise Customers */}
//                                 <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
//                                     <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
//                                         <CountUp end={15} duration={2} />+
//                                     </h2>
//                                     <p className="text-[12px] text-[#0C1A3E] font-normal leading-tight sm:max-w-[100px]">
//                                         Health Care
//                                         Companies
//                                     </p>
//                                 </div>

//                                 {/* Projects Completed */}
//                                 <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
//                                     <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
//                                         <CountUp end={5} duration={2} />+
//                                     </h2>
//                                     <p className="text-[12px] font-normal text-[#2B2F3A] leading-tight sm:max-w-[100px]">
//                                         of the Top 10 Global
//                                         Tech Companies
//                                     </p>
//                                 </div>

//                                 {/* Start Up Companies */}
//                                 <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
//                                     <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
//                                         <CountUp end={25} duration={2} />+
//                                     </h2>
//                                     <p className="text-[12px] font-normal text-[#2B2F3A] leading-tight sm:max-w-[100px]">
//                                         Fintech
//                                         Companies
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>


//                     <div className="relative w-full max-w-[360px] h-[220px] sm:h-[260px] md:h-[300px] mx-auto overflow-hidden rounded-lg">
//                         <Image
//                             src={india}
//                             alt="Indian"
//                             fill
//                             className="object-cover object-center"
//                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
//                         />
//                     </div>

//                 </div>


//             </div>

//             <section className="relative max-w-[1280px] bg-[#0C1A3E] overflow-hidden sm:h-[300px] md:h-[360px] h-auto border-2">


//                 <div className="absolute top-0 right-0 w-1/2 h-full">
//                     <Image
//                         src={adobe}
//                         alt="India background"
//                         fill
//                         className="object-cover object-center opacity-60"
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                     />
//                 </div>

//                 <div className="relative z-10 flex flex-col justify-center  h-full px-6 sm:px-12 py-10 mt-10 ml-10 lg:ml-50 ">
//                     <div className="text-white max-w-[800px]">
//                         <h3 className="font-medium text-[22px] sm:text-[26px] md:text-[28px] leading-snug">
//                             Cybersecurity with ISECURION is more than protection — it’s about enabling confident growth with global expertise, advanced tools, and a client-first approach.
//                         </h3>
//                     </div>

//                     <div className="mt-10 flex items-start gap-2">
//                         <h4 className="text-[#FFFFFF]/40 text-5xl leading-none">“</h4>
//                         <p className="text-[#FFFFFF] sm:text-base leading-snug max-w-[600px] text-2xl">
//                             ISECURION is more than a security provider — we’re your partner in resilience and trust.
//                         </p>
//                     </div>


//                     <div className="mt-10 sm:mt-12 flex justify-start pb-10">
//                         <div className="w-full max-w-[300px]  flex items-center gap-3 p-3 rounded-md bg-[#0C1A3E]/90 ">
//                             {/* Logo */}
//                             <div className=''>
//                                 <Image src={isecurionlogo} alt="ISECURION Logo" width={110} height={28} />
//                             </div>

//                             {/* Divider line */}
//                             <div className="w-[2px] text-[#FFFFFFE5]/90 h-[40px] bg-white opacity-60 "></div>

//                             {/* Text */}
//                             <div className="text-white text-xs sm:text-sm leading-tight">
//                                 <p className="m-0">
//                                     The ISECURION Team<br />
//                                     <span className="text-gray-300">Driving Trust, Security & Innovation</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </section>

//             <section className='w-full border-2 h-auto  py-20  md:py-10 '>
//                 <h1 className='text-center font-bold text-[20px] sm:text-[26px] md:text-[32px] text-[#0C1A3EE5] '>CERTIFIED FOR TRUST & EXCELLENCE</h1>
//                 <div className="mt-8 sm:mt-10 md:mt-12 px-6 sm:px-12 md:px-20">
//                     <h4 className="font-medium  text-[14px] sm:text-[15px] md:text-[17px] text-left text-[#202123] leading-snug">
//                         Backed by ISO certifications and expert auditors with CEH, CISSP, and OSCP, we ensure uncompromising
//                         <br className="hidden sm:block" />
//                         cybersecurity excellence.
//                     </h4>
//                 </div>

//             </section>

//         </div>
//     );
// }
