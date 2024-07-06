"use client"
import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import React from 'react';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here, e.g., call API or redirect
        console.log(data); // data will contain email and password
        // Example:
        // if (data.email === 'correct' && data.password === 'password') {
        //     // successful login
        // }
    };
    return (
        <div className='flex h-full w-full overflow-hidden'>
            <div className='flex flex-col w-1/2 p-[140px] bg-white'>
                <Image src={ICONS.login} alt='logo' className='py-16 ml-28' />
                <form onSubmit={handleSubmit(onSubmit)} className='ml-16'>
                    <div className='relative mb-6'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                            <Image src={IMAGES.mail} alt='mail' />
                        </div>
                        <input
                            type='text'
                            id='email'
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Email is not valid'
                                }
                            })}
                            className='bg-white text-lg rounded-lg block border w-[400px] ps-10 p-2.5 placeholder:text-[#333333]'
                            placeholder='name@flowbite.com'
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
                    </div>
                    <div className='relative mb-6'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                            <Image src={IMAGES.lock} alt='lock' />
                        </div>
                        <input
                            type='password'
                            id='password'
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long'
                                }
                            })}
                            className='bg-white text-lg rounded-lg block border w-[400px] ps-10 p-2.5 placeholder:text-[#333333]'
                            placeholder='************'
                        />
                        {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
                    </div>
                    <div className='flex justify-center text-center'>
                        <button
                            type='submit'
                            className='text-white bg-[#3E6FBF] p-4 rounded-xl mr-6  text-center w-[400px]'
                        >
                            <span className='text-center'><Link href="admin/dashboard">Login</Link></span>
                        </button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center bg-[#D8DEE8] w-1/2 h-screen'>
                <Image src={IMAGES.loginGroup} alt='logo' className='' />
            </div>
        </div>
    );
};

export default Login;
