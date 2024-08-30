"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const SocialSignin = () => {
    const router = useRouter()
    const session = useSession();

    const handleSocialLogin=(provider)=>{
        const res =signIn(provider,{redirect: false})
        if(res.status===200){
            router.push('/')
        }
        
    }
    if(session.status === 'authenticated'){
        router.push('/')
    }

    return (
        <div className='flex items-center justify-center space-x-3'>
            <button onClick={()=>handleSocialLogin('google')}  className='btn text-3xl flex items-center justify-center text-green-500'><FaGoogle/></button>
            <button onClick={()=>handleSocialLogin('github')} className='btn text-3xl flex items-center justify-center text-primary'><FaGithub /></button>
        </div>
    );
};

export default SocialSignin;