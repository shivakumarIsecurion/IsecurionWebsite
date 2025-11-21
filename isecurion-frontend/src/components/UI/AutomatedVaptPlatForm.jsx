import React from 'react'
import BookFreeButton from './BookFreeButton'
function AutomatedVaptPlatForm() {
    return (
        <div className='h-auto max-w-6xl mx-auto py-10 gap-15 flex flex-col justify-center  items-center '>
            <h1 className='text-center font-bold text-[20px] sm:text-[26px] md:text-[32px]  text-[#FFFFFF]'>AUTOMATED VAPT PLATFORM BY ISECURION</h1>
            <div className=''>
                <p className='text-[16px] sm:text-[18px] text-center md:text-[20px] lg:text-[22px] xl:text-[24px] mx-auto text-white font-normal  leading-relaxed text-justify'>Vulnytics, a comprehensive solution by ISECURION, streamlines vulnerability assessments and penetration testing across your digital infrastructure. Built for security, DevOps, and compliance teams, it enables continuous scanning, compliance-ready reporting, and centralized risk visibility.
                </p>
            </div>
            <BookFreeButton />

        </div>
    )
}

export default AutomatedVaptPlatForm