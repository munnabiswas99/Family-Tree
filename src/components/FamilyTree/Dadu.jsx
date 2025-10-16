import React from 'react';
import Abbu from './Abbu';
import BoroAbbu from './BoroAbbu';
import SotoFufu from './SotoFufu';

const Dadu = ({asset}) => {
    return (
        <div>
            <h2>Dadu</h2>
            <section className='flex'>
                <Abbu asset={asset}></Abbu>
                <BoroAbbu></BoroAbbu>
                <SotoFufu></SotoFufu>
            </section>
        </div>
    );
};

export default Dadu;