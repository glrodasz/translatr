import { useRef } from "react";
import debounce from "@/utils/debounce";

const useDebounce = (
  callback: (...args: any[]) => void,
  wait: number
): ((...args: any[]) => void) => {
  return useRef(debounce(callback, wait)).current;
};

export default useDebounce;
