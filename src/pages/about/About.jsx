import React, { useEffect, useRef } from 'react';
import TeamProfile from './TeamProfile';
import Goals from './Goals';

const About = () => {
   

  return (
    <div className='flex flex-col'>
      
      <Goals />
      <TeamProfile />
    </div>
  );
};

export default About;
