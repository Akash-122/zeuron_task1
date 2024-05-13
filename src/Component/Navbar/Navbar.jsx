import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from "../../Component/Avatar/Avatar";
import "./Navbar.css";

import figma from '../../assets/figma.svg';
import dropdown from '../../assets/dropdown.svg';
import arrow from '../../assets/arrow.svg';
import hand from '../../assets/hand.svg';
import comment from '../../assets/comment.svg';
import code from '../../assets/code.svg';
import play from '../../assets/play.svg';



const FirstDropdownMenu = () => {
  return (
    <div className="dropdown-container dropdown-left">
      <div className="dropdown-menu">
        <div></div>
        <Link to="/">First Option 1</Link>
        
      </div>
    </div>
  );
};

const MidDropdownMenu = () => {
  return (
    <div className="dropdown-container dropdown-mid">
      <div className="dropdown-menu">
        <Link to="/">Mid Option 1</Link>
        <Link to="/">Mid Option 2</Link>
        <Link to="/">Mid Option 3</Link>
      </div>
    </div>
  );
};

const SecondDropdownMenu = () => {
  return (
    <div className="dropdown-container dropdown-right">
      <div className="dropdown-menu">
        <Link to="/">Second Option 1</Link>
        <Link to="/">Second Option 2</Link>
        <Link to="/">Second Option 3</Link>
      </div>
    </div>
  );
};


const Navbar = () => {
  const [showFirstDropdown, setShowFirstDropdown] = useState(false);
  const [showMidDropdown, setShowMidDropdown] = useState(false);
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);

  const toggleFirstDropdown = () => {
    setShowFirstDropdown(!showFirstDropdown);
  };

  const toggleMidDropdown = () => {
    setShowMidDropdown(!showMidDropdown);
  };

  const toggleSecondDropdown = () => {
    setShowSecondDropdown(!showSecondDropdown);
  };

  var User = null;

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <div className='first-div'>
          <div className="dropdown-toggle icons" onClick={toggleFirstDropdown}>
          <img src={figma} alt="react" width="18px" height="18px"/>
            <img src={dropdown} alt="dropdown" width="10px" />
          </div>
          {showFirstDropdown && <FirstDropdownMenu />}
          <Link to ='/'  className='nav-item nav-btn'>
            <img src={arrow} alt="arrow" width="20px" />
          </Link>
          <Link to ='/'  className='nav-item nav-btn'>
            <img src={hand} alt="hand" width="20px"/>
          </Link>
          <Link to ='/'  className='nav-item nav-btn'>
            <img src={comment} alt="comment" width="20px" />
          </Link>
        </div>
        <div className='mid'>
          {/* <p>Zeuron UI</p> */}
          <div className='zeuron'>Zeuron UI</div>
          <button className='lock'>Locked</button>
          <div className="dropdown-toggle" onClick={toggleMidDropdown}>
            <img src={dropdown} alt="dropdown" width="10px" />
          </div>
          {showMidDropdown && <MidDropdownMenu />}
          {/* <p>View only</p> */}
          <div>View only</div>
        </div>
        <div className='second-div'>
          {
            User === null ?
            <Link to= "/Auth" className='nav-item nav-links '>Log in</Link> :
            <>
            <Link to ="/" className=''><Avatar>A</Avatar></Link>
            <button>Log out</button>
            </>
          }
          <button className='share'>Share</button>
          <div className="dropdown-toggle" onClick={toggleSecondDropdown}>
          <img src={play} alt="play" width="10px" />
           <img src={dropdown} alt="dropdown" width="10px" />
            
          </div>
          {showSecondDropdown && <SecondDropdownMenu />}
  
          <Link to ='/'  className='nav-item nav-btn'>
            <img src={code} alt="code" width="20px"/>
          </Link>
          <div className="dropdown-toggle1" onClick={toggleMidDropdown}>
            <img src={dropdown} alt="dropdown" width="10px" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
