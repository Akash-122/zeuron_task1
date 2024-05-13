import React, { useRef } from 'react';
import './HomeMainbar.css';

// imagePaths={imagePaths} selected={selectedFrame}
const HomeMainbar = ({imagePaths, selected}) => {
  const mainContainerRef = useRef(null);

  const handleScroll = () => {
    const mainContainer = mainContainerRef.current;
    if (mainContainer.scrollTop > 0) {
      mainContainer.classList.add('scrolling');
    } else {
      mainContainer.classList.remove('scrolling');
    }
  };

  return (
    <div className="main-container" ref={mainContainerRef} onScroll={handleScroll}>
      <div className="main-content">
        {selected!=null && selected != undefined && imagePaths[selected]  &&  
        <img className='img' src={imagePaths[selected]} alt="Image" />
        }
        {/* Add more content if needed */}
      </div>
    </div>
  );
};

export default HomeMainbar;
