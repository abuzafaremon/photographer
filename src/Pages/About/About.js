import React from 'react';
import Emon from '../../images/emon2.png';

const About = () => {
  return (
    <div className='container row mx-auto text-center'>
      <h2 className='text-danger'>About Me</h2>
      <div className='col-12 col-md-6 mx-auto'>
        <img className='w-50' src={Emon} alt="" />
        <h3>Name: Abu Zafar Emon</h3>
        <p className='lead'>My Goal: <br />My goal is to become a full stack developer and get a job in abroad. Get job in abroad is my big dream. Because i want to surprise my family and my beloved wife.</p>
      </div>
    </div>
  );
};

export default About;