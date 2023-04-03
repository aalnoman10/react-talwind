import React from 'react';
import Features from '../Features/Features';

const SinglePrice = ({ price }) => {
    return (
        <div className='bg-violet-400 p-3 text-center flex flex-col'>
            <h4 className='text-4xl'>{price.name}</h4>
            <h2><span className="text-3xl">{price.price} / Mon</span></h2>
            <h3 className="text-2xl text-left">Features</h3>
            {
                price.features.map((feature, ind) => <Features
                    key={ind}
                    feature={feature}
                ></Features>)
            }
            <button className='text-2 bg-blue-600 text-yellow-50 w-full p-2 mt-auto'>Bay Now </button>
        </div >
    );
};

export default SinglePrice;