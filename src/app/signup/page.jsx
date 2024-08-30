"use client"

// import SocialSignin from'@/components/shared/SocialSignin';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { FaGithub, FaGoogle } from "react-icons/fa6";

const page = () => {
    const handleRegister = async(event)=>{

        event.preventDefault();
        
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        const resp = await fetch("http://localhost:3000/signup/api",{
            method:"POST",
            body: JSON.stringify(newUser),
            headers:{
                "content-type":"application/json"
            }
        })
        if(resp.status === 200){
            event.target.reset()
        }
    }
    return (
        <div className='container mx-auto py-24 px-24'>
           
        <div className='grid grid-cols-2 gap-12 items-center'>
            <div>
                <Image src="/assets/images/login/login.svg" height="540" width="540" alt='login image' />
            </div>
            <div className='border-2 p-12'>
            <h3 className='text-3xl font-semibold text-primary text-center mb-12'>Sign Up</h3>
                <form onSubmit={handleRegister}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='your name' className='input input-bordered w-full max-e-x5 mt-2' />
                    <br /><br />
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='your email' className='input input-bordered w-full max-e-x5 mt-2' />
                    <br /><br />
                    <label htmlFor="email">Password</label>
                    <input type="text" name='password' placeholder='your password' className='input input-bordered w-full max-e-x5 mt-2' />
                    <button type='submit' className='btn btn-primary w-full mt-12'>Sign Up</button>
                </form>
                <div>
                    <h6 className='my-12 text-center'>or sign up with</h6>
                    {/* <SocialSignin></SocialSignin> */}
                    <h6 className='my-12 text-center'>Already Registered<Link className='text-primary font-semibold' href={'/login'}>Login</Link></h6>
                </div>
            </div>
        </div>
    </div>
    );
};

export default page;