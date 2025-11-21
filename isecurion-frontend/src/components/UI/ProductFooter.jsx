import { Icon } from '@iconify/react'
import React from 'react'
function ProductFooter() {
    return (
        <footer>
            <div className='container mx-auto border-2 h-[300px] mt-10 flex flex-1 items-center justify-between'>
                <div className='border-2 '>
                    <div className=' flex items-center  space-x-3 rounded-3xl bg-[#FFFFFF33]'>
                        <Icon icon="ix:about-filled" width="16" height="16" className='bg-[#FFFFFF33]' />
                        <h1>ISECURION Services</h1>
                    </div>

                    <div className='ml-10 mt-5'>
                        <div className='flex justify-center items-center space-x-4'>
                            <Icon icon="mage:security-shield" width="24" height="24" className='text-white ' />
                            <p className='text-sm text-[#FFFFFF] font-normal'>Vulnerability Assessment & Penetration Testing</p>
                        </div>
                        <div className='flex justify-center items-center space-x-4'>
                            <Icon icon="mage:security-shield" width="24" height="24" className='text-white ' />
                            <p className='text-sm text-[#FFFFFF]'>Vulnerability Assessment & Penetration Testing</p>
                        </div>
                        <div className='flex justify-center items-center space-x-4'>
                            <Icon icon="mage:security-shield" width="24" height="24" className='text-white ' />
                            <p className='text-sm text-[#FFFFFF]'>Vulnerability Assessment & Penetration Testing</p>
                        </div>
                        <div className='flex justify-center items-center space-x-4'>
                            <Icon icon="mage:security-shield" width="24" height="24" className='text-white ' />
                            <p className='text-sm text-[#FFFFFF]'>Vulnerability Assessment & Penetration Testing</p>
                        </div>
                        <div className='flex justify-center items-center space-x-4'>
                            <Icon icon="mage:security-shield" width="24" height="24" className='text-white ' />
                            <p className='text-sm text-[#FFFFFF]'>Vulnerability Assessment & Penetration Testing</p>
                        </div>
                    </div>
                </div>

                <div className='border-2 '>
                    <h1>ISECURION</h1>
                    <p className='text-white'>We provide expert cybersecurity audits, VAPT (Vulnerability Assessment and Penetration Testing), and compliance services in India to help businesses meet ISO 27001, SOC 2, RBI, and GDPR requirements.
                    </p>

                    <div className='flex items-center  space-x-4'>
                        <Icon icon="material-symbols:call" width="24" height="24" style={{ color: '#FFFFFF' }} className='bg-amber-500 rounded-3xl p-2 w-8 h-8' />
                        <p className='text-white'>+918861201570</p>
                    </div>
                    <div className='flex items-center  space-x-4'>
                        <Icon icon="material-symbols:call" width="24" height="24" style={{ color: '#FFFFFF' }} className='bg-amber-500 rounded-3xl p-2 w-8 h-8' />
                        <p className='text-white'>info@isecurion.com</p>
                    </div>
                    <p className='text-white'>Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    )
}

export default ProductFooter