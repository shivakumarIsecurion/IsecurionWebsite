"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import rectangle from "../../../assets/ProductPage/Rectangle.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SendMessage from "@/components/UI/SendMessage";
import WorldMap from "@/components/UI/WorldMap";


function Contact() {
  const background = {
    backgroundImage: `url(${rectangle.src})`,
  };
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
    mode: "onChange",
  });

  const generateCaptcha = () => {
    const chars = "abcdefghijklomnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      const character = chars.charAt(Math.floor(Math.random() * chars.length));
      result = result + character;
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleFormSubmit = async (formData) => {

    // Check captcha first
    if (inputCaptcha !== captcha) {
      alert("Captcha incorrect!");
      generateCaptcha();
      setInputCaptcha("");
      return;
    }

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
        alert("Thank you! Your message has been sent successfully. We'll get back to you soon.");
        // Reset form
        reset();
        setInputCaptcha("");
        generateCaptcha();
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section>
      {/* HEADER BREADCRUMB */}
      <div
        className="w-full  bg-white/30 bg-cover"
      // style={{ backgroundImage: `url(${rectangle.src})` }}
      >
        <div className="max-w-6xl mx-auto p-4 sm:px-6 lg:px-8">
          <h3 className=" text-[#202123] font-bold text-2xl">CONTACT US</h3>
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
                CONTACT US
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* contact section  */}
      <div className="w-full mx-auto bg-[#0C1A3E] pb-10 sm:pb-20">
        <div className="max-w-6xl  mx-auto h-auto">
          <div className=" ">
            <h1 className="font-bold text-[32px] text-white p-6">CONTACT</h1>
            <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row">
              <div className="w-full md:w-2/6 text-white flex flex-col gap-1 items-center bg-linear-to-b from-[#2045A4]/90 to-[#0C1A3E]/90  h-auto">
                <h2 className="pl-10 pt-10 pr-5 font-medium text-[32px] leading-snug ">
                  “We Don’t Just Protect Systems — We Protect Trust.”
                </h2>
                <p className="font-medium  text-[16px] pt-10 pl-10 pb-10 pr-6 leading-snug">
                  Our specialists are ready to guide you through risk,
                  compliance, and resilience.
                </p>
              </div>

              <div className="w-full md:w-4/6 bg-white">
                <div className="p-15 flex flex-col gap-7">
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

                    <div className="flex flex-col gap-3">
                      <label htmlFor="captcha">Captcha</label>
                      <div className="flex gap-3">
                        <div className="px-4 py-2 w-30 bg-gray-200 text-gray-800 font-semibold text-lg tracking-widest rounded select-none">
                          {captcha}
                        </div>
                        <button
                          className="bg-[#2F94D8] rounded-4xl w-8 h-8 flex justify-center items-center cursor-pointer text-white"
                          onClick={generateCaptcha}
                          type="button"
                        >
                          <Icon icon="ic:round-replay" width="24" height="24" />
                        </button>
                      </div>
                      <input
                        id="captcha"
                        type="text"
                        value={inputCaptcha}
                        onChange={(e) => setInputCaptcha(e.target.value)}
                        placeholder="Enter the text shown above"
                        className="p-1.5 border-2 max-w-[350px] border-[#20212366]/40"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#2F94D8] text-white p-2 rounded-xl cursor-pointer text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  map section  */}

      <div>
        <WorldMap />
      </div>
    </section>
  );
}

export default Contact;
