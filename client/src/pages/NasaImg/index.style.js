import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100vw;
  min-height: 100vh;
  background-color: #131313;

  .search_bar {
    margin-top: 5%;
  }
  .card-wrapper {
    flex-direction: row;
    margin: 5% 2% 5% 2%;
    .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      .card-subtitle {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
`;

export default PageWrapper;
