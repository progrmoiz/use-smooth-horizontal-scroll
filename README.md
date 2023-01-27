# Smooth Horizontal Scroll

A small utility hook for adding smooth horizontal scrolling to your React project.

## Installation

```
npm install use-smooth-horizontal-scroll
```
or
```
yarn add use-smooth-horizontal-scroll
```

## Usage
First, import the hook into your component:

```tsx
import useSmoothHorizontalScroll from 'use-smooth-horizontal-scroll';
```

Then, use the hook in your component:

```tsx
const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } = useSmoothHorizontalScroll();
```

You'll need to pass the `scrollContainerRef` to the element you want to apply the smooth scrolling to, and attach the `handleScroll` function to the `onScroll` event of that element.

```tsx
<div ref={scrollContainerRef} onScroll={handleScroll}>
  {/* Your content here */}
</div>
```

You can use the `scrollTo` function to scroll to a specific position, or scroll by a specific amount.

```tsx
<button onClick={() => scrollTo(-100)}>Scroll Left</button>
<button onClick={() => scrollTo(100)}>Scroll Right</button>
```

You can also check the isAtStart and isAtEnd state to disable buttons for scrolling if the user has reached the start or end of the content.

```tsx
<button disabled={isAtStart} onClick={() => scrollTo(-100)}>Scroll Left</button>
<button disabled={isAtEnd} onClick={() => scrollTo(100)}>Scroll Right</button>
```

### Full code example
```tsx
import { useRef, useState } from "react";
import useSmoothHorizontalScroll from "use-smooth-horizontal-scroll";

const MyComponent = () => {
  const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } = useSmoothHorizontalScroll();

  return (
    <div>
      <button onClick={() => scrollTo(-100)} disabled={isAtStart}>
        Scroll Left
      </button>
      <div ref={scrollContainerRef} onScroll={handleScroll} style={{ overflowX: "scroll" }}>
        {/* Your scrolling content here */}
      </div>
      <button onClick={() => scrollTo(100)} disabled={isAtEnd}>
        Scroll Right
      </button>
    </div>
  );
};
```

## Compatibility
This package is compatible with React version 16.8 and above.

## Similar to
This package is similar to the horizontal scrolling feature on YouTube.

## License
This package is open-source and available under the MIT license.