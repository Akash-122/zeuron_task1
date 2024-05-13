import React from "react";
import "./Property.css";

const Property = () => {
  return (
    <div className="property-container">

      <div className="property-section div1">
        <h3>Frame Name</h3>
      </div>

      <div className="property-section div2">
        <h3>Layout</h3>
        <div>
          <label>Height:</label>
          <span>200px</span>
        </div>
        <div>
          <label>Width:</label>
          <span>300px</span>
        </div>
        <div>
          <label>Top:</label>
          <span>50px</span>
        </div>
        <div>
          <label>Left:</label>
          <span>100px</span>
        </div>
      </div>

      {/* Property Section 3: Color */}
      <div className="property-section div3">
        <div className="section3">
        <h3>Colors</h3>
        <br />
        <button className="copy-color-btn">Copy Color</button>
        <br />
        <select>
          <option value="hex">Hex</option>
          <option value="rgb">RGB</option>
          <option value="css">CSS</option>
          <option value="hsl">HSL</option>
          <option value="hsb">HSB</option>
        </select>
        </div>
        <input type="color" />
      </div>
      {/* Property Section 4: Interaction */}
      <div className="property-section div4">
        <h3>Interaction</h3>
        <label>After Delay:</label>
        <br />
        <div className="property-section div41">
          <label>Delay:</label>
          <span>100ms</span>
        </div>
        <div className="label-value-pair">
          <label>Navigate to:</label>
          <span>frame 10</span>
        </div>
        <div className="label-value-pair">
          <label>Animate:</label>
          <span>Checked</span>
        </div>
        <div className="label-value-pair">
          <label>Curve:</label>
          <span>Ease out</span>
        </div>
        <div className="label-value-pair">
          <label>Duration:</label>
          <span>300ms</span>
        </div>
      </div>
    </div>
  );
};

export default Property;
