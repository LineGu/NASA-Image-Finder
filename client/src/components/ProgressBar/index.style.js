import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';

const StyledLoadingBar = styled(ProgressBar)`
  position: fixed;
  left: 0;
  height: 10px;
  width: 100vw;
  background-color: inherit;
  z-index: 10;
`;

export default StyledLoadingBar;
