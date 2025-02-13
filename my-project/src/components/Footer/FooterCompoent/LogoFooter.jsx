import React from 'react'


export default function LogoFooter() {
    return (
        <div className='flex flex-col gap-[50px]'>
            <div className='flex flex-col justify-between gap-[20px]'>
                <img src="../../../../src/assets/footer.png" alt="" className={'w-[228px] h-[50px]'}/>
                <p className='font-medium text-[20px] leading-[30px] text-[#4C4C4D] max-w-[500px]'>We believe in the
                    power of play to foster creativity, problem-solving skills, and imagination.</p>
            </div>
            <div className='flex flex-col justify-between gap-[24px]'>
                <a href={"/"}>
                    <div className='flex items-center gap-[10px]'>
                        <div
                            className='bg-[#FFF5F0] text-black p-[8px] border-[2px] border-solid border-[#262626] rounded-md'>
                            <img src="../../../../src/assets/footer/Icon%20(2).png" alt=""/>
                        </div>
                        <span className='text-[16px] text-[#262626] font-medium'>hello@littlelearners.com</span>
                    </div>
                </a>
                <a href={"/"}>
                    <div className='flex items-center gap-[10px]'>
                        <div
                            className='bg-[#FFF5F0] text-black p-[8px] border-[2px] border-solid border-[#262626] rounded-md'>
                            <img src="../../../../src/assets/footer/Icon%20(1).png" alt=""/>
                        </div>
                        <span className='text-[16px] text-[#262626] font-medium'>+91 91813 23 2309</span>
                    </div>
                </a>
                <a href={"/"}>
                    <div className='flex items-center gap-[10px]'>
                        <div
                            className='bg-[#FFF5F0] text-black p-[8px] border-[2px] border-solid border-[#262626] rounded-md'>
                            <img src="../../../../src/assets/footer/Icon%20(1).svg" alt=""/>
                        </div>
                        <span className='text-[16px] text-[#262626] font-medium'>Somewhere in the World</span>
                    </div>
                </a>
            </div>
        </div>
    )
}
