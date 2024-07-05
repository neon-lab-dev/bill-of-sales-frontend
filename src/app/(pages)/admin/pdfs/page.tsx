import React, { Children } from 'react'
import AdminNavbar from '../_components/AdminNavbar'
import AdminSiderbar from '../_components/AdminSiderbar'
import Image from 'next/image'
import { ICONS, IMAGES } from '@/assets'
import PdfModel from './_components/PdfModel'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div>
                <div className='flex'>
                    <AdminSiderbar />
                    <div className='p-10 m-10 rounded-xl'>
                        <div className=' flex flex-col w-[1100px] rounded-xl bg-white'>
                            <div className=' bg-primary p-4 rounded-t-xl flex justify-between'>
                                <form className="max-w-md ">
                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-white rounded-lg bg-white" placeholder="Search State" required />                                    </div>
                                </form>
                                <button className='p-3 text-primary bg-white font-700 rounded-xl px-8'><Link href="/admin/add-new-state">Add New State</Link></button>
                            </div>
                            <div className=' flex justify-between py-4 px-10 text-center text-[#7B809A] text-sm'>
                                <span className='w-[10px] '>Sno</span>
                                <span className='w-[250px]'>ID</span>
                                <span className='w-[250px]'>Name Of State</span>
                                <span className='w-[250px]'>Total Pdfs</span>
                                <span className='w-[250px]'>Action</span>

                            </div>
                            <hr className=' mx-10' />
                            <div className=' flex justify-between py-4 px-10 text-center text-sm'>
                                <span className='w-[40px] text-[#7B809A]'>1.</span>
                                <span className='w-[250px] text-[#7B809A]'>john@creative-tim.com</span>
                                <span className='w-[250px] font-900'>John Michael</span>
                                <p className='w-[250px] text-[#7B809A]'>15</p>
                                <div className='flex justify-center  gap-3 w-[250px]'>
                                   <PdfModel/>
                                    <Image src={ICONS.bin} alt='' />
                                </div>
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