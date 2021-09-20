import styled from 'styled-components';
import LoadingSpinner from '../../components/LoadingSpinner/index';

export const ColumnStyler = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  margin: 0 2em 0 2em;
  word-break: break-word;
  text-align: center;
`;

export const BigLoadingSpinner = styled(LoadingSpinner)`
  margin-top: 10em;
  width: 5em;
  height: 5em;
`;
