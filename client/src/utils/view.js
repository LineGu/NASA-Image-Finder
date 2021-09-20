import PALETTE from '../constants/palette';

export const isInView = (elem) => {
  const box = elem.getBoundingClientRect();
  return box.top < window.innerHeight && box.bottom >= 0;
};

export const getMaxColCnt = () => parseInt(document.body.offsetWidth / PALETTE.CARD_WIDTH);
