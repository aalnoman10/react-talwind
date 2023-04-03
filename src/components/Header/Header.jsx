import React, { useState } from 'react';
import Link from '../LInk/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Services', path: '/Services' },
    ];

    const [open, setOpen] = useState(true);

    return (
        <header>
            <nav className='sm:block md:flex h-full bg-cyan-700 '>
                <div className='sm:hidden text-slate-300 duration-1000'>
                    <span onClick={() => setOpen(!open)}>
                        {open ? <Bars3Icon className='w-6 py-2 mx-4' /> : <XMarkIcon className='w-6 py-2 mx-4' />}
                    </span>
                </div>
                <ul className={`flex flex-col sm:justify-center items-center md:flex-row absolute w-full md:static bg-cyan-700 duration-500 ${!open ? 'top-9' : '-top-44'}`}>
                    {
                        routes.map(route => <Link
                            key={route.id}
                            route={route}
                        ></Link>)
                    }
                </ul>
            </nav>
        </header >
    );
};

export default Header;