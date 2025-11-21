import Image from 'next/image'
import React from 'react'
import iso27001 from '../../assets/27001-iso.png'
import iso9001 from '../../assets/9001-iso.png'
function Certification() {
    return (
        <div className="relative group cursor-pointer w-[90%] sm:w-[400px] md:w-[420px]">
            {/* Bottom card with ISO logos */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-full bg-[#FAFAFA] h-[220px] sm:h-[268px] flex flex-col items-center gap-4 sm:gap-5 justify-center shadow-[5px_5px_10px_rgba(0,0,0,0.25)] z-10 rounded-lg">
                <div className="flex gap-6 sm:gap-8 items-center justify-center">
                    <div>
                        <Image src={iso27001} alt="ISO 27001" width={100} height={100} className="w-[80px] sm:w-[120px]" />
                    </div>
                    <div className="bg-[#2021234D]/50 h-[80px] sm:h-[100px] w-[2px] sm:w-[3px] rounded-full"></div>
                    <div>
                        <Image src={iso9001} alt="ISO 9001" width={100} height={100} className="w-[80px] sm:w-[120px]" />
                    </div>
                </div>
            </div>

            {/* Top card with heading */}
            <div className="w-full h-[220px] sm:h-[268px] bg-[#0000004D]/40 z-20 rounded-lg transition-all duration-300 group-hover:bg-[#0C1A3E] group-hover:text-white">
                <h3 className="text-center font-bold text-[20px] sm:text-[24px] text-[#202123] group-hover:text-white">
                    COMPANY CERTIFICATIONS
                </h3>
            </div>

            {/* Subtitle */}
            <h5 className="text-center mt-3 text-[#202123]/80 font-medium relative z-30">
                We’re aligned with global standards.
            </h5>
        </div>







    )
}

export default Certification