import styled from 'styled-components';
import { BiUpArrowCircle } from 'react-icons/bi';

const TopMark = styled(BiUpArrowCircle)`
  width: 2em;
  height: 2em;
  color: #ffffff;
  margin: 0 0 1em 0;

  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

export default TopMark;
