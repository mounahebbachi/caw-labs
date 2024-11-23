import React, { useState } from 'react';

function AddDivForm() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');
  const [divs, setDivs] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDivs([...divs, { height, width, color }]);
    setHeight('');
    setWidth('');
    setColor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {divs.map((div, index) => (
        <div
          key={index}
          style={{
            height: `${div.height}px`,
            width: `${div.width}px`,
            backgroundColor: div.color,
          }}
        ></div>
      ))}
    </div>
  );
}

export default AddDivForm;
