import React from 'react'
import LogoFooter from './LogoFooter'
import MenuFooter from './MenuFooter'
export default function FooterTop() {
  return (
    <div className='lg:flex sm:block items-start justify-between gap-[80px] '>
        <LogoFooter/>
        <MenuFooter/>
    </div>
  )
}
