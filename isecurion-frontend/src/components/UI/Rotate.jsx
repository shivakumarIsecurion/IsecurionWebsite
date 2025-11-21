// <section className=" w-full mx-auto ">
        //     <div className="w-full bg-[#2021231A]">
        //         <div className="max-w-[1280px] mx-auto p-4 sm:px-6 lg:px-8">

        //             <h3 className="font-medium text-lg sm:text-xl md:text-2xl text-[#202123]">
        //                 SERVICES
        //             </h3>

        //             <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base text-gray-600 mt-2">
        //                 <Link
        //                     href="/"
        //                     className="whitespace-nowrap hover:text-[#304782] transition-colors duration-300"
        //                 >
        //                     HOME
        //                 </Link>

        //                 <ul className="list-disc flex flex-wrap gap-3 sm:gap-6 list-inside">
        //                     <li className="whitespace-nowrap">SERVICES</li>
        //                     <li className="whitespace-nowrap">{current.title}</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="w-full mx-auto">
        //         <div className="max-w-[1280px] flex  flex-wrap mx-auto h-[70vh] items-center justify-center">


        //             <div className="w-full md:w-1/2 h-auto flex flex-wrap md:flex-nowrap gap-10 justify-center items-center">

        //                 <div className="">

        //                     <div className="relative w-60 sm:w-80 flex items-start">
        //                         <Image src={IsecurionLogo} alt="logo" className="w-full h-auto" />
        //                         <div className="absolute -top-[-30px] right-[-60px] sm:right-[-50px]  flex items-center">
        //                             <div className="w-7 h-[2px] bg-[#304782]" />
        //                             <div className="bg-[#304782] text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-[2px] shadow-md ml-2">
        //                                 <p className="text-xs sm:text-sm font-semibold">{current.number}</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="flex gap-4 mt-4 md:mt-0">
        //                         <button
        //                             onClick={prevSlide}
        //                             className="w-10 h-10 text-[#304782] cursor-pointer rounded-full flex items-center justify-center bg-white hover:bg-[#304782] hover:text-white transition border border-[#304782]"
        //                         >
        //                             <Icon
        //                                 icon="weui:arrow-filled"
        //                                 rotate={2}
        //                                 width="18"
        //                                 height="18"
        //                             />
        //                         </button>
        //                         <button
        //                             onClick={nextSlide}
        //                             className="w-10 h-10 cursor-pointer hover:text-white rounded-full border border-[#304782] flex items-center justify-center hover:bg-[#223266] transition"
        //                         >
        //                             <Icon icon="weui:arrow-filled" width="18" height="18" />
        //                         </button>
        //                     </div>

        //                 </div>


        //                 <div className="flex flex-col  items-center justify-center">
        //                     <div>
        //                         <h3 className="font-bold text-3xl">{current.title}</h3>
        //                         <p className="mt-3">{current.description}</p>
        //                         <button className=" cursor-pointer mt-2">Know More</button>
        //                     </div>

        //                 </div>

        //             </div>



        //             <div className="relative w-full  md:w-1/2 h-[480px] overflow-hidden">

        //                 <div className="w-100 h-100">
        //                     <Image
        //                         src={current.img}
        //                         alt={current.title}
        //                         fill
        //                         className="object-cover"
        //                     />

        //                 </div>
        //             </div>


        //         </div>
        //     </div>

        // </section>
        // <section className=" w-full mx-auto ">
        //     {/* --- Breadcrumb/Header Section --- */}
        //     <div className="w-full bg-[#2021231A]">
        //         <div className="max-w-[1280px] mx-auto p-4 sm:px-6 lg:px-8">
        //             <h3 className="font-medium text-lg sm:text-xl md:text-2xl text-[#202123]">
        //                 SERVICES
        //             </h3>

        //             <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base text-gray-600 mt-2">
        //                 <Link
        //                     href="/"
        //                     className="whitespace-nowrap hover:text-[#304782] transition-colors duration-300"
        //                 >
        //                     HOME
        //                 </Link>

        //                 <ul className="list-disc flex flex-wrap gap-3 sm:gap-6 list-inside">
        //                     <li className="whitespace-nowrap">SERVICES</li>
        //                     <li className="whitespace-nowrap font-medium text-[#304782]">{current.title}</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     {/* --- End Breadcrumb/Header Section --- */}

        //     {/* --- Service Details Slider Section --- */}
        //     <div className="w-full mx-auto">
        //         <div className="max-w-[1280px] flex flex-wrap mx-auto md:h-[70vh] items-center justify-center py-10 md:py-0">

        //             {/* Left Column (Logo, Controls, Text) */}
        //             <div className="w-full md:w-1/2 h-auto flex flex-wrap md:flex-nowrap gap-10 justify-center items-center px-4">

        //                 <div className='flex flex-col items-center md:items-start'>
        //                     <div className="flex flex-col md:flex-row md:gap-">
        //                         {/* Logo/Number Area */}
        //                         <div className="order-2 md:order-1 flex justify-center w-full md:w-auto">
        //                             <div className="relative w-60 sm:w-80 flex items-start">
        //                                 {/* Assuming Image component is used here, replace with a standard img if not Next.js */}
        //                                 <Image src={IsecurionLogo} alt="logo" width={320} height={100} className="w-full h-auto" />
        //                                 <div className="absolute top-[0px] right-[-30px] sm:right-[-50px] md:right-[-60px] flex items-center">
        //                                     <div className="w-7 h-[2px] bg-[#304782]" />
        //                                     <div className="bg-[#304782] text-white w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-[2px] shadow-md ml-2">
        //                                         <p className="text-xs sm:text-sm font-semibold">{current.number}</p>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>

        //                         {/* Text Details Area */}
        //                         <div className="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-left relative top-20  ">
        //                             <h3 className="font-bold text-3xl text-[#202123]">{current.title}</h3>
        //                             <p className="mt-3 max-w-md text-gray-700">{current.description}</p>
        //                             <button className="bg-[#304782] text-white px-6 py-2 mt-4 rounded-sm hover:bg-[#223266] transition duration-300">
        //                                 Know More
        //                             </button>
        //                         </div>

        //                     </div>

        //                     {/* Slider Controls */}
        //                     <div className="flex gap-4 mt-8">
        //                         <button
        //                             onClick={prevSlide}
        //                             className="w-10 h-10 text-[#304782] cursor-pointer rounded-full flex items-center justify-center bg-white hover:bg-[#304782] hover:text-white transition border border-[#304782]"
        //                             aria-label="Previous Service"
        //                         >
        //                             <Icon icon="weui:arrow-filled" rotate={2} width="18" height="18" />
        //                         </button>
        //                         <button
        //                             onClick={nextSlide}
        //                             className="w-10 h-10 text-[#304782] cursor-pointer hover:text-white rounded-full border border-[#304782] flex items-center justify-center hover:bg-[#223266] transition"
        //                             aria-label="Next Service"
        //                         >
        //                             <Icon icon="weui:arrow-filled" width="18" height="18" />
        //                         </button>
        //                     </div>
        //                 </div>

        //             </div>
        //             {/* End Left Column */}

        //             {/* Right Column (Image) */}
        //             <div className="relative w-full md:w-1/2 min-h-[400px] md:h-full overflow-hidden mt-8 md:mt-0">
        //                 <div className="w-full h-full">
        //                     <Image
        //                         src={current.img}
        //                         alt={current.title}
        //                         fill
        //                         className="object-cover transition duration-500 ease-in-out"
        //                     />
        //                 </div>
        //             </div>
        //             {/* End Right Column */}

        //         </div>
        //     </div>
        //     {/* --- End Service Details Slider Section --- */}
        // </section>