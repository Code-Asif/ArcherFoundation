import React from 'react';
import './All_Style.css';
import img1 from '../Assets/companies.jpg'

function Placement() {

    return (
        <div className='companies'>
            <img src={img1} alt="Companies" className='image'/>
        </div>

    );
}

export default Placement;