import { memo } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import MESSAGE from '../../constants/message';

const StyledInput = styled(InputGroup)`
  width: 50%;
`;

function SearchBar({ onClick = () => {}, onKeyDown = () => {}, elemRef }) {
  return (
    <StyledInput className="search_bar">
      <FormControl
        ref={elemRef}
        placeholder={MESSAGE.SEARCH_PLACEHOLDER}
        aria-label="Text input"
        onKeyDown={onKeyDown}
      />
      <Button variant="outline-secondary" className="search_btn" onClick={onClick}>
        검색
      </Button>
    </StyledInput>
  );
}
export default memo(SearchBar);
