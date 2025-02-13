import React from 'react'
export default function Acedemi() {
    return (
        <div className='flex flex-col gap-[24px] pr-[40px] sm:order-2'>
            <a href={"/pages/Academics"}>
                <span className='text-[17px] font-bold text-[#262626] hover:text-red-700'>Academics</span>
            </a>
            <ul className='flex flex-col gap-[24px] lg:text-[17px] sm:text-[13px] font-medium text-[#333333 ]'>
                <a href={"/pages/Academics"}>
                    <li className='hover:text-red-700'>SpecialFeatures</li>
                </a>
                <a href={"/pages/Academics"}>
                    <li className='hover:text-red-700'>Gallery</li>
                </a>
            </ul>
        </div>
    )
}
