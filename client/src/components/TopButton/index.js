import { useCallback, memo } from 'react';
import TopMark from './index.style';

function TopButton() {
  const moveTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return <TopMark onClick={moveTop}></TopMark>;
}

export default memo(TopButton);
