import React, { useState } from 'react';
import './RightSidebar.css'
import Property from './Property';
import Exports from './Export1';
import Comments1 from './Comments1';
const RightSidebar = () => {

  const [selectedTab, setSelectedTab]  =  useState("properties");
  return (
  
    <div className='main-nav1'>
      <div className='right-sidebar'>
        <div onClick={()=>  setSelectedTab("properties")}>Properties</div>
        <div onClick={()=>  setSelectedTab("comments")}>comments</div>
        <div onClick={()=>  setSelectedTab("exports")}>Exports</div>
      </div>
      <hr/>
      <div>
        {selectedTab==="properties" && <Property/>}
        {selectedTab==="exports" && <Exports/>}
        {selectedTab==="comments" && <Comments1/>}
      </div>
    </div>
  );
};

export default RightSidebar;
