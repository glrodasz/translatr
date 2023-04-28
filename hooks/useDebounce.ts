import { useRef } from "react";
import debounce from "@/utils/debounce";

const useDebounce = (
  func: (...args: any[]) => void,
  wait: number
): ((...args: any[]) => void) => {
  return useRef(debounce(func, wait)).current;
};

export default useDebounce;
