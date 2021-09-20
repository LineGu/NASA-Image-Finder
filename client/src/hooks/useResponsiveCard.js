import { useState, useEffect, useCallback } from 'react';
import { getMaxColCnt } from '../utils/index';

function useResponsiveCard() {
  const [maxColCnt, setMaxColCnt] = useState(getMaxColCnt());

  const updateColMaxCnt = useCallback(() => {
    setMaxColCnt(getMaxColCnt());
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateColMaxCnt);
    return () => window.removeEventListener('resize', updateColMaxCnt);
  }, [updateColMaxCnt]);

  return { maxColCnt };
}

export default useResponsiveCard;
