"use client"
import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Checkout = ({params}) => {
const { data } = useSession()
const [service, setService]= useState({})
// console.log('id',params.id)
    const loadService = async()=>{
        const details = await getServicesDetails(params.id)
        setService(details.service)
    }
    
    const { _id, title, description, img, price, facility } = service || {};

    const handleBooking = async(event)=>{
        event.preventDefault();
        const newBooking={
            email: data?.user?.email,
            name: data?.user?.name,
            address: event.target.address.value,
            phone: event.target.phone.value,
            date: event.target.date.value,
            serviceTitle: title,
            serviceId:_id,
            price:price,
        }
        const res = await fetch('http://localhost:3000/checkout/api/new-booking',{
            method:'POST',
            body:JSON.stringify(newBooking),
            headers:{
                "content-type":"application/json"
            }
        })
        console.log(res)
    }

    useEffect(()=>{
        loadService()
    },[params])

    return (
        <div className='container mx-auto'>
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
                            Checkout {title}
                        </h1>
                    </div>
                </div>
                <div className='mt-12 bg-slate-300 p-12'>
                    <form onSubmit={handleBooking}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Name</span>
                                </label>
                                <input defaultValue={data?.user?.name} type="text" name='name' className='input input-bordered'/>
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Date</span>
                                </label>
                                <input defaultValue={new Date().getDate()} type="date" name='date' className='input input-bordered'/>
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Email</span>
                                </label>
                                <input defaultValue={data?.user?.email} type="email" name='email' placeholder='email' className='input input-bordered'/>
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Due Amount</span>
                                </label>
                                <input defaultValue={price} type="text" name='price' readOnly className='input input-bordered'/>
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Phone</span>
                                </label>
                                <input type="text" name='phone' placeholder='Your Phone' className='input input-bordered'/>
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Present Address</span>
                                </label>
                                <input type="text" name='address' placeholder='Your Address' className='input input-bordered'/>
                            </div>
                        </div>
                        <div className='form-control mt-6'>
                        <input className='btn btn-primary btn-black' type="submit" value="Order Confirm"/>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Checkout;