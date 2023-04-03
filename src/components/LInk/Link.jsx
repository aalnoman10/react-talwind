import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='py-1 hover:bg-cyan-900'>
            <a className='text-slate-300 px-4' href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;