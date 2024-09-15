import React from 'react';
import './ServiciosTotal.css';

const ServiciosTotal = (props) => {
    // Component logic goes here

    function isTotal() {
        if (props.total > 0) {
            return props.total
        } else {
            return 1858
        }
    }

    function hasTitle() {
        if (props.title) {
            return props.title
        } else {
            return 'Total por persona'
        }
    }

    return (
        <div className='Total-card'>
            <h4 className='Total-subtitle'>{hasTitle()}</h4>
            <h1 className='Total-amount'>${isTotal()}</h1>
            <h4 className='Total-subtitle'>30 de Octubre</h4>
        </div>
    );
};

export default ServiciosTotal;