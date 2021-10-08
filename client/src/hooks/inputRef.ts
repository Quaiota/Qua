import { useCallback } from 'react';

const useInputRef = () => {
  const inputRef = useCallback((node) => {
    if (node !== null) {
      node.focus();
    }
  }, []);

  return {
    inputRef,
  };
};

export default useInputRef;
