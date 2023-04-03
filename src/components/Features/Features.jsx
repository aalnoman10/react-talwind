import React from 'react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

const Features = ({ feature }) => {
    return (
        <div className='text-left flex items-center'>
            <CheckBadgeIcon className='w-6 py-2 mx-4' />
            <p>{feature}</p>
        </div>
    );
};

export default Features;