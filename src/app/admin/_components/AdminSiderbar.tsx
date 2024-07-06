"use client"
import { SetStateAction, useState } from 'react';
import { ICONS } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

const AdminSiderbar = () => {
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (item: string | SetStateAction<null>) => {
    setClickedItem(item);
    // Perform logout action or any other necessary logic here
  };

  return (
    <div className='h-[1000px] w-[260px] border-2px border-r-[#c1ced6] border-y-0 border-l-0 bg-[#fffdfd]'>
      <div className='flex flex-col py-10 gap-10'>
        <div className={`flex justify-start gap-4 px-12 items-center ${clickedItem === 'dashboard' ? 'text-primary' : 'text-[#B1B1B1]'}`} onClick={() => handleClick('dashboard')}>
          <Image src={ICONS.dashboard} alt='' className='w-[19px]' />
          <span className='text-primary font-700 text-xl'><Link href="/admin/dashboard">Dashboard</Link></span>
        </div>
        <div className={`flex justify-start gap-4 px-12 items-center ${clickedItem === 'pdfs' ? 'text-primary' : 'text-[#B1B1B1]'}`} onClick={() => handleClick('pdfs')}>
          <Image src={ICONS.pdflogo} alt='' className='w-[19px]' />
          <span className='font-700 text-xl'><Link href="/admin/pdfs">Pdfs</Link></span>
        </div>
        <div className={`flex justify-start gap-4 px-12 items-center cursor-pointer ${clickedItem === 'comments' ? 'text-primary' : 'text-[#B1B1B1]'}`} onClick={() => handleClick('comments')}>
          <Image src={ICONS.comments} alt='' className='w-[19px]' />
          <span className='text-[#B1B1B1] font-700 text-xl'><Link href="/admin/comments">Comments</Link></span>
        </div>
        <div className={`flex justify-start gap-4 px-12 mt-72 items-center ${clickedItem === 'logout' ? 'text-primary' : 'text-[#B1B1B1]'}`} onClick={() => handleClick('logout')}>
          <Image src={ICONS.logout} alt='' className='w-[19px]' />
          <span className='text-[#B1B1B1] font-700 text-xl'>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default AdminSiderbar;
