import { useContext } from 'react';
import { ImgDataContext } from '../models/NasaImg/Provider';
import errorHandler from '../utils/errorHandler';

function useImgData() {
  const { state, updateImgDatas } = useContext(ImgDataContext);
  if (state.error) {
    errorHandler(state.error);
  }
  return { imgDatas: state, updateImgDatas };
}

export default useImgData;
