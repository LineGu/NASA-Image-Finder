import { memo } from 'react';
import { FaRegSadTear } from 'react-icons/fa';
import NoResultWrapper from './index.style';
import MESSAGE from '../../../constants/message';

function NoResultIcon() {
  return (
    <NoResultWrapper>
      <FaRegSadTear />
      {MESSAGE.NO_RESULT}
    </NoResultWrapper>
  );
}

export default memo(NoResultIcon);
