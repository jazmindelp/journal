import { useEffect, useState } from "react";
import { config } from 'react-spring'

const Boop = ({ rotation = 0, timing = 150, children }) => {
    const [isBooped, setIsBooped] = useState(false);
    const style = {
      display: 'flex',
      backfaceVisibility: 'hidden',
      transform: isBooped
        ? `rotate(${rotation}deg)`
        : `rotate(0deg)`,
      transition: `transform ${timing}ms`,
      config: config.slow,
      
    };
    useEffect(() => {
      if (!isBooped) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [isBooped, timing]);
    const trigger = () => {
      setIsBooped(true);
    };
    return (
        <span onMouseOver={trigger} style={style}>
          {children}
        </span>
      );
    };

    export default Boop;