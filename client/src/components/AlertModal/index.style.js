import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

const AlertStyler = styled(Alert)`
  position: absolute;
  top: 5%;
  z-index: 10;
  min-width: 3em;
`;

export default AlertStyler;
