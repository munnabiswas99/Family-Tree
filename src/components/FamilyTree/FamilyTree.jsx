import React from 'react';
import Dadu from './Dadu';
import './FamilyTree.css'

const FamilyTree = () => {
    const asset = 'Diamond';
    return (
        <div className='family_tree'>
            <Dadu asset={asset}></Dadu>
        </div>
    );
};

export default FamilyTree;