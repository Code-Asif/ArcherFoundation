import React from 'react';
import './All_Style.css';
import Img1 from '../Assets/images.png';

const Stats = () => {
  const stats = [
    {
      image: Img1, 
      value: '3',
      suffix: 'rd',
      description: 'Amongst all Government and Private KYP center in Bihar',
    },
    {
      image: Img1, 
      value: '2500',
      suffix: '+',
      description: 'Students completed their technical courses',
    },
    {
      image: Img1, 
      value: '100',
      suffix: '+',
      description: 'Companies visit our KYP center',
    },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stats-card">
          <img src={stat.image} alt="Stat logo" className="stats-image" />
          <div className="stats-value">
            {stat.value}
            <sup>{stat.suffix}</sup>
          </div>
          <hr className="stats-divider" />
          <div className="stats-description">{stat.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
