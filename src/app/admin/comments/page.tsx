import React from 'react'
import AdminNavbar from '../_components/AdminNavbar'
import AdminSiderbar from '../_components/AdminSiderbar'
import Image from 'next/image'
import { ICONS, IMAGES } from '@/assets'

const page = () => {
    return (
        <>
            <AdminNavbar />
            <div>
                <div className='flex'>
                    <AdminSiderbar />
                    <div className='p-10 m-10 rounded-xl'>
                        <div className=' flex flex-col w-[1100px] rounded-xl bg-white'>
                            <div className=' bg-primary p-4 rounded-t-xl'>
                                <span className=' font-700 text-white'>All Comments</span>
                            </div>
                            <div className=' flex justify-between py-4 px-10 text-center text-[#7B809A] text-sm'>
                                <span className='w-[10px] '>Sno</span>
                                <span className='w-[240px]'>ID</span>
                                <span className='w-[250px]'>NAME</span>
                                <span className='w-[500px]'>COMMENT</span>
                            </div>
                            <hr  className=' mx-10'/>
                            <div className=' flex justify-between py-4 px-10 text-center text-sm'>
                                <span className='w-[10px] text-[#7B809A]'>1.</span>
                                <span className='w-[250px] text-[#7B809A]'>john@creative-tim.com</span>
                                <span className='w-[240px] font-900'>John Michael</span>
                                <p className='w-[500px] text-[#7B809A]'>&quot;Very helpful resource for anyone needing a bill of sale form. The only downside is that the site could load a bit faster. Other than that, it&apos;s great.&quot;</p>
                            </div>
                            <hr className='mx-10' />
                            <div className=' flex justify-between py-4 px-10 text-center text-sm'>
                                <span className='w-[10px] text-[#7B809A]'>2.</span>
                                <span className='w-[250px] text-[#7B809A]'>john@creative-tim.com</span>
                                <span className='w-[240px] font-900'>John Michael</span>
                                <p className='w-[500px] text-[#7B809A]'>&quot;Very helpful resource for anyone needing a bill of sale form. The only downside is that the site could load a bit faster. Other than that, it&apos;s great.&quot;</p>
                            </div>
                            <hr className='mx-10' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default page
