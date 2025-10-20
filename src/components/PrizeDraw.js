import React, { useRef, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import './PrizeDraw.css';

const PrizeDraw = ({ prize }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    }
  }, [prize]);

  return (
    <div className="prizeDraw__container" ref={containerRef}>
      <p className="prizeDraw__title">Secret draw:</p>
      <p className={prize ? "prizeDraw__winner" : ""}>{prize}</p>

      {prize && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={150}
          recycle={false}
        />
      )}
    </div>
  );
};

export default PrizeDraw;
