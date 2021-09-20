import { useState, memo } from 'react';
import { Col } from 'react-bootstrap';
import CardStyler from './index.style';
import DescriptionBox from './innerComponents/DescriptionBox';
import ImgBox from './innerComponents/ImgBox';
import BodyBox from './innerComponents/BodyBox';
import KeywordBox from './innerComponents/KeywordBox';
import DateBox from './innerComponents/DateBox';
import LoadingSpinner from '../LoadingSpinner/index';

function Card({ cardInfo }) {
  const { id, imgURL, title, keywords, body, links, date } = cardInfo;
  const [loading, setLoading] = useState(true);

  return (
    <Col id={id}>
      <CardStyler>
        {loading ? <LoadingSpinner /> : null}
        <ImgBox src={imgURL} alt={title + 'image'} onLoad={() => setLoading(false)} />
        <BodyBox title={title}>
          <KeywordBox keywords={keywords} />
          <DescriptionBox descripText={body} links={links} />
        </BodyBox>
        <DateBox date={date} />
      </CardStyler>
    </Col>
  );
}

export default memo(Card);
