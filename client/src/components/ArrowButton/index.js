import { memo } from 'react';
import ArrowButtonStyler from './index.style';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

function ArrowButton({ up, onClick }) {
  return (
    <ArrowButtonStyler onClick={onClick}>
      {up ? <IoIosArrowUp className="arrow"></IoIosArrowUp> : <IoIosArrowDown className="arrow"></IoIosArrowDown>}
    </ArrowButtonStyler>
  );
}

export default memo(ArrowButton);
