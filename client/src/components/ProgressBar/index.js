import { memo } from 'react';
import StyledLoadingBar from './index.style';

function ProgressBar({ progress }) {
  return <StyledLoadingBar animated now={progress} />;
}

export default memo(ProgressBar);
