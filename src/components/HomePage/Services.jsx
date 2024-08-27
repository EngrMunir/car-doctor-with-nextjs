import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { services } from "../../lib/services"

const Services = async() => {
    // const {services} = await getServices();
    return (
        <div className='text-slate-900 min-h-screen'>
            <div className='text-center container mx-auto'>
                <h2 className='text-2xl font-bold text-orange-500'>Our Services</h2>
                <h2 className='text-5xl'>Our Services Area</h2>
                <p>The majority have suffered alteration in some fore, by injured humour</p>
            </div>
            <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    { services?.length >0 &&
                        services.map((service) => (
                            <ServiceCard service={service} key={service._id}></ServiceCard>
                        ))
                    }
            </div>
        </div>
    );
};

export default Services;