"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

// Placeholder assets - Assuming these are correctly imported in your project structure
import isecurion_logo from "../../assets/isecurion_logo.png";
import herobackground from "../../assets/herobackground.png";
import vulnyticslogo from "../../assets/vulnyticsproduct.png";

// Constants
const COMPANY_ABOUT = "/company/about";
const COMPANY_CONTACT = "/company/contact";
const BLOG_INSIGHTS = "/blog/insights";
const CAREERS = "/careers";
const SERVICES = "/#our-services";
const PRODUCT = "/product";

// Data Structure for Services Menu (unchanged)
const servicesColumns = [
  {
    title: "Strategic",
    href: "/services/strategyGovernance",
    categories: [
      {
        title: "Strategy & Governance",
        services: [
          "Cybersecurity Strategy",
          "Cybersecurity Operating Model",
          "SOC Maturity Assessment",
          "Cloud Architecture Review",
        ],
      },
      {
        title: "Risk, Compliance & Assurance",
        services: [
          "Risk Management",
          "Compliance",
          "Assurance & Audit",
          "SOC Audit Services",
          "HITRUST",
          "Payment Security",
        ],
      },
      {
        title: "Privacy & Data Protection",
        services: ["Privacy Program Implementation"],
      },
    ],
  },
  {
    title: "Offensive",
    categories: [
      {
        title: "Threat Simulation & Emulation",
        services: [
          "Continuous Red Teaming",
          "Breach & Attack Simulation (BAS)",
        ],
      },
      {
        title: "Vulnerability Discovery & Management",
        services: ["Vulnerability Management"],
      },
      {
        title: "Emerging Threat Surface Testing",
        services: ["AI Model Testing"],
      },
    ],
  },
  {
    title: "Defensive",
    categories: [
      {
        title: "Threat Detection & Response",
        services: [
          "Managed Detection And Response (MDR)",
          "Extended Detection And Response (XDR)",
          "SOAR As A Service",
          "Identity Threat Detection And Response (ITDR)",
          "SOC For OT (Operational Technology)",
        ],
      },
      {
        title: "Identity & Access Security",
        services: [
          "Privileged Identity Management (PIM)",
          "Identity & Access Management (IAM)",
          "Zero Trust Architecture Service",
        ],
      },
      {
        title: "Cloud & Network Security Architecture",
        services: [
          "Secure Access Service Edge (SASE)",
          "Cybersecurity Mesh Architecture",
          "Cloud Security Implementation",
        ],
      },
      {
        title: "Application & Development Security",
        services: ["Application Security", "DevSecOps - Shift Left"],
      },
      {
        title: "Data & AI Security",
        services: ["Data Security", "Responsible AI"],
      },
    ],
  },
];

const MobileAccordionItem = ({ title, path, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      <div
        className="flex justify-between items-center py-2 px-2 text-sm font-semibold cursor-pointer  rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Link
          href={path}
          className="flex-1"
          onClick={(e) => e.stopPropagation()}
        >
          {title}
        </Link>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </div>
      {isOpen && <div className="p-2">{children}</div>}
    </div>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const isCustomRange = false;

  // --- DROPDOWN STATES FOR DESKTOP MENUS ---
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  // --- END DROPDOWN STATES ---

  const handleLinkClick = () => {
    setIsMenuOpen(false);

    setIsServicesDropdownOpen(false);
    setIsProductDropdownOpen(false);
    setIsCompanyDropdownOpen(false);
    setIsBlogDropdownOpen(false);
  };

  // Helper for mobile menu link click
  const handleMobileMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  const getNavbarBgClass = () => {
    if (
      !isHome ||
      isCustomRange ||
      isNavbarHovered ||
      isServicesDropdownOpen ||
      isCompanyDropdownOpen
    ) {
      return "bg-white shadow-md";
    }
    return "";
  };

  const getTextColorClass = () => {
    if (
      !isHome ||
      isCustomRange ||
      isNavbarHovered ||
      isServicesDropdownOpen ||
      isProductDropdownOpen ||
      isCompanyDropdownOpen ||
      isBlogDropdownOpen
    ) {
      return "text-black";
    }
    return "text-white";
  };

  useEffect(() => {
    const isAnyMenuOpen =
      isMenuOpen ||
      isServicesDropdownOpen ||
      isProductDropdownOpen ||
      isCompanyDropdownOpen ||
      isBlogDropdownOpen;

    if (isAnyMenuOpen) {
      // Apply overflow: hidden to prevent scrolling
      document.body.style.overflow = "hidden";
      // Optional: Prevent layout shift if scrollbar disappears
      document.body.style.paddingRight = "var(--scrollbar-width, 0)";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    // Cleanup function: Ensures scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [
    isMenuOpen,
    isServicesDropdownOpen,
    isProductDropdownOpen,
    isCompanyDropdownOpen,
    isBlogDropdownOpen,
  ]);
  // --- END EFFECT TO DISABLE BODY SCROLL ---

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 bg-[#0C1A3E]`}
    >
      <div className="relative w-full">
        {isHome && !(isNavbarHovered || isCustomRange) && (
          <>
            <div className="absolute inset-0 bg-[#0C1A3E]" />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 z-10"
            //   style={{ backgroundImage: `url(${herobackground.src})` }}
            />
          </>
        )}

        <div className="relative z-30 text-white max-w-6xl mx-auto flex items-center justify-between px-4 h-20 ">
          <div className="shrink-0">
            <Link href="/" onClick={handleLinkClick}>
              <Image
                src={isecurion_logo}
                width={160}
                height={40}
                alt="iSecurion Logo"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div
              className={`hidden lg:flex flex-1 justify-end items-center gap-4 font-medium text-sm `}
            >
              {/* Home Link */}
              <Link
                href="/"
                onClick={handleLinkClick}
                className="px-2 py-2 inline-block"
              >
                Home
              </Link>

              {/* Services Mega Menu - Corrected w-[900px] issue here */}
              <div
                className="relative "
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <div className="flex items-center gap-1 ">
                  {/* ADDED e.preventDefault() to stop navigation when clicked */}
                  <Link
                    href="/#our-services"
                    onClick={handleLinkClick}
                    className=" inline-block "
                  >
                    Services
                  </Link>
                  <span
                    className="lg:inline-flex items-center transition-transform duration-400"
                    style={{
                      transform: isServicesDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown size={14} />
                  </span>
                </div>

                <div
                  className={`absolute -left-15 top-full mt-0.4 bg-[#0C1A3E] rounded-2xl w-[900px] max-w-[95vw] transform -translate-x-1/2 transition-all duration-300 ${isServicesDropdownOpen
                    ? " visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none"
                    }`}
                >
                  <div className="rounded-xl shadow-lg ring-1 ring-black/5 p-6 pointer-events-auto">
                    <div className="flex gap-10 max-h-[80vh] overflow-y-auto">
                      {servicesColumns?.map((col, idx) => (
                        <div key={idx} className="flex-1">
                          <h3 className="text-base font-semibold text-white mb-1">
                            {col.title}
                          </h3>
                          <span className="block w-40 h-0.5 bg-gray-400 mb-1"></span>

                          <div className="space-y-2">
                            {col?.categories?.map((cat, i) => (
                              <div key={i}>
                                <h4 className="text-sm font-normal text-white mb-2 border-l pl-2 border-white/40">
                                  {cat.title}
                                </h4>

                                <ul className=" pl-4">
                                  {cat?.services?.map((service, x) => (
                                    <Link
                                      key={x}
                                      href={`/services/strategyGovernance/${cat.title.replace(/[^\w]/g, '').toLowerCase()}-${service.replace(/[^\w]/g, '').toLowerCase()}`}
                                      className="text-[12px] text-white/80 hover:text-white hover:underline cursor-pointer block"
                                    >
                                      {service}
                                    </Link>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product dropdown - Controlled by State & PreventDefault on Click */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductDropdownOpen(true)}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
              >
                <div className="flex items-center gap-1">
                  <Link
                    href={PRODUCT}
                    onClick={handleLinkClick}
                    className="inline-block"
                  >
                    Product
                  </Link>
                  <span
                    className="hidden lg:inline-flex items-center transition-transform duration-400"
                    style={{
                      transform: isProductDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown size={14} />
                  </span>
                </div>

                <div
                  className={`absolute top-full bg-[#0C1A3E] rounded-2xl w-[600px]  transform -translate-x-1/2 transition-all duration-300 ${isProductDropdownOpen
                    ? "opacity-100 visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none"
                    }`}
                >
                  <div className="rounded-xl backdrop-blur-md shadow-lg ring-1 ring-black/5 p-3 pointer-events-auto">
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-5 justify-between items-center p-3">
                        <div className="flex flex-col items-center">
                          <Link href="/product">
                            <Image
                              src={vulnyticslogo}
                              alt="vulnyticsImage"
                              width={200}
                              height={50}
                            />
                          </Link>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="max-w-xs flex mt-4">
                            {" "}
                            {/* Added mt-4 for spacing */}
                            <p className="max-w-xl text-white text-sm">
                              We designed Vulnytics to simplify your project
                              management vulnerability tracking, so you can
                              focus on what matters most - protecting your
                              business.{" "}
                              <Link
                                href="/product"
                                className="text-white  underline"
                              >
                                know more
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-px bg-white/30"></div>
                      <div className="flex gap-7 items-center justify-center p-3">
                        <Link
                          href="/product/grc-tool"
                          onClick={handleLinkClick}
                          className="flex items-center text-white text-sm hover:text-cyan-400 transition"
                        >
                          GRC Tool
                        </Link>
                        <Link
                          href="/product/grc-info"
                          onClick={handleLinkClick}
                          className="flex items-center justify-start gap-2"
                        >
                          <span className="w-px h-4 bg-white/50"></span>
                          <p className="max-w-xl text-white text-sm hover:text-cyan-400 transition">
                            GRC Info
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Dropdown - Controlled by State */}
              <div
                className="relative"
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
              >
                <div className="flex items-center gap-1">
                  {/* Using a non-navigating span as the main button */}
                  <span className=" inline-block cursor-default">Company</span>
                  <span
                    className="hidden lg:inline-flex items-center transition-transform duration-300"
                    style={{
                      transform: isCompanyDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown size={14} />
                  </span>
                </div>
                {/* Dropdown content - Visibility controlled by isCompanyDropdownOpen */}
                <div
                  className={`absolute left-1/2 top-full mt-1  w-40 transition-all duration-300 ${isCompanyDropdownOpen
                    ? "opacity-100 visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none"
                    }`}
                >
                  <div className="rounded-xl bg-[#0C1A3E] backdrop-blur-md shadow-lg ring-1 ring-black/5 p-3 pointer-events-auto">
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href={COMPANY_ABOUT}
                          onClick={handleLinkClick}
                          className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={COMPANY_CONTACT}
                          onClick={handleLinkClick}
                          className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CAREERS Link (No dropdown) */}
              <Link
                href={CAREERS}
                onClick={handleLinkClick}
                className=" inline-block rounded text-sm font-medium"
              >
                Careers
              </Link>

              {/* Blog Dropdown - Controlled by State */}
              <div
                className="relative"
                onMouseEnter={() => setIsBlogDropdownOpen(true)}
                onMouseLeave={() => setIsBlogDropdownOpen(false)}
              >
                <div className="flex items-center gap-1">
                  {/* Using a non-navigating span as the main button */}
                  <span className=" inline-block cursor-default">Blog</span>
                  <span
                    className="hidden lg:inline-flex items-center transition-transform duration-300"
                    style={{
                      transform: isBlogDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown size={14} />
                  </span>
                </div>
                {/* Dropdown content - Visibility controlled by isBlogDropdownOpen */}
                <div
                  className={`absolute top-full mt-1 -left-25 w-40 transition-all duration-300 ${isBlogDropdownOpen
                    ? "opacity-100 visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none"
                    }`}
                >
                  <div className="rounded-xl bg-[#0C1A3E] backdrop-blur-md shadow-lg ring-1 ring-black/5 p-3 pointer-events-auto">
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href={BLOG_INSIGHTS}
                          onClick={handleLinkClick}
                          className="block px-2 py-2 text-white text-sm hover:bg-white/10 rounded"
                        >
                          Insights
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`rounded-md transition-colors duration-300 lg:hidden text-white cursor-pointer`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* --- Mobile Menu Sidebar (Kept commented as it was in original code) --- */}
        <div
          className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[80%] max-w-[360px] bg-white  shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-end p-4 bg-[#0C1A3E] h-20 ">
            {/* <Link href="/" onClick={handleLinkClick}>
              <Image
                src={isecurion_logo}
                width={120}
                height={32}
                alt="iSecurion"
              />
            </Link> */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-white"
            >
              <X />
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-[calc(100vh-64px)] bg-[#0C1A3E]">
            <div className="flex flex-col text-white gap-1">
              <Link
                href="/"
                onClick={() => { handleLinkClick(); handleMobileMenuLinkClick(); }}
                className="py-2 px-2 text-sm font-semibold hover:bg-[#2d3957] rounded"
              >
                Home
              </Link>

              <MobileAccordionItem
                title="Services"
                path={SERVICES}
                section="services"
              >
                <div className="flex flex-col gap-4 p-2 bg-[#2d3957] text-white rounded-lg">
                  {servicesColumns?.map((col, idx) => (
                    <div key={idx} className="flex-1">
                      <h3 className="text-base font-semibold  mb-2 border-b border-gray-300 pb-1">
                        {col.title}
                      </h3>
                      <div className="space-y-3">
                        {col?.categories?.map((cat, i) => (
                          <div key={i}>
                            <h4 className="text-sm font-medium  mb-1 border-l pl-2 border-gray-500">
                              {cat.title}
                            </h4>
                            <ul className="space-y-1 ml-2 text-gray-400">
                              {cat?.services?.map((service, x) => (
                                <li key={x} className="text-xs hover:text-white cursor-pointer">
                                  <Link
                                    href={`/services/strategyGovernance/${cat.title.replace(/[^\w]/g, '').toLowerCase()}-${service.replace(/[^\w]/g, '').toLowerCase()}`}
                                    className="text-[12px] text-white/80 hover:text-white hover:underline cursor-pointer block"
                                    onClick={handleMobileMenuLinkClick}
                                  >
                                    {service}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </MobileAccordionItem>

              <MobileAccordionItem
                title="Product"
                path={PRODUCT}
                section="product"
              >
                <div className="flex flex-col gap-4 p-2 bg-[#2d3957]  rounded-lg">
                  <div className="flex flex-col gap-3">
                    <div>
                      <Image
                        src={vulnyticslogo}
                        alt="vulnyticsImage"
                        width={120}
                        height={32}
                      />
                    </div>
                    <div className="flex">
                      <p className="text-sm leading-relaxed text-white">
                        We designed Vulnytics to simplify your project
                        management vulnerability tracking, so you can focus on
                        what matters most - protecting your business.
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gray-300"></div>
                  <div className="flex flex-col gap-3 text-sm text-white">
                    <Link
                      href="/product/grc-tool"
                      onClick={() => { handleLinkClick(); handleMobileMenuLinkClick(); }}
                      className="hover:text-[#a5a5a5]"
                    >
                      GRC Tool
                    </Link>
                    <Link
                      href="/product/grc-info"
                      onClick={() => { handleLinkClick(); handleMobileMenuLinkClick(); }}
                      className="flex items-center gap-2 hover:text-[#a5a5a5]"
                    >
                      <p className="max-w-xl">GRC Info</p>
                    </Link>
                  </div>
                </div>
              </MobileAccordionItem>

              <MobileAccordionItem
                title="Company"
                path={COMPANY_ABOUT}
                section="company"
              >
                <ul className="space-y-1 text-sm text-white">
                  <li>
                    <Link
                      href={COMPANY_ABOUT}
                      onClick={() => { handleLinkClick(); handleMobileMenuLinkClick(); }}
                      className="py-1 block hover:bg-[#2d3957] rounded px-2"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={COMPANY_CONTACT}
                      onClick={() => { handleLinkClick(); handleMobileMenuLinkClick(); }}
                      className="py-1 block hover:bg-[#2d3957] rounded px-2"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </MobileAccordionItem>

              <Link
                href={CAREERS}
                onClick={() => { handleLinkClick(); handleMobileMenuLinkClick(); }}
                className="py-2 px-2 text-sm font-semibold hover:bg-[#2d3957] rounded"
              >
                Careers
              </Link>

              <MobileAccordionItem
                title="Blog"
                path={BLOG_INSIGHTS}
                section="blog"
              >
                <ul className="space-y-1 text-white text-sm ">
                  <li>
                    <Link
                      href={BLOG_INSIGHTS}
                      onClick={() => { handleLinkClick(); handleMobileMenuLinkClick(); }}
                      className="py-1 block hover:bg-[#2d3957] rounded px-2"
                    >
                      Insights
                    </Link>
                  </li>
                </ul>
              </MobileAccordionItem>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
