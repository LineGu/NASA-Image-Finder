import { memo } from 'react';
import FallbackStyler from './index.style';
import LoadingSpinner from '../LoadingSpinner/index';

function Fallback() {
  return (
    <FallbackStyler>
      <LoadingSpinner />
    </FallbackStyler>
  );
}

export default memo(Fallback);
