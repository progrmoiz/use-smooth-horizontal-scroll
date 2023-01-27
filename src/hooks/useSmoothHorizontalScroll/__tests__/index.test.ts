import { renderHook } from '@testing-library/react-hooks';
import useSmoothHorizontalScroll from '../index';

describe('useSmoothHorizontalScroll tests', () => {
  it('should be defined', () => {
    expect(useSmoothHorizontalScroll).toBeDefined();
  });

  it('renders the hook correctly and checks types', () => {
    const { result } = renderHook(() => useSmoothHorizontalScroll());
    expect(result.current.scrollContainerRef.current).toBe(null);
    expect(typeof result.current.handleScroll).toBe('function');
    expect(typeof result.current.scrollTo).toBe('function');
    expect(result.current.isAtStart).toBe(true);
    expect(result.current.isAtEnd).toBe(false);
  });

  // it('should set isAtStart to false when scrolled', () => {
  //   const { result } = renderHook(() => useSmoothHorizontalScroll());
  //   // simulate scroll event
  //   act(() => {
  //     result.current.handleScroll();
  //   });
  //   expect(result.current.isAtStart).toBe(true);
  // });

  // it('should set isAtEnd to true when scrolled to the end', () => {
  //   const { result } = renderHook(() => useSmoothHorizontalScroll());
  //   // simulate scroll event
  //   act(() => {
  //     result.current.handleScroll();
  //   });
  //   expect(result.current.isAtEnd).toBe(false);
  // });

  // it('should scroll to the left when scrollTo is called with a negative shift value', () => {
  //   const { result } = renderHook(() => useSmoothHorizontalScroll());
  //   // simulate scroll event
  //   act(() => {
  //     result.current.scrollTo(-100);
  //   });
  //   // check if scrollLeft is updated
  //   expect(result.current.scrollContainerRef.current?.scrollLeft).toBe(-100);
  // });

  // it('should scroll to the right when scrollTo is called with a positive shift value', () => {
  //   const { result } = renderHook(() => useSmoothHorizontalScroll());
  //   // simulate scroll event
  //   act(() => {
  //     result.current.scrollTo(100);
  //   });
  //   // check if scrollLeft is updated
  //   expect(result.current.scrollContainerRef.current?.scrollLeft).toBe(100);
  // });
});