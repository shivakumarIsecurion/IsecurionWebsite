import Image from 'next/image'
import React from 'react'
import cisa from '../../assets/CISA.png'
import ceh from '../../assets/CEH.png'
import cissp from '../../assets/cissp.png'
import oscp from '../../assets/OSCP.png'
import ccna from '../../assets/ccnasecurity.png'
import cmpen from '../../assets/CMPen.png'
import iso27001 from '../../assets/27001-iso.png'
import iso9001 from '../../assets/9001-iso.png'

function CertifiedTrust() {
    return (
        <div className='w-full py-12'>
            <div className="max-w-6xl mx-auto flex flex-wrap justify-evenly gap-20 items-center  px-5">

                {/* COMPANY CERTIFICATIONS */}
                <div className="relative  group cursor-pointer w-[90%] sm:w-[400px]">
                    <div className="w-full h-[220px] sm:h-[268px] bg-[#0000004D]/40 z-20 rounded-lg transition-all duration-300 group-hover:bg-[#0C1A3E] group-hover:text-white ">
                        <h3 className="text-center font-bold text-[14px] sm:text-[24px] p-1 text-[#202123] group-hover:text-white whitespace-nowrap">
                            COMPANY CERTIFICATIONS
                        </h3>
                    </div>

                    <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-full bg-[#FAFAFA] h-[220px] sm:h-[268px] flex flex-col items-center gap-4 sm:gap-5 justify-center shadow-[5px_5px_10px_rgba(0,0,0,0.25)] z-10 rounded-lg">
                        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
                            <Image src={iso27001} width={100} height={100} alt="CISA" className="w-[50px] sm:w-[80px]" />
                            <span className='w-0.5 h-30 bg-gray-400'></span>
                            <Image src={iso9001} width={100} height={100} alt="CEH" className="w-[50px] sm:w-[80px]" />

                        </div>
                        <h5 className="text-sm sm:text-base text-[#202123]/80 text-center pt-5">We’re aligned with global standards.</h5>
                    </div>
                </div>



                {/* AUDITORS CERTIFICATIONS */}
                <div className="relative group cursor-pointer w-[90%] sm:w-[400px] ">
                    <div className="w-full h-[220px] sm:h-[268px] bg-[#0000004D]/40 z-20 rounded-lg transition-all duration-300 group-hover:bg-[#0C1A3E] group-hover:text-white ">
                        <h3 className="text-center  z-30 font-bold text-[14px] sm:text-[24px] p-1 text-[#202123] group-hover:text-white whitespace-nowrap">
                            AUDITORS CERTIFICATIONS
                        </h3>
                    </div>

                    <div className="absolute top-6 left-6  sm:top-10  w-full bg-[#FAFAFA] h-[220px] sm:h-[268px] flex flex-col items-center gap-4 sm:gap-5 justify-center shadow-[5px_5px_10px_rgba(0,0,0,0.25)] z-10 rounded-lg">
                        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
                            <Image src={cisa} width={50} height={50} alt="CISA" className="w-[45px] sm:w-[60px]" />
                            <Image src={ceh} width={50} height={50} alt="CEH" className="w-[45px] sm:w-[60px]" />
                            <Image src={cissp} width={50} height={50} alt="CISSP" className="w-[45px] sm:w-[60px]" />
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
                            <Image src={oscp} width={50} height={50} alt="OSCP" className="w-[45px] sm:w-[60px]" />
                            <Image src={ccna} width={50} height={50} alt="CCNA" className="w-[45px] sm:w-[60px]" />
                            <Image src={cmpen} width={50} height={50} alt="CMPen" className="w-[45px] sm:w-[60px]" />
                        </div>
                        <h5 className="text-sm sm:text-base text-center text-[#202123]/80">Our experts are recognized worldwide.</h5>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default CertifiedTrust
