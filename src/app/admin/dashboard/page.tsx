import React, { Children } from 'react'
import AdminNavbar from '../_components/AdminNavbar'
import AdminSiderbar from '../_components/AdminSiderbar'
import Image from 'next/image'
import { ICONS, IMAGES } from '@/assets'

const page = ( ) => {
  return (
    <>
    <AdminNavbar/>
    <div>
      <div className='flex'>
        <AdminSiderbar/>
        <div className='p-6 w-[320px] h-[200px] shadow-xl m-10 rounded-xl bg-white'>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between '>
              <Image src={ICONS.note} alt='' />
              <div className='flex flex-col'>
                <span className=' text-[#7B809A] mt-1'>No .of Bills</span>
                <span  className='text-lg font-700 text-end'>250</span>
              </div>
            </div>
            <hr />
            <div className='flex  mt-6'>
              <span className=' text-lg font-thin'>Just updated</span>
            </div>
          </div>
        </div>
        <div className='p-6 w-[320px] h-[200px] shadow-xl m-10 rounded-xl bg-white'>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between '>
              <Image src={ICONS.logo3} alt='' />
              <div className='flex flex-col'>
                <span className=' text-[#7B809A] mt-1'>No .of States</span>
                <span  className='text-lg font-700 text-end'>40</span>
              </div>
            </div>
            <hr />
            <div className='flex  mt-6'>
              <span className=' text-lg font-thin'>Just updated</span>
            </div>
          </div>
        </div><div className='p-6 w-[320px] h-[200px] shadow-xl m-10 rounded-xl bg-white'>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between '>
              <Image src={ICONS.wechat} alt='' />
              <div className='flex flex-col'>
                <span className=' text-[#7B809A] mt-1'>No .of comments</span>
                <span  className='text-lg font-700 text-end'>25228382370</span>
              </div>
            </div>
            <hr />
            <div className='flex  mt-6'>
              <span className=' text-lg font-thin'>Just updated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default page