import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Ash = ({asset}) => {
    const newAsset = useContext(AssetContext);
    return (
        <div>
            <h5>Ashfa</h5>
            <p>Asset: {asset}</p>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Ash;