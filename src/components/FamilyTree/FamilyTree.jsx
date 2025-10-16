import React, { createContext } from 'react';
import Dadu from './Dadu';
import './FamilyTree.css'

export const AssetContext = createContext('');

const FamilyTree = () => {
    const asset = 'Diamond';
    const NewAsset = 'Gold';
    return (
        <div className='family_tree'>
            <AssetContext.Provider value={NewAsset}>
                <Dadu asset={asset}></Dadu>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;