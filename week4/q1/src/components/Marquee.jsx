import "./Marquee.css";
import React, {useRef, useState, useEffect} from "react";
/*props: {
  contents: string[],
  speed: number, px per second
}*/

export const Marquee = (props) => {
  const [textIndex, setTextIndex] = useState(0);
  const { contents, speed, run } = props;
  const startTimeRef = useRef(Date.now());
  const nextTextRef = useRef(null);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const runRef = useRef(run);
  
  useEffect(() => {
    runRef.current = run;
  }, [run]);

  useEffect(() => {
    function move() {
      if (!nextTextRef.current || !contents || !runRef.current) return;
      const currentTime = Date.now();
      const elapsedTime = (currentTime - startTimeRef.current) / 1000;
      let newOffset = elapsedTime * speed;
      if (nextTextRef.current.getBoundingClientRect().left < 0) {
        setTextIndex((prev)=> (prev + 1) % contents.length);
        startTimeRef.current = Date.now();
        newOffset = 0;
      }
      setOffset(newOffset);
      requestAnimationFrame(move);
    }
    nextTextRef.current && move();
  }, [contents, run]);

  return (
    <div className="marquee" ref={containerRef}>
      <span style={{ transform: `translateX(-${offset}px)`}}>
        {contents[textIndex]}
      </span>
      <span ref={nextTextRef} style={{ transform: `translateX(-${offset}px)`}}>
        {contents[(textIndex + 1) % contents.length]}
      </span>
    </div>
  );
};
