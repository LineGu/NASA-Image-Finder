import STATUS from '../constants/status';
import MESSAGE from '../constants/status';

const errorHandler = (error) => {
  if (error === STATUS.CLIENT_ERROR) alert(MESSAGE.CLIENT_ERROR);
  if (error === STATUS.SERVER_ERROR) alert(MESSAGE.SERVER_ERROR);
  if (error === STATUS.UNKNOWN_ERROR) alert(MESSAGE.UNKNOWN_ERROR);
};

export default errorHandler;
