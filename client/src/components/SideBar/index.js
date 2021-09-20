import { memo } from 'react';
import TopButton from '../TopButton/index';
import SideBarWrapper from './index.style';

function SideBar() {
  return (
    <SideBarWrapper>
      <TopButton />
    </SideBarWrapper>
  );
}

export default memo(SideBar);
