import React from 'react'
import FooterTop from './FooterCompoent/FooterTop'
import FooterBotton from './FooterCompoent/FooterBotton'
export default function Footer() {
    return (
        <div className='m-auto w-[95%] flex flex-col gap-y-[14px] mt-5 mb-20 sm:mt-14'>
            <div className='w-full border-[2px] p-14 border-black  rounded-[8px] bg-white'>
                <FooterTop />
                <FooterBotton />
            </div>
        </div>
    )
}
