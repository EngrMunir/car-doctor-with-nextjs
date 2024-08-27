"use client"

import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { signIn } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
// import SocialSignin from '@/components/shared/SocialSignin';


const page = () => {
    const router = useRouter();

    const handleLogin = async(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const resp = await signIn('credentials',{
            email,
            password,
            redirect: false
        });
        console.log(resp)
        if(resp.status === 200){
            router.push('/')
        }
    }
    return (
        <div className='container mx-auto py-24 px-24'>
           
            <div className='grid grid-cols-2 gap-12 items-center'>
                <div>
                    <Image src="/assets/images/login/login.svg" height="540" width="540" alt='login image' />
                </div>
                <div className='border-2 p-12'>
                <h3 className='text-3xl font-semibold text-primary text-center mb-12'>Sign In</h3>
                    <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='your email' className='input input-bordered w-full max-e-x5 mt-2' />
                    <br /><br />
                    <label htmlFor="email">Password</label>
                    <input type="text" name='password' placeholder='your password' className='input input-bordered w-full max-e-x5 mt-2' />
                    <button type='submit' className='btn btn-primary w-full mt-12'>Sign In</button>
                    </form>
                    <div>
                        <h6 className='my-5 text-center'>or sign in with</h6>
                       {/* <SocialSignin></SocialSignin> */}
                        <h6 className='my-5 text-center'>not have account<Link className='text-primary font-semibold' href={'/signup'}>Sign up</Link></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;