import { useEffect, useState } from "react";
import { config } from 'react-spring'

const Scale = ({ scale = 1, timing = 350, children }) => {
    const [hover, setHover] = useState(false);
    const style = {
      display: 'inline-block',
      backfaceVisibility: 'hidden',
      transform: hover
        ? `scale(${scale})`
        : `scale(1.1)`,
      transition: `transform ${timing}ms`,
      config: config.slow,
      
    };
    useEffect(() => {
      if (!hover) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setHover(false);
      }, timing);
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [hover, timing]);
    const trigger = () => {
      setHover(true);
    };
    return (
        <span onMouseEnter={trigger} style={style}>
          {children}
        </span>
      );
    };

    export default Scale;