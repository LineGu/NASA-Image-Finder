import { Card as CardFrame } from 'react-bootstrap';
import styled from 'styled-components';

const CardStyler = styled(CardFrame)`
  width: 18rem;
  margin-bottom: 20%;
  .img {
    max-height: 310px;
  }
  .card-footer {
    text-align: center;
    opacity: 60%;
  }
  .load-block {
    width: 286px;
    height: 300px;
  }
`;

export default CardStyler;
