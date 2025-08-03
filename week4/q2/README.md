# Week 4 Question 2: Directional Input Detection

## Task Description

Create a React custom hook that detects directional input from the user using arrow keys or WASD keys. The hook should support two different modes of operation.

## Requirements

### Input Detection
- Detect up/down/left/right input using arrow keys or WASD
- As long as a key is held, it should be recognized as active input
- Support both arrow keys (↑↓←→) and WASD keys (WASD)

### Two Modes

#### Single Key Mode
- Only the latest key should be used as input
- Show the input as NESW (North East South West)
- Example: hold up → hold left → hold right → hold down → release down
- Display: N → W → E → S → E

#### Multiple Keys Mode
- Up/down and left/right are conflict input pairs
- Only the latest unconflicted key should be used as input
- Show the input as NESW (North, North East, East, South East...)
- Example: hold up → hold left → hold right → hold down → release down
- Display: N → NW → NE → SE → NE

## Implementation Hints

1. **Hook Structure**: Create a custom hook `useDirectionalInput(mode)` that:
   - Takes a mode parameter ('single' or 'multiple')
   - Returns an object with `currentDirection` and `pressedKeys`

2. **State Management**: You'll need to track:
   - Currently pressed keys
   - Current direction display

3. **Event Handling**: Use `useEffect` to add/remove event listeners for:
   - `keydown` events
   - `keyup` events

4. **Key Mapping**: Map the following keys to directions:
   - Up: ArrowUp, W
   - Down: ArrowDown, S
   - Left: ArrowLeft, A
   - Right: ArrowRight, D

5. **Conflict Resolution**: In multiple keys mode:
   - Up and Down are conflicting
   - Left and Right are conflicting
   - When conflicts occur, use the most recently pressed key

6. **Direction Display**: Convert the active keys to NESW format:
   - Single key: N, E, S, W
   - Multiple keys: N, NE, E, SE, S, SW, W, NW

## Getting Started

1. Navigate to the project directory
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser to `http://localhost:3000`
5. Implement the `useDirectionalInput` hook in `src/hooks/useDirectionalInput.js`

## Hook Signature

```javascript
const useDirectionalInput = (mode) => {
  // Your implementation here
  
  return {
    currentDirection: string, // The current direction (e.g., "N", "NE", "E")
    pressedKeys: array       // Array of currently pressed keys
  };
};
```

## Testing

Test your implementation with the following scenarios:

### Single Key Mode
- Press and hold Up → should show "N"
- While holding Up, press and hold Left → should show "W"
- While holding Left, press and hold Right → should show "E"
- While holding Right, press and hold Down → should show "S"
- Release Down → should show "E" (back to Right)

### Multiple Keys Mode
- Press and hold Up → should show "N"
- While holding Up, press and hold Left → should show "NW"
- While holding both, press and hold Right → should show "NE"
- While holding Up and Right, press and hold Down → should show "SE"
- Release Down → should show "NE" (back to Up + Right)

## File Structure

```
week4/q2/
├── src/
│   ├── hooks/
│   │   └── useDirectionalInput.js    # Your hook implementation
│   ├── App.js                        # Main app using your hook
│   └── App.css                       # Styles
└── README.md                         # This file
```

Good luck with your implementation!