import ExploreButton from "@/components/UI/ExploreButton";
import { Icon } from "@iconify/react";
import React from "react";
import business from "../../assets/business.jpg";
import competitivecompensation from "../../assets/competitivecompensation.png";
import workbalance from "../../assets/workbalance.png";
import growthdevelopment from "../../assets/growthDevelopment.png";
import rewards from "../../assets/rewards.png";
import happyfemale from "../../assets/twohappyfemale.jpg";
import Image from "next/image";

import Link from "next/link";
function careers() {
  return (
    <div>
      <div className="w-full bg-[#0C1A3E] py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-center p-3 sm:p-0 md:p-0 lg:p-0 text-3xl md:text-4xl sm:text-2xl  text-white mb-5">
              We’re Building the Future of Cybersecurity — and We Need You
            </h1>

            <h4 className="p-3 sm:p-0 md:p-0 lg:p-0 text-white text-xl text-center font-medium mb-4">
              Bold ideas. Real impact. Endless growth.
            </h4>

            <p className="p-3 sm:p-0 md:p-0 lg:p-0 text-white text-center text-base opacity-90 leading-relaxed mb-4">
              At ISECURION, every challenge is a chance to innovate. We’re
              growing fast and looking for curious, driven people to join us in
              protecting what matters most.
            </p>

            <Link href="/careers/openings">
              <ExploreButton />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full  h-auto">
        <div className="max-w-6xl mx-auto py-10">
          <h1 className="text-center mb-1 text-[32px] font-bold">WHO WE ARE</h1>
          <p className="text-center text-[16px]">
            At ISECURION, we’re passionate about building a safer digital world.
            Our team thrives on collaboration, curiosity, and integrity —
            working together to solve complex cybersecurity challenges.
          </p>

          <div className="">
            <p className="text-center">We believe in:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-10">
              <div className="flex flex-col justify-center items-center text-center px-5">
                <Icon
                  icon="streamline-plump:chat-two-bubbles-oval"
                  width="48"
                  height="48"
                />
                <h4 className="text-xl font-semibold mt-3 ">Openness</h4>
                <p className="pl-10 mt-2 text-center">
                  We share knowledge freely, encouraging transparency and mutual
                  learning across teams.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center text-center px-5">
                <Icon icon="fluent-mdl2:teamwork" width="48" height="48" />
                <h4 className="text-xl font-semibold mt-3 ">Teamwork</h4>
                <p className=" mt-2">
                  We share knowledge freely, encouraging transparency and mutual
                  learning across teams.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center text-center px-5">
                <Icon
                  icon="streamline-plump:chat-two-bubbles-oval"
                  width="48"
                  height="48"
                />
                <h4 className="text-xl font-semibold mt-3 ">Innovation</h4>
                <p className=" mt-2">
                  We share knowledge freely, encouraging transparency and mutual
                  learning across teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-cover bg-fixed h-auto  "
        style={{ backgroundImage: `url(${business.src})` }}
      >
        <div className="w-full mx-auto py-10  bg-white/70 ">
          <div className="container mx-auto ">
            <h1 className="text-center text-[32px] font-bold">
              LIFE AT ISECURION
            </h1>
            <p className="text-center max-w-6xl mx-auto mb-8 p-3 sm:p-0 md:p-0 lg:p-0">
              Working at ISECURION means being part of something bigger — a
              mission to make the digital world safer. We believe in creating an
              environment where our people can grow, innovate, and thrive. Our
              team members are at the core of our success, and we’re committed
              to supporting them with a balanced, rewarding work experience.
            </p>

            <div className="max-w-6xl mx-auto">
              <p className="text-center p-3 sm:p-0 md:p-0 lg:p-0">We offer:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex flex-col items-center text-center px-6">
                  <Image src={competitivecompensation} alt="competitive" />
                  <h4 className="text-xl font-semibold mt-4">
                    Competitive Compensation
                  </h4>
                  <p className="opacity-80 mt-2">
                    Attractive salary packages, performance-based incentives,
                    and comprehensive benefits to recognize and reward your
                    contribution.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center px-6">
                  <Image src={workbalance} alt="workbalace" />
                  <h4 className="text-xl font-semibold mt-4">
                    Work-Life Balance & Wellness
                  </h4>
                  <p className="opacity-80 mt-2">
                    Paid time off, flexible work options, and wellness programs
                    that promote a healthy, balanced lifestyle.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center px-6">
                  <Image src={growthdevelopment} alt="growthdevelopment" />
                  <h4 className="text-xl font-semibold mt-4">
                    Growth & Development
                  </h4>
                  <p className="opacity-80 mt-2">
                    Continuous learning through certifications, workshops, and
                    mentorship — empowering you to advance your career in
                    cybersecurity.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center px-6">
                  <Image src={rewards} alt="rewards" />
                  <h4 className="text-xl font-semibold mt-4">
                    Recognition & Rewards
                  </h4>
                  <p className="opacity-80 mt-2">
                    We celebrate excellence. Exceptional performers are
                    acknowledged and rewarded for their dedication, innovation,
                    and impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='border-2 w-full'>
                <div className="container mx-auto border-2 h-100 py-10">
                    <h1 className='text-[32px] font-bold text-center mb-8'>CURRENT OPENING</h1>
                    <div className='flex  items-center justify-center gap-10'>
                        <div className='w-1/3  '>
                            <Image src={happyfemale} width={400} height={300} className='rounded-2xl' alt='happyfemale' />
                        </div>
                        <div className='w-2/3 border-2'></div>
                    </div>
                </div>
            </div> */}
    </div>
  );
}

export default careers;
