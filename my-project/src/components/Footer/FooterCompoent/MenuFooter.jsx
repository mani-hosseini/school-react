import React from 'react'

import FooterHome from "./HomeFooter";
import About from "./AboutUsFooter";
import Acedemi from "./AcademicsFooter";
import Contact from "./ContactUsFooter";

export default function MenuFooter() {
    return (
        <div className='flex items-start justify-between lg:gap-[70px] flex-wrap sm:gap-[30px] lg:mt-0 mt-14'>
            <FooterHome/>
            <About/>
            <Acedemi/>
        </div>
    )
}
