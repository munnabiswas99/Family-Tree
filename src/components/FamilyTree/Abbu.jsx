import React from 'react';
import Munna from './Munna';
import Fahad from './Fahad';
import Fatema from './Fatema';

const Abbu = ({asset}) => {
    return (
        <div>
            <h3>Abbu</h3>
            <section className='flex'>
                <Munna asset={asset}></Munna>
                <Fatema></Fatema>
                <Fahad></Fahad>
            </section>
        </div>
    );
};

export default Abbu;