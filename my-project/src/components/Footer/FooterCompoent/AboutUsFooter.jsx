import React from 'react'
export default function About() {
    return (
        <div className='flex flex-col gap-[24px] sm:order-3'>
            <a href={"/pages/AboutUs"}>
                <span className='text-[17px] font-semibold text-[#262626] hover:text-red-700'>About Us</span>
            </a>
            <ul className='flex flex-col gap-[24px] lg:text-[17px] sm:text-[13px] font-medium text-[#333333 ]'>
                <a href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>Our Mission</li>
                </a>
                <a href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>Our Vission</li>
                </a>
                <a href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>Awards</li>
                </a>
                <a href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>History</li>
                </a>
                <a href={"/pages/AboutUs"}>
                    <li className='hover:text-red-700'>Teachers</li>
                </a>
            </ul>
        </div>
    )
}
