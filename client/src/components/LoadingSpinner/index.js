import { memo } from 'react';
import { Spinner } from 'react-bootstrap';
import SpinnerBlock from './index.style';

function LoadingSpinner() {
  return (
    <SpinnerBlock className="load-block">
      <Spinner animation="border" variant="primary" />
    </SpinnerBlock>
  );
}

export default memo(LoadingSpinner);
