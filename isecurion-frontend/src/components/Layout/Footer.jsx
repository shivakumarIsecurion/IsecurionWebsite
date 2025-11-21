import { Icon } from "@iconify/react";
import React from "react";
const letters = ["I", "S", "E", "C", "U", "R", "I", "O", "N"];
import backgroundImage from "../../assets/IsecurionTextImage.png";
import Link from "next/link";
function Footer() {
  return (
    <footer className="w-full bg-[#0C1A3EF2] text-white py-14 pb-0">
      <div className="max-w-6xl mx-auto p-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* === LEFT: ABOUT SECTION === */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">ABOUT US</h4>

            {/* About Paragraph - Removed max-w-[500px] as parent width handles it */}
            <p className="text-sm leading-relaxed text-white/80 text-justify">
              ISECURION is a CERT-In Empaneled and ISO 27001:2022 certified
              information security consulting company providing out-most service
              quality, innovation and research in the field of Information
              Security and Technology. We provide a unique blend of services to
              our customers catering to the current information security
              landscape.
            </p>
            <Link
              href="https://isecurion.com/about-isecurion-vapt-services.html"
              className="p-2  rounded-full mt-3 bg-[#0287D7]  text-white font-medium text-sm"
            >
              Know More
            </Link>

            {/* Our Services List */}
            <div>
              <h4 className="text-lg font-semibold mt-3 text-white">
                OUR SERVICES
              </h4>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-white/80">
                <li>
                  {/* Added placeholder hrefs */}
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition"
                  >
                    Vulnerability Assessment & Penetration Testing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition"
                  >
                    Compliance Auditing and Risk Assessment
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 pt-3 text-sm text-white/80">
              <a href="#" className="hover:underline hover:text-white">
                Privacy
              </a>{" "}
              |
              <a href="#" className="hover:underline hover:text-white">
                Disclaimer
              </a>{" "}
              |
              <a href="#" className="hover:underline hover:text-white">
                Terms of Use
              </a>
            </div>

            {/* Copyright */}
            <div className="flex flex-wrap gap-2 items-center text-sm text-white/80">
              <span>Copyright © 2025 ISECURION</span> |
              <span>All Rights Reserved</span>
            </div>
          </div>

          {/* === RIGHT: CONTACT US SECTION === */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">CONTACT US</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* --- Bengaluru Office --- */}
              <div className="space-y-4 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:location" width="22" />
                  </div>
                  <p className="font-medium text-base text-white">
                    Bengaluru Office
                  </p>
                </div>

                <p className="pl-12 leading-relaxed">
                  #670, 2nd Floor, 6th Main Road <br /> RBI Layout, Opp Elita
                  Promenade,
                  <br />
                  JP Nagar 7th Phase,
                  <br /> Bengaluru - 560078, Karnataka, INDIA
                </p>

                {/* Phone Link (Tel) - Fixed functionality */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon icon="material-symbols:call" width="22" />
                  </div>
                  <a
                    href="tel:+918861201570"
                    className="hover:underline hover:text-white transition"
                  >
                    +91 8861201570
                  </a>
                </div>

                {/* Email Link (Mailto) - Fixed functionality */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon icon="ic:baseline-email" width="22" />
                  </div>
                  <a
                    href="mailto:info@isecurion.com"
                    className="hover:underline hover:text-white transition"
                  >
                    info@isecurion.com
                  </a>
                </div>
              </div>

              {/* --- Kolkata Office --- */}
              <div className="space-y-4 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon icon="mdi:location" width="22" />
                  </div>
                  <p className="font-medium text-base text-white">
                    Kolkata Office
                  </p>
                </div>

                <p className="pl-12 leading-relaxed">
                  #120, First Floor, Regus Globsyn Crystals XI-11 & 12,
                  <br />
                  EP Block, Sector V, Bidhannagar,
                  <br />
                  Kolkata - 700091, West Bengal, INDIA
                </p>

                {/* Phone Link (Tel) - Fixed functionality */}
                <div className="flex items-center gap-3 pl-1">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon icon="material-symbols:call" width="22" />
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="hover:underline hover:text-white transition"
                  >
                    +91 9876543210
                  </a>
                </div>

                {/* Email Link (Mailto) - Fixed functionality */}
                <div className="flex items-center gap-3 pl-1">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon icon="ic:baseline-email" width="22" />
                  </div>
                  <a
                    href="mailto:sales.kol@isecurion.com"
                    className="hover:underline hover:text-white transition"
                  >
                    sales.kol@isecurion.com
                  </a>
                </div>

                <div className="flex  gap-2 pl-1 pt-2">
                  <p className="whitespace-nowrap font-medium text-white">
                    STAY CONNECTED
                  </p>

                  {/* Facebook - Wrapped in <a> */}
                  <a
                    href="https://www.facebook.com/ISECURION"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition"
                  >
                    <Icon
                      icon="ic:baseline-facebook"
                      width="22"
                      height="20"
                      className="cursor-pointer"
                    />
                  </a>

                  {/* Twitter - Wrapped in <a> and standardized icon size */}
                  <Link
                    href="https://www.facebook.com/ISECURION"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition"
                  >
                    <Icon
                      icon="garden:twitter-fill-12"
                      width="12"
                      height="18"
                      className="cursor-pointer"
                    />
                  </Link>

                  {/* LinkedIn - Switched to <a> and standardized icon size */}
                  <Link
                    href="https://in.linkedin.com/company/isecurion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition"
                  >
                    <Icon
                      icon="mdi:linkedin"
                      width="22"
                      height="20"
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:justify-between">
          {letters.map((letter, index) => (
            <h1
              key={index}
              className="text-[40px] sm:text-[55px] md:text-[70px] lg:text-[150px] xl:text-[180px] font-extrabold text-transparent bg-clip-text bg-no-repeat bg-cover bg-center transition-all duration-500 ease-in-out opacity-10 hover:opacity-70 hover:brightness-100 filter"
              style={{
                backgroundImage: `url(${backgroundImage.src})`,
                backgroundBlendMode: "overlay",
              }}
            >
              {letter}
            </h1>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
