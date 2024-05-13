import React, { useState } from 'react';

const Exports = () => {
  const [isInitiallyExpanded, setIsInitiallyExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [exportSections, setExportSections] = useState([]);

  const toggleExpand = () => {
    if (!isInitiallyExpanded) {
      setIsInitiallyExpanded(true);
    }
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      const newExportSection = {
        id: Date.now(), // Unique identifier for each export section
        type: '',
        suffix: '',
        imageType: '',
      };
      setExportSections([newExportSection]);
    } else {
      setExportSections([]);
    }
  };

  const addExportSection = () => {
    const newExportSection = {
      id: Date.now(), // Unique identifier for each export section
      type: '',
      suffix: '',
      imageType: '',
    };
    setExportSections([...exportSections, newExportSection]);
  };

  const removeExportSection = (id) => {
    setExportSections(exportSections.filter((section) => section.id !== id));
  };

  return (
    <div>
      <div>
        {/* Frame Name */}
        <input type="text" placeholder="Frame Name" />
        {/* Plus/Minus icon */}
        <button onClick={toggleExpand}>{isInitiallyExpanded ? (isExpanded ? '-' : '+') : '+'}</button>
      </div>
      {/* Additional sections */}
      {isExpanded &&
        exportSections.map((section, index) => (
          <div className="export" key={section.id}>
            {/* Section 1: Type dropdown */}
            <select>
              <option>1x</option>
              <option>1.5x</option>
            </select>
            {/* Section 2: Suffix */}
            <input type="text" placeholder="e.g. @2x" />
            {/* Section 3: Image type dropdown */}
            <select>
              <option>JPG</option>
              <option>SVG</option>
            </select>
            {/* Section 4: Ellipsis */}
            <label onClick={() => removeExportSection(section.id)}>...</label>
            {/* Section 5: Export button */}
            <button>Export</button>
            {/* Section 6: Preview */}
            <button>Preview</button>
          </div>
        ))}
      {/* Show the "+" sign if not initially expanded */}
      {!isInitiallyExpanded && (
        <button onClick={toggleExpand}>+</button>
      )}
      {/* Show the "+" and "-" signs together if initially expanded */}
      {isInitiallyExpanded && isExpanded && (
        <button onClick={toggleExpand}>-</button>
      )}
    </div>
  );
};

export default Exports;
