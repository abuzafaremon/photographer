import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className='col-12 col-sm-6 col-md-4 g-3'>
      <div className="text-center pb-2">
        <img width='100%' height='242px' src={img} alt="" />
        <h3>{name}</h3>
        <h5>Price: {price}</h5>
        <p><small>{description}</small></p>
        <Link to='/checkout'>
          <button className='btn btn-success btn-sm w-100'>Book: {name}</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;