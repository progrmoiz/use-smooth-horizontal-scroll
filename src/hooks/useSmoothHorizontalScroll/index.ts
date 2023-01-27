import { useRef, useState } from "react";
import type { RefObject } from "react";

interface UseSmoothHorizontalScroll {
  scrollContainerRef: RefObject<HTMLElement>;
  handleScroll: () => void;
  scrollTo: (shift: number) => void;
  isAtStart: boolean;
  isAtEnd: boolean;
}

/**
 * It returns an object with a ref to the scroll container, a function to handle scroll events, a
 * function to scroll to a certain position, and booleans to indicate whether the scroll container is
 * at the start or end
 * @returns An object with the following properties:
 * - scrollContainerRef: A ref to the scroll container
 * - handleScroll: A function that updates the isAtStart and isAtEnd state
 * - scrollTo: A function that scrolls the container by a given amount
 * - isAtStart: A boolean indicating whether the container is scrolled to the start
 * - isAtEnd: A boolean indicating whether
 */
const useSmoothHorizontalScroll = (): UseSmoothHorizontalScroll => {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    setIsAtStart(scrollContainerRef.current?.scrollLeft === 0);
    setIsAtEnd(
      Math.floor(
        scrollContainerRef.current?.scrollWidth -
        scrollContainerRef.current?.scrollLeft
      ) <= scrollContainerRef.current?.offsetWidth
    );
  };

  const scrollTo = (shift: number) => {
    scrollContainerRef.current?.scrollTo({
      left: scrollContainerRef.current?.scrollLeft + shift,
      behavior: "smooth",
    });
  };

  return {
    scrollContainerRef,
    handleScroll,
    scrollTo,
    isAtStart,
    isAtEnd
  };
};

export default useSmoothHorizontalScroll;
