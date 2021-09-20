import { useCallback, memo } from 'react';
import { Row } from 'react-bootstrap';
import useImgData from '../../hooks/useImgData';
import Card from '../../components/Card/index';
import NoResultIcon from '../../components/ErrorIcons/NoResult/index';
import { ColumnStyler, BigLoadingSpinner } from './index.style';
import { hasNoResult, createCardInfo, isBeforeLoad, isLoadingData } from '../../utils/index';
import useResponsiveCard from '../../hooks/useResponsiveCard';
import useInfinityScroll from '../../hooks/useInfinityScroll';

const createCardElem = (data, elemId) => {
  const cardInfo = createCardInfo(data);
  return <Card key={elemId} cardInfo={cardInfo}></Card>;
};

function CardContainer() {
  const { imgDatas } = useImgData();
  const { maxColCnt } = useResponsiveCard();
  const { triggerElem } = useInfinityScroll('fetch-trigger');

  if (isBeforeLoad(imgDatas)) return null;
  if (hasNoResult(imgDatas)) return <NoResultIcon></NoResultIcon>;
  if (isLoadingData(imgDatas)) return <BigLoadingSpinner />;

  const imgDataList = Object.entries(imgDatas.data);
  const rangesOfColCnt = Array(maxColCnt).fill(0);

  const getSameColData = (idx) => imgDataList.filter((_, imgIdx) => imgIdx % maxColCnt === idx);

  return (
    <Row className="card-wrapper">
      {rangesOfColCnt.map((_, idx) => (
        <ColumnStyler className="column-wrapper" id={idx} key={idx}>
          {getSameColData(idx).map(createCardElem)}
          {triggerElem}
        </ColumnStyler>
      ))}
    </Row>
  );
}

export default memo(CardContainer);
