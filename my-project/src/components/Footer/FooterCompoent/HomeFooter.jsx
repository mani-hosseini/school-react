import React from 'react'
export default function FooterHome() {
  return (
    <div className='flex flex-col gap-[24px] sm:order-1'>
        <a href={"/"}>
            <span className='text-[17px] font-semibold text-[#262626] hover:text-red-700'>Home</span>
        </a>
        <ul className='flex flex-col gap-[24px] lg:text-[17px] sm:text-[13px] font-medium text-[#333333]'>
            <a href={"/"}>
                <li className='hover:text-red-700'>Features</li>
            </a>
            <a href={"/"}>
                <li className='hover:text-red-700'>OurTestimonials</li>
            </a>
            <a href={"/"}>
                <li className='hover:text-red-700'>FAQ</li>
            </a>
        </ul>
    </div>
  )
}
