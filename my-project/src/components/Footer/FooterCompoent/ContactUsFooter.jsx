import React from 'react'
export default function Contact() {
    return (
        <div className='flex flex-col items-start justify-start gap-[24px] sm:order-4'>
            <a href={"/pages/Contact"}>
                <span className='text-[17px] font-semibold text-[#262626] hover:text-red-700'>Contact Us</span>
            </a>
            <ul className='flex flex-col gap-[24px] lg:text-[17px] sm:text-[13px] font-medium text-[#333333 ]'>
                <a href={"/pages/Contact"}>
                    <li className='hover:text-red-700'>Information</li>
                </a>
                <a href={"/pages/Contact"}>
                    <li className='hover:text-red-700'>Map&Direction</li>
                </a>
            </ul>
        </div>
    )
}
