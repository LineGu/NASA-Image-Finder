import { memo } from 'react';
import { Card } from 'react-bootstrap';

function DateBox({ date = null }) {
  return <Card.Footer>{date ? date : null}</Card.Footer>;
}

export default memo(DateBox);
