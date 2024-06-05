import { MutableRefObject, useEffect } from "react";

const useOutsideClick = (ref: MutableRefObject<HTMLElement | null>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [ref, callback]);
};

export default useOutsideClick;
