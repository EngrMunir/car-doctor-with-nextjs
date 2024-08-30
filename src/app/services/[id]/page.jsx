import { getServicesDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata ={
    title:"Details",
    description:"Service Details Page"
}

const page = async({params}) => {
    const details = await getServicesDetails(params.id)
    const { title, description, img, price, facility } = details.service;
    return (
        <div className='w-11/12 mx-auto my-10'>
            <div>
                <div className='relative h-72'>
                    <Image
                        className='absolute h-72 w-full left-0 top-0 object-cover'
                        src={img}
                        alt='service'
                        width={1920}
                        height={1000}
                        // style={{width}}
                    />
                    <div className='absolute h-full left-0 top-0 items-center justify-center'>
                        <h1 className='text-white text-3xl font-bold flex justify-center items-center'>
                            Details of{title}
                        </h1>
                    </div>
                </div>
                <div className='p-10 bg-gray-100'>
                    <h2 className='text-3xl font-bold text-orange-300'>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='my-6'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='col-span-2 grid grid-cols-2 gap-6'>
                        {
                            facility.map((item,index)=>{
                                <div 
                                className='bg-rose-300 p-4 border-t-4 border-t-rose-300 rounded-xl'
                                key={index}
                                >
                                    <h2 className='text-xl font-bold'>{item?.name}</h2>
                                    <p>{item.details}</p>
                                </div>
                            })
                        }
                    </div>
                    
                    <div className='p-6 bg-gray-100'>
                        <Image className='w-full object-cover h-50' src={'/assets/images/checkout/chechout.png'} alt='checkout' width={300} height={200}/>
                        <div className='flex my-4'>
                            <h2 className='text-xl font-bold'>Price:</h2>
                            <p className='text-2xl text-rose-500'>${price}</p>
                        </div>
                        <Link href={`/checkout/something`}>
                            <button className='bg-rose-500'>Check out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;