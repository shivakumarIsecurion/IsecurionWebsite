import Image from 'next/image'
import React from 'react'
import cisa from '../../assets/CISA.png'
import ceh from '../../assets/CEH.png'
import cissp from '../../assets/cissp.png'
import oscp from '../../assets/OSCP.png'
import ccna from '../../assets/ccnasecurity.png'
import cmpen from '../../assets/CMPen.png'
function AuditCertification() {
    return (
        <div className="relative group cursor-pointer w-[90%] sm:w-[400px] md:w-[420px]">
            {/* Top card */}
            <div className="w-full h-[220px] sm:h-[268px] bg-[#0000004D]/40 z-20 rounded-lg transition-all duration-300 group-hover:bg-[#0C1A3E] group-hover:text-white ">
                <h3 className="text-center font-bold text-[20px] sm:text-[24px] text-[#202123] group-hover:text-white">
                    AUDITORS CERTIFICATIONS
                </h3>
            </div>

            {/* Bottom card with images */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-full bg-[#FAFAFA] h-[220px] sm:h-[268px] flex flex-col items-center gap-4 sm:gap-5 justify-center shadow-[5px_5px_10px_rgba(0,0,0,0.25)] z-10 rounded-lg">
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
                <h5 className="text-sm sm:text-base text-[#202123]/80">Our experts are recognized worldwide.</h5>
            </div>
        </div>

    )
}

export default AuditCertification