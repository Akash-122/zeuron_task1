import React, { useState } from "react";
import search from "../../assets/search.svg";
import cross from "../../assets/cross.svg";
import comment from "../../assets/comment.svg";

const Comments1 = () => {
  const [inputVisible, setInputVisible] = useState(false);

  const toggleSearch = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <div>
      <div className="search search1" style={{ border: 'none' }}>
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
              <input
                type="text"
                placeholder="Search..."
                style={{ border: 'none' }} // To remove the border from the input field
              />
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
      </div>
      <div className="comment">
        <img src={comment} alt="comment" width="18" />
        Give feedback, ask questions, or just leave a note of appreciation. Click anywhere in the field to leave a comment.
      </div>
    </div>
  );
};

export default Comments1;
