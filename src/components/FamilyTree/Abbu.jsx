import React from 'react';
import Munna from './Munna';
import Fahad from './Fahad';
import Fatema from './Fatema';

const Abbu = () => {
    return (
        <div>
            <h3>Abbu</h3>
            <section className='flex'>
                <Munna></Munna>
                <Fatema></Fatema>
                <Fahad></Fahad>
            </section>
        </div>
    );
};

export default Abbu;