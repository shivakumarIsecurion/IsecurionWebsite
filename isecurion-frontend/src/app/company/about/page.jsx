import React from "react";
import rectangle from "../../../assets/ProductPage/Rectangle.png";
import Link from "next/link";
import AboutSnapScroll from "@/components/UI/AboutSnapScroll";


function About() {
  const background = {
    backgroundImage: `url(${rectangle.src})`,
  };

  return (
    <section>
      {/* HEADER BREADCRUMB */}
      <div
        className="w-full  bg-white/30 bg-cover"
      // style={{ backgroundImage: `url(${rectangle.src})` }}
      >
        <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8">
          <h3 className=" text-[#202123] font-bold text-2xl">ABOUT US</h3>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base text-gray-600 mt-2">
            <Link
              href="/"
              className="whitespace-nowrap text-sm text-[#202123]/60 "
            >
              HOME
            </Link>
            <ul className="list-disc flex flex-wrap gap-3 sm:gap-6 list-inside">
              <li className="whitespace-nowrap text-sm text-[#202123]/60">
                COMPANY
              </li>
              <li className="whitespace-nowrap text-sm text-[#202123]">
                ABOUT US
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* about text  */}
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto h-auto ">


          {/* Right Section */}
          <div className="w-full  h-auto p-6 sm:p-10">
            <p className="font-normal text-[15px] sm:text-[16px] leading-relaxed text-gray-700 text-justify">
              ISECURION is a CERT-In Empanelled and ISO 27001:2022 certified
              information security consulting company providing utmost service
              quality, innovation, and research in the field of Information
              Security and Consultancy. We provide a unique blend of services to
              our customers catering to the current information security
              landscape.
              <br />
              Our business-oriented approach helps us understand our client’s
              security requirements based on their business type and processes.
              Along with identifying critical loopholes in client systems,
              ISECURION also provides support in remediation by aligning them
              with industry best practices and compliance requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white w-full  h-auto ">
        <div className="max-w-6xl mx-auto">
          <AboutSnapScroll />
        </div>
      </div>
    </section>
  );
}

export default About;
