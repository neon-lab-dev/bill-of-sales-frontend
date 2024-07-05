import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            validationErrors.email = 'Email is not valid';
        }

        if (!password) {
            validationErrors.password = 'Password is required';
        } else if (password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, proceed with login
            // For example, call an API or redirect
        }
    };

    return (
        <div className='flex h-full w-full overflow-hidden'>
            <div className='flex flex-col w-1/2 p-[140px] bg-white'>
                <Image src={ICONS.login} alt='logo' className='py-16 ml-28' />
                <form onSubmit={handleSubmit} className='ml-16'>
                    <div className='relative mb-6'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                            <Image src={IMAGES.mail} alt='mail' />
                        </div>
                        <input
                            type='text'
                            id='email'
                            className='bg-white text-lg rounded-lg block border w-[400px] ps-10 p-2.5 placeholder:text-[#333333]'
                            placeholder='name@flowbite.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                    </div>
                    <div className='relative mb-6'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                            <Image src={IMAGES.lock} alt='lock' />
                        </div>
                        <input
                            type='password'
                            id='password'
                            className='bg-white text-lg rounded-lg block border w-[400px] ps-10 p-2.5 placeholder:text-[#333333]'
                            placeholder='************'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                    </div>
                    <div className='flex justify-center text-center'>
                        <button
                            type='submit'
                            className='text-white bg-[#3E6FBF] p-4 rounded-xl ml-2 text-center w-[400px]'
                        >
                            <span className='text-center'>Login</span>
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
