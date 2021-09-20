import { memo } from 'react';
import { Card } from 'react-bootstrap';

function BodyBox({ title, children }) {
  return (
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      {children}
    </Card.Body>
  );
}

export default memo(BodyBox);
