import React from 'react'
import Image from 'next/image'
import { ICONS } from '@/assets'
import Link from 'next/link'
import Button from '@/components/Button'

const PdfModel = () => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="">
        <Image src={ICONS.visibility} alt='' />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle " />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-6xl bg-white p-0 ">
            <div className=' flex flex-col rounded-xl bg-white '>
              <div className=' bg-primary p-4 rounded-t-xl flex justify-between'>
                <span className=' text-xl p-2 text-white font-500'>Add New State</span>
              </div>
              <hr className=' mx-10' />
              <div className=' flex justify-between py-4 px-10 text-center text-[#7B809A] text-sm'>
                <span className='w-[10px] '>Sno</span>
                <span className='w-[250px]'>Bill Title</span>
                <span className='w-[250px]'>Uploaded Image</span>
                <span className='w-[450px]'>Description</span>
                <span className='w-[250px]'>Action</span>
              </div>
              <hr className='mx-10' />
              <div className=' flex justify-between py-4 px-10 text-center text-sm'>
                <span className='w-[40px] text-[#7B809A]'>1.</span>
                <span className='w-[250px] text-[#7B809A]'>Alabama Firearm Bill</span>
                <span className='w-[250px] '>John Michael</span>
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
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </div>
  )
}

export default PdfModel