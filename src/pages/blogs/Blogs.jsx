import React, { useEffect, useRef } from 'react';
import '../../App.css'; // Add custom styles for your landing page
import BlogListing from './BlogListing';

const Blogs = () => {
    

  return (
    <>

<div className='flex flex-col bg-gray-900 '>
        
        <BlogListing />
      </div>
    </>
  );
};

export default Blogs;
