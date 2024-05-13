import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./LeftSidebar.css";
import search from "../../assets/search.svg";
import dropdown from "../../assets/dropdown.svg";
import cross from "../../assets/cross.svg";
import hashtag from "../../assets/hashtag.svg";



const FirstDropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <Link to="/">Analytics</Link>
      <Link to="/">Level Design</Link>
      <Link to="/">Game UI</Link>
    </div>
  );
};

const LeftSidebar = ({frames, handle, selected}) => {
  const [firstDropdownOpen, setFirstDropdownOpen] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);

  const toggleFirstDropdown = () => {
    setFirstDropdownOpen(!firstDropdownOpen);
  };

  const toggleSearch = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <div className="left-side-bar">
      <div className="search">
        <form action="" className="form">
          {!inputVisible && (
            <img
              src={search}
              alt="search"
              width="18"
              className="search-icon"
              onClick={toggleSearch}
            />
          )}
          {inputVisible && (
            <>
              <input type="text" />
              <img
                src={cross}
                alt="close"
                width="18"
                className="cross-icon"
                onClick={toggleSearch}
              />
            </>
          )}
        </form>
        {!inputVisible && (
          <div className="dropdown-toggle" onClick={toggleFirstDropdown}>
            <span>Pages</span>
            <img src={dropdown} alt="dropdown" width="10px" />
          </div>
        )}
        {firstDropdownOpen && <FirstDropdownMenu />}
      </div>
      <div className="frames">
      {frames.map((frame, index) => (
        <div key={index} onClick={() => handle(index)}>
          
          <h2><img src={hashtag} alt="hashtag" width="10px" /> {frame}</h2>
          
        </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
