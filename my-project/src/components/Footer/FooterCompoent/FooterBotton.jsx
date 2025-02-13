import React from 'react'


export default function FooterBotton() {
    return (
        <div className='flex flex-col border-t mt-14 border-[#262626] border-solid flex-wrap'>
            <div
                className='flex items-center lg:justify-between  sm:justify-cente sm:py-[15px] border-b border-[#262626] border-solid flex-wrap'>
                <div className='flex items-center lg:gap-[16px] sm:m-auto lg:m-0 sm:gap-[6px]'>
                    <span
                        className='font-medium lg:text-[16px] sm:text-[12px] text-[#333333] border-r-[2px] border-solid border-[#262626] lg:pr-[16px] sm:pr-[6px]'>Terms of Service</span>
                    <span
                        className='font-medium lg:text-[16px] sm:text-[12px] text-[#333333] border-r-[2px] border-solid border-[#262626] lg:pr-[16px] sm:pr-[6px]'>Privacy Policy</span>
                    <span className='font-medium lg:text-[16px] sm:text-[12px] text-[#333333]'>Cookie Policy</span>
                </div>
                <div className='flex items-center sm:m-auto lg:m-0 lg:pt-[0px] sm:py-[20px] lg:gap-[14px] sm:gap-[10px]'>
                    <a href={"/"}>
                        <div
                            className='bg-[#FFDECC] border-[2px] border-[#262626] border-solid p-[8px] rounded-lg hover:bg-red-300'>
                            <img src="../../../../src/assets/footer/Icon%20(1).svg" alt=""/>
                        </div>
                    </a>
                    <a href={"/"}>
                        <div
                            className='bg-[#FFDECC] border-[2px] border-[#262626] border-solid p-[8px] rounded-lg hover:bg-red-300'>
                            <img src="../../../../src/assets/footer/Icon.svg" alt=""/>
                        </div>
                    </a>
                    <a href={"/"}>
                        <div
                            className='bg-[#FFDECC] border-[2px] border-[#262626] border-solid p-[8px] rounded-lg hover:bg-red-300'>
                            <img src="../../../../src/assets/footer/Icon%20(2).svg" alt=""/>
                        </div>
                    </a>
                </div>
            </div>
            <span className='text-[#656567] lg:text-[18px] sm:text-[12px] text-center font-medium pt-[30px]'>Copyright © [2023] Little Learners Academy. All rights reserved.</span>
        </div>
    )
}
