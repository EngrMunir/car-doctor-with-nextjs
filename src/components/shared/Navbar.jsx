import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navItems =[
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contacts",
            path:"/contacts"
        }
    ]
    return (
       <div className='bg-base-100  text-slate-500'>
         <div className="navbar container mx-auto">
            <div className="navbar-start">
                <Link href="/">
                    <Image alt='logo' src="/assets/logo.svg" height={60} width={100} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <div>

               </div>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
            </div>
       </div>
    );
};

export default Navbar;