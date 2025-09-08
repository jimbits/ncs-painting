// Define our types first
type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type BreakpointTuple = [number, BreakpointName];

// Type-safe breakpoints array
const breakpoints: BreakpointTuple[] = [
  [640, "xs"],
  [767, "sm"],
  [1023, "md"],
  [1279, "lg"],
  [1536, "xl"],
  [6000, "2xl"],
] as const;

// Type-safe function
function useGetBreakpoint(width: number): BreakpointName {
  // Find first breakpoint where width is less than the threshold
  const match = breakpoints.find(
    ([threshold]: BreakpointTuple): boolean => width <= threshold
  );
  return match ? match[1] : "2xl"; // Default to largest if no match
}

export default useGetBreakpoint;
