"use client"
import { ICONS } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const AdminSidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard')

  const handleItemClick = (item) => {
    setActiveItem(item)
  }

  const isActive = (item) => activeItem === item

  return (
    <div className='h-full w-[260px] border-2px border-r-[#c1ced6] border-y-0 border-l-0 bg-[#fffdfd]'>
      <div className='flex flex-col py-10 gap-10'>
        <div
          className={`flex justify-start gap-4 px-12 items-center cursor-pointer ${isActive('dashboard') ? 'text-primary' : 'text-[#B1B1B1]'}`}
          onClick={() => handleItemClick('dashboard')}
        >
          <Image src={isActive('dashboard') ? ICONS.dashboard : ICONS.bell} alt='' className='w-[19px]' />
          <span className='font-700 text-xl'>
            <Link href="/admin/dashboard">dashboard</Link>
          </span>
        </div>
        <div
          className={`flex justify-start gap-4 px-12 items-center cursor-pointer ${isActive('pdfs') ? 'text-primary' : 'text-[#B1B1B1]'}`}
          onClick={() => handleItemClick('pdfs')}
        >
          <Image src={isActive('pdfs') ? ICONS.pdflogoActive : ICONS.pdflogo} alt='' className='w-[19px]' />
          <span className='font-700 text-xl'>
            <Link href="/admin/pdfs">pdfs</Link>
          </span>
        </div>
        <div
          className={`flex justify-start gap-4 px-12 items-center cursor-pointer ${isActive('comments') ? 'text-primary' : 'text-[#B1B1B1]'}`}
          onClick={() => handleItemClick('comments')}
        >
          <Image src={isActive('comments') ? ICONS.commentsActive : ICONS.comments} alt='' className='w-[19px]' />
          <span className='font-700 text-xl'>
            <Link href="/admin/comments">comments</Link>
          </span>
        </div>
        <div className='flex justify-start gap-4 px-12 mt-72 items-center cursor-pointer'>
          <Image src={ICONS.logout} alt='' className='w-[19px]' />
          <span className='text-[#B1B1B1] font-700 text-xl'>logout</span>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
