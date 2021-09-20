import { useEffect, useCallback, useRef } from 'react';
import { isInView } from '../utils/index.js';
import useImgData from './useImgData';
import { checkHasMoreData } from '../utils/index';

function useInfinityScroll(triggerClassName) {
  const { imgDatas, updateImgDatas } = useImgData();
  const triggerElems = useRef(null);

  useEffect(() => {
    triggerElems.current = [...document.querySelectorAll(`.${triggerClassName}`)];
  }, [triggerClassName, imgDatas]);

  const fetchMoreData = useCallback(async () => {
    const isTriggerOn = triggerElems.current && triggerElems.current.filter(isInView).length !== 0;
    const isValidUpdate = checkHasMoreData(imgDatas) && !imgDatas.loading ? true : false;
    if (isTriggerOn && isValidUpdate) await updateImgDatas();
  }, [imgDatas, triggerClassName, updateImgDatas]);

  useEffect(() => {
    window.addEventListener('scroll', fetchMoreData);
    return () => window.removeEventListener('scroll', fetchMoreData);
  }, [fetchMoreData]);

  const triggerElem = checkHasMoreData(imgDatas) ? <div className={triggerClassName}></div> : null;

  return { triggerElem };
}

export default useInfinityScroll;
