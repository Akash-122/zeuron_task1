import React, { useState } from "react";
import "../../App.css";
import LeftSidebar from "../../Component/LeftSidebar/LeftSidebar";
import HomeMainbar from "../../Component/HomeMainbar/HomeMainbar";
import RightSidebar from "../../Component/RightSidebar/RightSidebar";


import frame from "../../assets/frame.png";
import body1 from "../../assets/body1.jpg";
import body2 from "../../assets/body2.jpg";
import body3 from "../../assets/body3.jpg";
import body4 from "../../assets/body4.jpg";
import body5 from "../../assets/body5.jpg";
import face from "../../assets/face.jpg";
import face1 from "../../assets/face1.jpg";

const imagePaths = [frame, body1, body2, body3, body4, body5, face, face1];
const frames = ["frame 0", "frame 1", "frame 2",  "frame 3" ,"frame 4", "frame 5" ,"frame 6", "frame 7"];

const Home = () => {

  const [selectedFrame, setSelectedFrame] = useState(null);
  const handleSelect = (index) => {
    setSelectedFrame(index);
  };

  return (
    <div className="home-container-1">
      <LeftSidebar frames={frames} handle={handleSelect} selected={selectedFrame}/>
      <div className="home-container-2">
        <HomeMainbar  imagePaths={imagePaths} selected={selectedFrame}/>
        <RightSidebar/>
      </div>
    </div>
  );
};

export default Home;