import React, { useEffect, useRef } from 'react';

import Footer from '../../components/footer/Footer';
import CareersPage from './CareersPage';

const Careers = () => {

  

  return (
    <div className='flex flex-col overflow-hidden' >
      {/* ServicesPage content */}
      <CareersPage />

      {/* Footer at the bottom */}
<Footer />
    </div>
  );
};

export default Careers;
