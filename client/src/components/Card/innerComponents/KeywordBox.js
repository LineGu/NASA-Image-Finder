import { memo } from 'react';
import { Card } from 'react-bootstrap';
import Tag from '../../Tag/index';

const createKeywordElem = (keyword, id) => {
  return <Tag key={id} keyword={keyword}></Tag>;
};

function KeywordBox({ keywords }) {
  return <Card.Subtitle>{keywords ? keywords.map(createKeywordElem) : null}</Card.Subtitle>;
}

export default memo(KeywordBox);
