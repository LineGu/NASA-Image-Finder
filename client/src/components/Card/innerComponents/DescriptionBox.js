import { memo } from 'react';
import styled from 'styled-components';
import Accordion from '../../Accordion/index';

const TextWrapper = styled.div`
  width: 100%;
`;

const createLinkElem = (link, id) => {
  return (
    <p key={id}>
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
    </p>
  );
};

function DescriptionBox({ descripText, links }) {
  return (
    <Accordion>
      <TextWrapper>
        {descripText}
        {links ? links.map(createLinkElem) : null}
      </TextWrapper>
    </Accordion>
  );
}

export default memo(DescriptionBox);
