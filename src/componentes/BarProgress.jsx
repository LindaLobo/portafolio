import React, { useEffect, useRef, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const BarProgress = ({ label, value }) => {
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setProgress(value); // Configura el progreso al valor específico
          observer.unobserve(entry.target); // Dejar de observar después de animación
        }
      });
    });

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="card col-12 col-md-4 m-3">
      <div className="card-header">
        {label}
        <ProgressBar
          ref={progressBarRef}
          variant="info"
          now={progress}
          style={{ width: "100%" }}
          data-value={value}
        />
      </div>
    </div>
  );
};

export default BarProgress;
