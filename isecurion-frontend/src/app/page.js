"use client";
import Image from "next/image";
import Knowbutton from "@/components/UI/Knowbutton";
import vulnyticsimg from "../assets/vulnyticsimg.png";
import Satrtbutton from "@/components/UI/Startbutton";
import dewatermark from "../assets/dewatermark.jpg";
import { cardsData } from "@/servicesdata/strategicservices";
import { offensiveData } from "@/servicesdata/offensiveServices";
import { defensiveServices } from "@/servicesdata/defensiveServices";
import { Icon } from "@iconify/react";
import CountUp from "react-countup";
import india from "../assets/india.png";
import adobe from "../assets/adobeExpress.png";
import isecurionlogo from "../assets/isecurionlogo.png";
import Certification from "@/components/UI/Certification";
import AuditCertification from "@/components/UI/AuditCertification";
import mphasis from "../assets/animationimages/mphasis-logo.png";
import avanti from "../assets/animationimages/Avanti-logo.png";
import cloudsek from "../assets/animationimages/cloudsek.png";
import brillio from "../assets/animationimages/Brillio_Secondary-logo.png";
import orileo from "../assets/animationimages/Orileo-logo.png";
import stride from "../assets/animationimages/Stride.png";
import tcs from "../assets/animationimages/tcs-logo.png";
import saasant from "../assets/animationimages/saasant-logo.png";
import herobackground from "../assets/herosectionbackground.png";
import "./globals.css";
import { useEffect, useState } from "react";
import Companycertification from "@/components/UI/Companycertification";
import Herosectionverlay from "@/components/UI/Herosectionverlay";
import CertifiedTrust from "@/components/UI/CertifiedTrust";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const herosectiondata = [
  {
    title1: "VULNERABILITY ASSESSMENT & PENETRATION TESTING",
    title2: "Cyber risks uncovered. Security strengthened.",
    discription:
      "ISECURION delivers CERT-IN empanelled VAPT and compliance services that help organizations identify, assess, and mitigate vulnerabilities before attackers exploit them. Powered by certified experts and proven methodologies, we safeguard your business-critical assets around the clock.",
    btn1: "Request an Assessment",
    btn2: "Discover Our Services",
  },
  {
    title1: "MANAGED SECURITY & COMPLIANCE",
    title2: "Attackers don’t wait. Neither do we.",
    discription:
      "With continuous vulnerability assessments, deep-dive penetration testing, and proactive remediation guidance, ISECURION helps you stay one step ahead of cyber threats - ensuring compliance, resilience, and peace of mind.",
    btn1: "Talk to an Expert",
    btn2: "View Our Capabilities",
  },
  {
    title1: "MANAGED SECURITY & VULNERABILITY MANAGEMENT",
    title2: "Cyber risks uncovered. Vulnerabilities neutralized.",
    discription:
      "ISECURION delivers CERT-IN empanelled cybersecurity expertise powered by Vulnytics - our intelligent vulnerability lifecycle management platform. Together, they enable continuous assessment, streamlined remediation, and complete visibility into your organization’s security posture.",
    btn1: "Learn About Vulnytics",
    btn2: "Talk to an Expert",
  },
];
const industries = [
  {
    icon: <Icon icon="carbon:finance" width="36" height="36" />,
    label: "Financial Services",
    stats: [
      { value: 22, label: "Customers" },
      { value: 460, label: "Projects Completed" },
    ],
  },
  {
    icon: (
      <Icon
        icon="streamline-pixel:health-hospital-building-1"
        width="36"
        height="36"
      />
    ),
    label: "Healthcare",
    stats: [
      { value: 18, label: "Customers" },
      { value: 400, label: "Projects Completed" },
    ],
  },
  {
    icon: <Icon icon="maki:communications-tower" width="36" height="36" />,
    label: "Tele Communications",
    stats: [
      { value: 12, label: "Customers" },
      { value: 310, label: "Projects Completed" },
    ],
  },
  {
    icon: (
      <Icon
        icon="vscode-icons:folder-type-frontcommerce"
        width="32"
        height="32"
      />
    ),
    label: "E-commerce",
    stats: [
      { value: 9, label: "Customers" },
      { value: 280, label: "Start Up Companies" },
    ],
  },
  {
    icon: <Icon icon="ri:government-line" width="36" height="36" />,
    label: " Government & Public Sector",
    stats: [
      { value: 8, label: "Customers" },
      { value: 200, label: "Projects Completed" },
    ],
  },
  {
    icon: <Icon icon="cil:education" width="36" height="36" />,
    label: "Education",
    stats: [
      { value: 2, label: "Customers" },
      { value: 50, label: "Projects Completed" },
    ],
  },
];
const defaultStats = [
  { value: "150", label: "Enterprise Customers" },
  { value: "1000", label: "Projects Completed" },
  { value: "200", label: "Start Up’s" },
  { value: "50", label: "Health Care Companies" },
  { value: "5", label: "of the Top 10 Global Tech Companies" },
  { value: "25", label: "Fintech Companies" },
];
export default function Home() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
    mode: "onChange"
  })

  const [openForm, setOpenForm] = useState(false);
  const [current, setCurrent] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState(null);

  const displayedStats =
    activeIndustry === null ? defaultStats : industries[activeIndustry].stats;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % herosectiondata.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const col1 = [
    avanti,
    cloudsek,
    mphasis,
    brillio,
    orileo,
    stride,
    tcs,
    saasant,
  ];
  const col2 = [mphasis, avanti, cloudsek, mphasis, cloudsek, avanti];
  const col3 = [cloudsek, mphasis, cloudsek, cloudsek, mphasis, avanti];

  const handleFormSubmit = async (formData) => {
    try {
      // Send form data to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // alert("Thank you! Your message has been sent successfully. We'll get back to you soon.");
        toast.success("Thank you! Your message has been sent successfully. We'll get back to you soon.")
        // Reset form
        reset();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");

    }
  };

  return (
    <div>
      {/* form section  */}

      {openForm && (
        <div className="fixed inset-0 bg-black/10  flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-[360px] relative">
            {/* header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#202123]">
                Get in Touch
              </h3>
              <button
                onClick={() => {
                  setOpenForm(false);
                  reset();
                }}
                className="text-[#202123] text-2xl  font-bold hover:text-red-500 hover:cursor-pointer"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex gap-4 flex-col"
            >
              <div className="flex flex-col">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className={`p-1.5 border-2 max-w-[350px] ${errors.name ? "border-red-500" : "border-[#20212366]/40"
                    }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  className={`p-1.5 border-2 max-w-[350px] ${errors.email ? "border-red-500" : "border-[#20212366]/40"
                    }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                  className={`p-1.5 border-2 max-w-[350px] ${errors.phone ? "border-red-500" : "border-[#20212366]/40"
                    }`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your Company Name"
                  {...register("company", {
                    required: "Company name is required",
                    minLength: {
                      value: 2,
                      message: "Company name must be at least 2 characters",
                    },
                  })}
                  className={`p-1.5 border-2 max-w-[350px] ${errors.company ? "border-red-500" : "border-[#20212366]/40"
                    }`}
                />
                {errors.company && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.company.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Write your message here..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className={`p-1.5 border-2 max-w-[350px] ${errors.message ? "border-red-500" : "border-[#20212366]/40"
                    }`}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                disabled={isSubmitting}
                className="bg-[#25B8CB] hover:cursor-pointer text-white px-4 py-2 rounded-md mt-4 w-full"
                type="submit"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      )
      }

      {/* hero section  */}
      <div className="">
        <Herosectionverlay />
      </div>

      {/* welcome section */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto py-10 space-y-15">
          <div className="space-y-2 sm:space-y-4">
            <h2 className="text-[#0C1A3E] font-bold text-2xl sm:text-4xl text-center">
              WELCOME TO ISECURION
            </h2>
            <p className=" text-sm md:text-lg px-4 xl:px-0 text-justify">
              ISECURION is a CERT-In and ISO 27001:2022 Certified information
              security consulting company providing out-most service quality,
              innovation and research in the field of Information Security and
              Consultancy. We provide a unique blend of services to our
              customers catering to the current information security landscape.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <div>
              <h2 className="text-[#0C1A3E] text-2xl sm:text-4xl font-bold text-center">
                WHY CHOOSE ISECURION?
              </h2>
              <p className="text-center text-gray-500 text-xs sm:text-base font-normal px-4 xl:px-0">
                Trusted by Global Enterprises, Innovative Startups, and Industry
                Leaders
              </p>
            </div>

            <div className="p-4 lg:p-0 flex flex-col lg:flex-row gap-5 sm:gap-14 ">
              {/* left */}
              <div className="flex-1 flex flex-col  ">
                <p className="font-medium text-sm  md:text-lg  text-justify">
                  We focus on pragmatic security that maps to business risk. Our
                  reports prioritize fixes that reduce your exposure fastest.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
                  <div className="bg-white p-5 rounded-md hover:text-white hover:bg-[#0C1A3E] transition duration-500">
                    <h4 className="font-medium text-lg ">Trusted & Certified</h4>
                    <p className="text-sm mt-1 text-justify sm:text-left">
                      CERT-IN empanelled & ISO 27001:2022 certified, with experts
                      holding CEH, CISSP, OSCP, and more.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-md hover:text-white hover:bg-[#0C1A3E] transition duration-500">
                    <h4 className="font-medium text-lg">Expert Team</h4>
                    <p className="text-sm mt-1 text-justify sm:text-left">
                      Our team brings decades of cybersecurity experience to help
                      you mitigate risks efficiently.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-md hover:text-white hover:bg-[#0C1A3E] transition duration-500">
                    <h4 className="font-medium text-lg">Proven Methodology</h4>
                    <p className="text-sm mt-1 text-justify sm:text-left">
                      We follow a pragmatic, business-risk-oriented approach to
                      prioritize fixes.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-md hover:text-white hover:bg-[#0C1A3E] transition duration-500">
                    <h4 className="font-medium text-lg">Global Reach</h4>
                    <p className="text-sm mt-1 text-justify sm:text-left">
                      Trusted by startups & enterprises worldwide, ensuring
                      top-level security guidance.
                    </p>
                  </div>
                </div>
              </div>

              {/* right contact */}
              <div className=" lg:w-[320px] bg-white shadow-lg p-6 rounded-md">
                <h4 className="font-semibold text-lg text-[#202123]">
                  Quick Contact
                </h4>
                <p className="text-sm mt-2 text-[#202123]/80">
                  Tell us about your environment & we’ll propose the right
                  engagement.
                </p>

                <div className="pt-4 space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-[#202123]/80">Email</h4>
                    <p className="text-sm text-[#202123]/80">info@hello.com</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-[#202123]/80">Phone</h4>
                    <p className="text-sm text-[#202123]/80">+91 74382783</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Satrtbutton
                    onClick={() => setOpenForm(true)}
                    className="relative overflow-hidden group px-7 py-3 rounded-full font-semibold text-white bg-[#3BC6E7]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* services section */}
        <div id="our-services" className="bg-[#0C1A3E] w-full mx-auto h-auto py-6 px-2  ">
          <div>
            <h1 className=" text-[#FFFFFF] text-center font-bold text-2xl sm:text-4xl  mt-6 pt-2.5 p-2 sm:p-0 md:p-0 lg:p-0">
              OUR SERVICES
            </h1>
            <p className="text-[#FFFFFF80] text-center text-base">
              Tailored Cybersecurity Solutions for a Safer Digital Future
            </p>
          </div>

          {/* strategic services  */}
          <div className="mt-3 container h-auto mx-auto p-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-2xl font-medium text-white  mb-4 ">
                STRATEGIC SERVICES
              </h1>
            </div>

            <div className="grid max-w-6xl  items-start justify-items-center mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-3">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="relative border-2 border-white/50 shadow-lg hover:shadow-xl hover:border-white transition-shadow duration-300 p-4 pt-8 flex flex-col min-h-40 cursor-pointer"
                  onClick={() => router.push(`/services/strategyGovernance/${card?.title.replace(/[^\w]/g, '').toLowerCase()}`)}
                >
                  {card.icon && (
                    <div className="absolute left-4 -top-6 bg-[#0C1A3E]">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <Icon
                          icon={card.icon}
                          className="text-white w-10 h-10"
                        />
                      </div>
                    </div>
                  )}

                  <h3 className="text-[16px] font-medium text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm font-normal text-white grow">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* offensive services */}
          <div className="mt-3 container   h-auto mx-auto p-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-2xl font-medium text-white text-left mb-4 ml-0.5">
                OFFENSIVE SERVICES
              </h1>
            </div>
            <div className="grid max-w-6xl  mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-3">
              {offensiveData.map((card1, index) => (
                <div
                  key={index}
                  className="relative border-2 border-white/50 shadow-lg hover:shadow-xl hover:border-white transition-shadow duration-300 p-4 pt-8 flex flex-col min-h-40 cursor-pointer"
                  onClick={() => router.push(`/services/strategyGovernance/${card1?.title.replace(/[^\w]/g, '').toLowerCase()}`)}
                >
                  {card1.icon && (
                    <div className="absolute left-4 -top-6 bg-[#0C1A3E] ">
                      <div className="w-12 h-12  rounded-full flex items-center justify-center">
                        <Icon
                          icon={card1.icon}
                          className="text-white  w-10 h-10"
                        />
                      </div>
                    </div>
                  )}

                  <h3 className="text-[16px] font-medium text-[#FFFFFF]">
                    {card1.title}
                  </h3>
                  <p className="mt-2 text-sm font-normal text-white">
                    {card1.discription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Defensive Services */}
          <div className="mt-3 container h-auto mx-auto p-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-2xl font-medium text-white  mb-4 ml-0.5">
                DEFENSIVE SERVICES
              </h1>
            </div>
            <div className="grid max-w-6xl  items-start justify-items-center mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-3">
              {defensiveServices.map((card, index) => (
                <div
                  key={index}
                  className="relative border-2 border-white/50 shadow-lg hover:shadow-xl hover:border-white transition-shadow duration-300 pl-4 pt-8 flex flex-col min-h-41 cursor-pointer"
                  onClick={() => router.push(`/services/strategyGovernance/${card?.title.replace(/[^\w]/g, '').toLowerCase()}`)}
                >
                  {card.icon && (
                    <div className="absolute left-4 -top-6 bg-[#0C1A3E] ">
                      <div className="w-12 h-12  rounded-full flex items-center justify-center">
                        <Icon
                          icon={card.icon}
                          className="text-white w-10 h-10"
                        />
                      </div>
                    </div>
                  )}

                  <h3 className="text-[16px] font-medium text-[#FFFFFF]">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-normal text-[#FFFFFF] text-sm">
                    {card.discription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* why choose section */}


      {/* industries section */}
      {/* <div className="w-full  bg-[#F3F4F5] py-10 mb-1  sm:py-16 md:py-20 lg:py-24 h-auto border-2 ">

        <h1 className='text-center font-bold text-2xl sm:text-3xl md:text-4xl text-[#0C1A3EE5] '>INDUSTRIES WE SERVE</h1>
        <h5 className="text-center text-[#0C1A3E]/50 text-sm sm:text-base md:text-lg font-normal font-outfit sm:px-10 ">
          Protecting industries with tailored, expert-driven security solutions
        </h5>

        <div className=" w-full max-w-[800px] mx-auto mt-5 bg-white rounded-lg shadow-[5px_5px_5px_rgba(0,0,0,0.2)] p-4 ">
          <div className="flex flex-wrap justify-center sm:justify-between gap-1">
            {industries.map((item, index) => (
              <div key={index} className="flex items-center">

                <div
                  className="group w-[115px] h-[90px] flex flex-col items-center justify-center 
                     bg-white text-gray-800 hover:bg-[#0C1A3E] hover:text-white 
                     transition-colors duration-300 cursor-pointer rounded-md"
                >
                  <div className="text-gray-800 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <p className="text-[12px] sm:text-[12px] md:text-[14px] font-medium font-outfit mt-2 text-center">
                    {item.label}
                  </p>
                </div>


                {index !== industries.length - 1 && (
                  <div className="hidden sm:block w-[2px] h-[65px] bg-gray-300 mx-1"></div>
                )}
              </div>
            ))}
          </div>
        </div>


        <div className='container h-auto mx-auto mt-15  flex flex-wrap justify-center md:justify-center sm:justify-center lg:justify-center gap-10'>
          <div className="w-full max-w-[480px] mx-auto pt-10">


            <div className="w-full max-w-[500px] mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 place-items-center text-center sm:text-left">


                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                  <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
                    <CountUp end={22} duration={2} />+
                  </h2>
                  <p className="text-[12px] text-[#0C1A3E] leading-tight sm:max-w-[100px]">
                    Enterprise Customers
                  </p>
                </div>


                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                  <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
                    <CountUp end={660} duration={2} />+
                  </h2>
                  <p className="text-[12px] text-[#2B2F3A] leading-tight sm:max-w-[100px]">
                    Projects Completed
                  </p>
                </div>


                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                  <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
                    <CountUp end={162} duration={2} />+
                  </h2>
                  <p className="text-[12px] text-[#2B2F3A] leading-tight sm:max-w-[100px]">
                    Start Up Companies
                  </p>
                </div>

              </div>
            </div>



            <div className="w-full max-w-[500px] mx-auto px-4 mt-15">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 place-items-center text-center sm:text-left">


                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                  <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
                    <CountUp end={15} duration={2} />+
                  </h2>
                  <p className="text-[12px] text-[#0C1A3E] font-normal leading-tight sm:max-w-[100px]">
                    Health Care
                    Companies
                  </p>
                </div>


                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                  <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
                    <CountUp end={5} duration={2} />+
                  </h2>
                  <p className="text-[12px] font-normal text-[#2B2F3A] leading-tight sm:max-w-[100px]">
                    of the Top 10 Global
                    Tech Companies
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
                  <h2 className="font-semibold text-[26px] sm:text-[30px] text-[#0C1A3E] leading-none">
                    <CountUp end={25} duration={2} />+
                  </h2>
                  <p className="text-[12px] font-normal text-[#2B2F3A] leading-tight sm:max-w-[100px]">
                    Fintech
                    Companies
                  </p>
                </div>

              </div>
            </div>
          </div>


          <div className="relative w-full max-w-[360px] h-[220px] sm:h-[260px] md:h-[300px] mx-auto overflow-hidden rounded-lg">
            <Image
              src={india}
              alt="Indian"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            />
          </div>

        </div>


      </div> */}

      {/* industries section */}
      <div className="w-full  h-auto">
        <div className="container  mx-auto py-13">
          <h1 className="text-center text-4xl font-bold text-[#0C1A3EE5] mb-2">
            INDUSTRIES WE SERVE
          </h1>
          <p className="text-center font-normal  text-base text-[#0C1A3E80]/90 mb-6">
            Protecting industries with tailored, expert-driven security
            solutions
          </p>

          {/* icons section  */}
          <div className="max-w-[900px] mx-auto shadow-2xl p-4 ">
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">
              {industries.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndustry(index)}
                  onMouseLeave={() => setActiveIndustry(null)}
                  className="flex items-center flex-col lg:flex-row"
                >
                  <div className="group w-[115px] h-[90px] flex flex-col items-center justify-center bg-white text-gray-800 hover:bg-[#0C1A3E] hover:text-white transition-all duration-300 cursor-pointer rounded-md">
                    <div className="">{item.icon}</div>
                    <p className="text-[12px] md:text-[14px] font-medium mt-2 text-center">
                      {item.label}
                    </p>
                  </div>

                  {index !== industries.length - 1 && (
                    <div className="hidden lg:block w-0.5 h-[60px] bg-gray-300 mx-3"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-[1100px] mx-auto py-12">
            {/* STATS LEFT */}
            <div className="w-full max-w-[600px] sm:mx-auto md:mx-auto lg:mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center text-center">
                {displayedStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center gap-2"
                  >
                    <h2 className="font-semibold text-[32px] text-[#0C1A3E] leading-none">
                      {stat.value}+
                    </h2>
                    <p className="text-[12px] text-[#0C1A3E] leading-tight sm:max-w-[120px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE RIGHT */}
            <div className="flex justify-center">
              <Image src={india} alt="worldmap" width={300} />
            </div>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-[#0C1A3E] text-white h-auto">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${adobe.src})`,
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
          }}
        ></div>

        <div className="relative z-10 container  mx-auto flex items-center h-full py-12 px-4 md:px-12">
          {/* Inner Wrapper to limit content width to the left side */}
          <div className="max-w-6xl mx-auto ">
            {/* Main Message */}
            <p className="font-medium text-[22px] sm:text-[26px] md:text-[28px] leading-snug mb-8 text-justify">
              Cybersecurity with **ISECURION** is more than protection - it's
              about enabling confident growth with global expertise, advanced
              tools, and a client-first approach.
            </p>

            {/* Testimonial/Quote Block */}
            <div className="mt-8 flex items-start gap-2">
              {/* <h4 className="text-white/40 text-5xl leading-none">“</h4> */}
              <p className="text-white sm:text-base leading-snug  text-xl ">
                <span className="text-2xl">“</span> ISECURION is more than a
                security provider — we’re your partner in resilience and trust.
              </p>
            </div>

            {/* Footer/Signature Block */}
            <div className="mt-10 flex justify-start ">
              <div className="flex items-center gap-3">
                {/* Placeholder for Logo */}
                {/* <div className="h-10 w-24 bg-white/10 flex items-center justify-center text-xs">Logo Here</div> */}
                <img
                  src={isecurionlogo.src}
                  alt="ISECURION Logo"
                  className="h-10"
                />

                <div className="w-0.5 h-10 bg-white opacity-60"></div>

                <div className="text-xs sm:text-sm leading-tight">
                  <p className="font-bold">The ISECURION Team</p>
                  <p className="text-gray-300">
                    Driving Trust, Security & Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-13 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl text-[#0C1A3EE5]">
            CERTIFIED FOR TRUST & EXCELLENCE
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg  text-center text-[#202123]">
            Backed by ISO certifications and expert auditors with CEH, CISSP,
            and OSCP, we ensure uncompromising cybersecurity excellence.
          </p>

          <div className="">
            <CertifiedTrust />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F3F4F5] py-16">
        <div className="max-w-6xl mx-auto w-[92%] flex flex-col lg:flex-row gap-12 items-start">
          {/* left text */}
          <div className="w-full  space-y-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C1A3E80]">
              PROOF IN PARTNERSHIP
            </h1>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-black">
                Trusted by Global Leaders
              </h4>
              <p className="text-sm sm:text-base text-justify text-black/80 leading-relaxed">
                From Fortune 500 enterprises to fast-growing startups, ISECURION
                has been the trusted partner for securing critical systems and
                data. Our clients value us for identifying vulnerabilities,
                strengthening resilience, and enabling them to innovate without
                fear.
              </p>
            </div>
          </div>

          {/* logos */}
          <div className="w-full grid grid-cols-3 gap-4">
            {[col1, col2, col3].map((images, colIndex) => (
              <div key={colIndex} className="overflow-hidden h-80">
                <div
                  className={`flex flex-col gap-6 ${colIndex === 1 ? "animate-scroll-reverse" : "animate-scroll"
                    }`}
                >
                  {images.concat(images).map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      width={110}
                      height={30}
                      alt=""
                      className="mx-auto"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="w-full bg-[#0C1A3EF2]">
        <div className="">
          <Footer />
        </div>
      </section> */}
    </div >
  );
}

{
  /* <section className="w-full  bg-[#F3F4F5]">
      
        <div className="container mx-auto  flex flex-col md:flex-row items-center pt-8 gap-10 px-4 md:px-16 bg-[#F3F4F5]">
          <div className="w-full md:w-2/5 p-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-[#0C1A3E4D]  md:whitespace-nowrap">
              PROOF IN PARTNERSHIP
            </h1>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-[#000000]">Trusted by Global Leaders</h4>
              <p className="text-sm sm:text-base text-[#000000] font-normal  ">
                From Fortune 500 enterprises to fast-growing startups, ISECURION has been the trusted partner for securing critical systems and data.
                Our clients value us for identifying vulnerabilities, strengthening resilience, and enabling them to innovate without fear.
              </p>
            </div>
          </div>

      
          <div className="w-full md:w-3/5 flex flex-wrap justify-between gap-2">
            {[
              [avanti, cloudsek, mphasis, brillio, avanti, cloudsek, orileo, stride, tcs, saasant], // Column 1
              [mphasis, avanti, cloudsek, mphasis, cloudsek, avanti], // Column 2
              [cloudsek, mphasis, cloudsek, cloudsek, mphasis, avanti], // Column 3
            ].map((images, colIndex) => (
              <div key={colIndex} className="flex-1 min-w-[80px] sm:min-w-[100px] overflow-hidden h-80 sm:h-96">
                <div className={`flex flex-col gap-5 ${colIndex === 1 ? "animate-scroll-reverse" : "animate-scroll"
                  }`}>
                  {images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      width={100}
                      height={30}
                      alt={`Logo ${i + 1}`}
                      className="mx-auto shadow-[2px_2px_4px_rgba(0,0,0,0.2)]"
                    />
                  ))}
         
                  {images.map((img, i) => (
                    <Image
                      key={`dup-${i}`}
                      src={img}
                      width={100}
                      height={30}
                      alt={`Logo duplicate ${i + 1}`}
                      className="mx-auto shadow-[2px_2px_4px_rgba(0,0,0,0.2)]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section> */
}
