import { useState, useRef, useCallback, Fragment, memo } from 'react';
import MESSAGE from '../../constants/message';
import AlertModal from '../../components/AlertModal/index';
import SearchBar from '../../components/SearchBar/index';
import ProgressBar from '../../components/ProgressBar/index';
import useImgData from '../../hooks/useImgData';
import { isValidSearchText, resetInputValue } from '../../utils/index';

const textErrorAlert = { title: MESSAGE.SEARCH_ALERT_TITLE, body: MESSAGE.SEARCH_ALERT_BODY };

function SearchBarContainer() {
  const { imgDatas, updateImgDatas } = useImgData();
  const [isValidText, setIsValidText] = useState(true);
  const inputElem = useRef(null);

  const onKeyDownEnter = (event) => {
    if (event.key === 'Enter') searchImg();
  };

  const closeAlert = useCallback(() => {
    resetInputValue(inputElem.current);
    setIsValidText(true);
  }, [inputElem]);

  const openAlert = useCallback(() => {
    setIsValidText(false);
    setTimeout(closeAlert, 1000);
  }, [closeAlert]);

  const searchImg = useCallback(async () => {
    const searchText = inputElem.current.value;
    if (!isValidSearchText(searchText)) openAlert();
    else await updateImgDatas(searchText);
  }, [inputElem, openAlert, updateImgDatas]);

  return (
    <Fragment>
      <ProgressBar progress={imgDatas.progress}></ProgressBar>
      <SearchBar onClick={searchImg} onKeyDown={onKeyDownEnter} elemRef={inputElem}></SearchBar>
      <AlertModal alertContent={textErrorAlert} alertTrigger={!isValidText}></AlertModal>
    </Fragment>
  );
}

export default memo(SearchBarContainer);
