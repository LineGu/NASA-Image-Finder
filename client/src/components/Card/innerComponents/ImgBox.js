import { memo } from 'react';
import { Card } from 'react-bootstrap';

function ImgBox({ src, alt = '', onLoad = () => {} }) {
  return <Card.Img className="img" variant="top" src={src} loading="lazy" alt={alt} onLoad={onLoad} />;
}

export default memo(ImgBox);
