import styled from 'styled-components';

const FallbackStyler = styled.div`
  background-color: #131313;
  width: 100vw;
  height: 100vh;
  & > .load-block > * {
    margin: 40vh 45vw;
    width: 6em;
    height: 6em;
  }
`;

export default FallbackStyler;
