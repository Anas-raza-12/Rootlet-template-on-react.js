import React, { useState, useEffect } from 'react';


const ProgressBar = ({ target, speed = 60 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= target) {
        setProgress(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [target, speed]);

  return (
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${progress}%` }}> </div>
      <span className="item_value">{progress}%</span>
    </div>
  );
};

export default ProgressBar;
