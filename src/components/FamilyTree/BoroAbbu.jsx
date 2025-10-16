import React from 'react';
import Cousin from './Cousin';
const BoroAbbu = () => {
    return (
        <div>
            <h3>Boro Abuu</h3>
            <section className='flex'>
                <Cousin name={'Sheam'}></Cousin>
                <Cousin name={'Jayed'}></Cousin>
            </section>
        </div>
    );
};

export default BoroAbbu;