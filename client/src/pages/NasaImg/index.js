import { memo } from 'react';
import SearchBarContainer from '../../containers/SearchBar/index';
import CardContainer from '../../containers/Card/index';
import ImgDataProvider from '../../models/NasaImg/Provider';
import SideBar from '../../components/SideBar/index';
import PageWrapper from './index.style';

function NasaImgPage() {
  return (
    <PageWrapper>
      <ImgDataProvider>
        <SearchBarContainer />
        <CardContainer />
      </ImgDataProvider>
      <SideBar />
    </PageWrapper>
  );
}

export default memo(NasaImgPage);
