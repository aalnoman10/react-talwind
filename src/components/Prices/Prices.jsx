import React, { useEffect, useState } from 'react';
import SinglePrice from '../SinglePrice/SinglePrice';

const Prices = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('fack.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])

    return (
        <div>
            <h1 className="text-5xl text-center py-2">Awesome Price Market</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 p-4 gap-4">
                {
                    prices.map(price => <SinglePrice
                        key={price.id}
                        price={price}
                    ></SinglePrice>)
                }
            </div>
        </div>
    );
};

export default Prices;