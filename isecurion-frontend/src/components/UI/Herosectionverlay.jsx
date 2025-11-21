import React, { useEffect, useRef, useState } from "react";

import herobackground from "../../assets/herobackground.png";
const herosectionData = [
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

export default function HerosectionRotatingBlobs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % herosectionData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const current = herosectionData[currentIndex];

  return (
    <div className="relative w-full h-[90vh] sm:h-[80vh]  z-10 overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 bg-black"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15  z-10"
        style={{ backgroundImage: `url(${herobackground.src})` }}
      />

      <div className="absolute left-1/2 inset-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-clockwise w-[1000px] pointer-events-none aspect-square ">
        <div className="bg-[#0C1A3E]/60 blur-[50px] w-140 h-140 rounded-full absolute top-10 left-10" />
        <div className="bg-[#272757]/60 blur-[50px] w-85 h-85 rounded-full absolute top-10 right-10" />
        <div className="bg-[#272757]/60 blur-[50px] w-85 h-85  rounded-full absolute bottom-10 left-10" />
        <div className="bg-[#0C1A3E] blur-[50px] w-100 h-100  rounded-full absolute bottom-10 right-10" />
      </div>

      <div className="absolute z-50 mt-1  md:mt-15 text-white left-1/2 -translate-x-1/2 text-center w-[85%] max-w-[850px] ">
        <div>
          <h5 className="text-lg font-bold mb-10 sm:mb-8 ">{current.title1}</h5>
        </div>
        <div>
          <h2 className=" text-[20px] text-2xl md:text-[32px]  font-extrabold mb-3 opacity-90 leading-tight text-white">
            {current.title2}
          </h2>
        </div>
        <div>
          <p className=" text-base mb-6">{current.discription}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-10 justify-center">
          <button className="px-6 py-3 rounded-full bg-[#BE5103] hover:bg-[#F96C45] transition">
            {current.btn1}
          </button>
          <button className="relative px-6 py-3 rounded-full bg-[#25B8CB] overflow-hidden group">
            <span className="relative z-10">{current.btn2}</span>

            <span
              className="absolute inset-0 bg-[#1887CD] opacity-0 group-hover:opacity-50
    rounded-full scale-0 group-hover:scale-142
    origin-top-left
    transition-transform duration-600 ease-out"
              style={{
                clipPath: "polygon(0 0, 150% 0, 10 140%)",
              }}
            ></span>
          </button>
        </div>

        {/* bottom indicators */}
        <div className="flex items-center justify-center gap-3  mt-15">
          {herosectionData.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-25 h-2 rounded-full cursor-pointer transition-all duration-300 
        ${i === currentIndex ? "bg-[#FFFFFF]" : "bg-white/40"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
