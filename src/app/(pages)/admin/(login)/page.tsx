import { ICONS, IMAGES } from '@/assets'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className='flex h-full w-full overflow-hidden'>
            <div className=' flex flex-col w-1/2 p-[140px] bg-white'>
                <Image src={ICONS.login} alt='logo' className='py-16 ml-28' />
                <div className="relative mb-6 ml-16">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <Image src={IMAGES.mail} alt='lock' className=''/>
                    </div>
                    <input type="text" id="input-group-1" class=" bg-white text-lg rounded-lg block border w-[400px] ps-10 p-2.5 placeholder:text-[#333333] " placeholder="name@flowbite.com" />
                </div>
                <div class="relative mb-6 ml-16">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <Image src={IMAGES.lock} alt='lock'/>
                    </div>
                    <input type="text" id="input-group-1" class=" bg-white text-lg rounded-lg block border w-[400px] ps-10 p-2.5 placeholder:text-[#333333] " placeholder="************" />
                </div>
                <div className=' flex justify-center text-center ml-8'>
                    <button  className=' text-white bg-[#3E6FBF] p-4 rounded-xl ml-2 text-center w-[400px]'><span className=' text-center'><Link href="/admin/dashboard">Login</Link></span></button>
                </div>
            </div>
            <div className=' flex justify-center  bg-[#D8DEE8] w-1/2 h-screen '>
                <Image src={IMAGES.loginGroup} alt='logo' className='  ' />
            </div>
        </div>
    )
}
export default Login