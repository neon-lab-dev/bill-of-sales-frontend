import React, { Children } from 'react'
import AdminNavbar from '../_components/AdminNavbar'
import AdminSiderbar from '../_components/AdminSiderbar'
import Image from 'next/image'
import { ICONS, IMAGES } from '@/assets'
import Link from 'next/link'
import AddBillModel from '@/app/admin/pdfs/_components/AddBillModel'

const page = () => {
    return (
        <>
            <AdminNavbar />
            <div>
                <div className='flex'>
                    <AdminSiderbar />
                    <div className='p-4 m-10 rounded-xl'>
                        <div>
                           <Link href="/admin/pdfs"> <Image src={ICONS.arrow_right} alt='' className='mb-6 ml-2 w-[30px]' /></Link>
                        </div>
                        <div className=' flex flex-col w-[1150px] rounded-xl bg-white'>
                            <div className=' bg-primary p-4 rounded-t-xl flex justify-between'>
                                <span className=' text-xl p-2 text-white font-500'>Add New State</span>
                            </div>
                            <div className='flex bg-white justify-between items-center h-[200px]'>
                                <div className='flex flex-col p-4 gap-3'>
                                    <label htmlFor="state"><span className=' text-xl text-black font-700'>State Name :</span></label>
                                    <input type="text" className=' bg-white p-3 rounded-lg w-[400px] border' placeholder='Enter the State' />
                                </div>
                               <AddBillModel/>
                            </div>
                            <hr  className=' mx-10'/>
                            <div className=' flex justify-between py-4 px-10 text-center text-[#7B809A] text-sm'>
                                <span className='w-[10px] '>Sno</span>
                                <span className='w-[250px]'>Bill Title</span>
                                <span className='w-[250px]'>Uploaded Image</span>
                                <span className='w-[450px]'>Description</span>
                                <span className='w-[250px]'>Action</span>
                            </div>
                            <hr  className='mx-10'/>
                            <div className=' flex justify-between py-4 px-10 text-center text-sm'>
                                <span className='w-[40px] text-[#7B809A]'>1.</span>
                                <span className='w-[250px] text-[#7B809A]'>Alabama Firearm Bill</span>
                                <span className='w-[250px] font-900'>John Michael</span>
                                <p className='w-[450px] text-[#7B809A] text-md'>Download a firearm bill of sale that can be used to legally record and agree in writing to a purchase and sale of a gun legal in the respective State and local laws. </p>
                                <div className='flex justify-center  gap-3 w-[250px]'>
                                    <Image src={ICONS.bin} alt='' />
                                </div>
                            </div>
                            <hr className='mx-10' />
                            <div className=' flex justify-between py-4 px-10 text-center text-sm'>
                                <span className='w-[40px] text-[#7B809A]'>1.</span>
                                <span className='w-[250px] text-[#7B809A]'>Alabama Firearm Bill</span>
                                <span className='w-[250px] font-900'>John Michael</span>
                                <p className='w-[450px] text-[#7B809A] text-md'>Download a firearm bill of sale that can be used to legally record and agree in writing to a purchase and sale of a gun legal in the respective State and local laws. </p>
                                <div className='flex justify-center  gap-3 w-[250px]'>
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