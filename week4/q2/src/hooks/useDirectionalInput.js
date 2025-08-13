import React, {useState, useEffect} from "react";
export const useDirectionalInput = (mode) => {
  // Key mapping:
  // - Up: ArrowUp, W
  // - Down: ArrowDown, S
  // - Left: ArrowLeft, A
  // - Right: ArrowRight, D
  
  // Conflict resolution for multiple mode:
  // - Up and Down are conflicting
  // - Left and Right are conflicting
  // - When conflicts occur, use the most recently pressed key
  
  // Direction display:
  // - Single key: N, E, S, W
  // - Multiple keys: N, NE, E, SE, S, SW, W, NW

  const [activeKeys, setActiveKeys] = useState(new Set());
  const [order, setOrder] = useState([]);
  const keyMap = {
    ArrowUp: "N", "W": "N", "w": "N",
    ArrowDown: "S", "S": "S", "s": "S",
    ArrowLeft: "W", "A": "W", "a": "W",
    ArrowRight: "E", "D": "E", "d": "E",
  }

  useEffect(() =>{
    function displayHeldKeyResult(keyArr) {
      if (keyArr.length === 1) return keyArr;

      const latest = keyArr[keyArr.length - 1];
      let second_latest = null;
      let isLatestVertical = (latest === "N" || latest === "S" ) ? true : false;
      for (let i = keyArr.length - 2; i >= 0; i--) {
        const currentKey = keyArr[i];
        const isCurrentVertical =  currentKey === "N" || currentKey === "S";
        if (isCurrentVertical !== isLatestVertical) {
          second_latest = keyArr[i];
          break;
        }
      }
      return isLatestVertical ? [latest, second_latest] : [second_latest, latest];
    }

    function keyDown(e) {
      if (mode === "single") {
        setOrder((prev) => {
          setActiveKeys(keyMap[e.key]);
          return([...new Set([...prev, keyMap[e.key]])]);
        });
      } else {
          setOrder((prev) => {
            const uniqueHeldKeys = [...new Set([...prev, keyMap[e.key]])];
            setActiveKeys(displayHeldKeyResult(uniqueHeldKeys));
          return uniqueHeldKeys;
        });
      }
    }

    function keyUp(e) {
      if (mode === "single") {
        setOrder(prev => {
          const updated = prev.filter(v => v !== keyMap[e.key]);
          setActiveKeys(updated[updated.length - 1] || null);
          return updated;
        });
      } else {
        setOrder(prev => {
          const updated = prev.filter(v => v !== keyMap[e.key]);
          setActiveKeys(displayHeldKeyResult(updated));
          return updated;
        });
      }
    }

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    }
    
  }, [mode])
  return {
    currentDirection: activeKeys
  };
}; 