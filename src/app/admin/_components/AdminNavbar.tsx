import { ICONS, IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
        <div className='flex justify-between bg-primary pr-8 pl-2  items-center'>
            <div className='flex justify-center border-r-white border border-y-0 border-l-0'>
            <Image src={ICONS.logo} alt='' className='py-6 px-2 w-[250px]'/>
            </div>
            <div className='flex items-center gap-2'>
            <Image src={ICONS.bell} alt=''/>
            <Image src={ICONS.profile} alt='' className=' rounded-full p-1'/>
            </div> 
        </div>
    </div>
  )
}
export default AdminNavbar