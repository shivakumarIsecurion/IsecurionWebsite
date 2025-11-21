import React from 'react'
import worldmap from '../../assets/worldmap.png'
import googlemap from '../../assets/googlemap.png'
import { Icon } from '@iconify/react'


function WorldMap() {

    return (
        <div className='w-full'>
            <div className='w-full  h-auto mx-auto bg-cover  bg-[#0C1A3EF2]/140' style={{ backgroundImage: `url(${worldmap.src})`, backgroundBlendMode: "overlay", }}>
                <div className='max-w-6xl   mx-auto  items-center justify-between py-10 px-4 '>

                    <div className='flex flex-wrap  justify-between gap-15 sm:gap-0'>

                        <div className="flex flex-col   items-start gap-5 w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">

                            <div className="flex gap-4 justify-center items-center">
                                <Icon
                                    icon="mdi:location"
                                    width="30"
                                    height="30"
                                    className="text-white bg-[rgba(255,255,255,0.3)] rounded-2xl p-0.5"
                                />
                                <p className="text-white text-lg">Corporate Office</p>
                            </div>
                            <div className='max-w-[350px]'>
                                <p className="text-white text-lg font-medium">
                                    #670, 2nd Floor, 6th Main Road, RBI Layout, Opposite Elita Promenade, J P
                                    Nagar 7th Phase, Bengaluru - 560078, Karnataka, INDIA
                                </p>
                            </div>

                            <div className="flex gap-4 items-center">
                                <Icon
                                    icon="material-symbols:call"
                                    width="30"
                                    height="30"
                                    className="text-white bg-[rgba(255,255,255,0.3)]  rounded-2xl p-1"
                                />
                                <a href="tel:+918861201570" className='text-white text-lg hover:underline font-normal cursor-pointer'>+918861201570</a>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Icon
                                    icon="ic:baseline-email"
                                    width="30"
                                    height="30"
                                    className="text-white bg-[rgba(255,255,255,0.3)]  rounded-2xl p-1"
                                />
                                <a
                                    href="mailto:info@isecurion.com"
                                    className="text-white text-lg font-normal hover:underline cursor-pointer"
                                >
                                    info@isecurion.com
                                </a>
                            </div>

                        </div>

                        <div className="flex flex-col  items-start gap-5 w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">

                            <div className="flex gap-4 justify-center items-center">
                                <Icon
                                    icon="mdi:location"
                                    width="30"
                                    height="30"
                                    className="text-white bg-[rgba(255,255,255,0.3)]  rounded-2xl p-0.5"
                                />
                                <p className="text-white text-lg font-medium">Kolkata</p>
                            </div>
                            <div className='max-w-[350px]'>
                                <p className="text-white text-lg font-medium">
                                    #120, First Floor, Regus
                                    Globsyn Crystals, XI-11 &
                                    12, EP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
                                </p>
                            </div>

                            <div className="flex gap-7 items-center">
                                <div className='w-8 h-8 bg-[rgba(255,255,255,0.3)]   rounded-full flex justify-center items-center'>
                                    <Icon
                                        icon="material-symbols:call"
                                        width="30"
                                        height="30"
                                        className=" text-white font-normal text-lg  rounded-2xl p-1"
                                    />
                                </div>
                                <a href="tel:+918861201570" className='text-white text-lg hover:underline cursor-pointer'>+91 98305 54255</a>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Icon
                                    icon="ic:baseline-email"
                                    width="30"
                                    height="30"
                                    className="text-white text-lg font-normal bg-[rgba(255,255,255,0.3)]  rounded-2xl p-1"
                                />
                                <a
                                    href="mailto:info@isecurion.com"
                                    className="text-white text-lg hover:underline cursor-pointer"
                                >
                                    info@isecurion.com
                                </a>
                            </div>

                        </div>

                        <div className="flex flex-col  items-start gap-5 w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">

                            <div className="flex gap-4 justify-center items-center">
                                <Icon
                                    icon="mdi:location"
                                    width="30"
                                    height="30"
                                    className="text-white bg-[rgba(255,255,255,0.3)]  rounded-2xl p-0.5"
                                />
                                <p className="text-white font-medium text-lg">United States of America</p>
                            </div>
                            <div className='max-w-[300px]'>
                                <p className="text-white font-medium text-lg ">

                                    1014 N Plum Grove Road,
                                    Schaumburg, IL 60173, United States
                                </p>
                            </div>

                            <div className="flex gap-7 items-center">
                                <Icon
                                    icon="material-symbols:call"
                                    width="30"
                                    height="30" 
                                    className="text-white bg-[rgba(255,255,255,0.3)]  rounded-2xl p-1"
                                />
                                <a href="tel:+91+919830554255" className='text-white text-lg font-normal  hover:underline cursor-pointer'>+91 9830554255</a>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Icon
                                    icon="ic:baseline-email"
                                    width="30"
                                    height="30"
                                    className="text-white bg-[rgba(255,255,255,0.3)]  rounded-2xl p-1"
                                />
                                <a
                                    href="mailto:info@isecurion.com"
                                    className="text-white font-normal text-lg hover:underline cursor-pointer"
                                >
                                    info@isecurion.com
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='w-full'>
                    <div className='max-w-6xl mx-auto '>
                        <h1 className='text-[36px] font-bold text-white/40 px-4'>OUR OFFICE</h1>
                    </div>
                </div>

            </div>

            <div className='w-full h-56'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2484020298284!2d77.57643837585641!3d12.8917425166225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae154a3ec1f2a3%3A0x51b25b57bd2609e0!2sISECURION%20Technology%20%26%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1763461412220!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='w-full h-full'
                ></iframe>
             
            </div>
        </div>
    )
}

export default WorldMap