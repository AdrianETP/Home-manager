import React from 'react';
import ContributorsComponent from '../SharedComponents/ContribuitorsComponents';
import './ProductComponent.css';

const ProductComponent = (props) => {
    return (
        <div className='Product-card'>
            <div className='Product-left-info'>
                <h1 className='Product-name'>{props.name}</h1>   
                <ContributorsComponent />
            </div>
            <div className='Product-right-info'>
                <h1 className='Product-price'>${props.precio}</h1>
                <div className='Product-check'>
                    <label htmlFor="comprado" className='Comprado-label'>Comprado</label>
                    <input className='CheckBox' type="checkbox" id="comprado" />
                </div>
            </div>

        </div>
    );
};

export default ProductComponent;