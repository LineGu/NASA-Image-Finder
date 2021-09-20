import axios from 'axios'
import LANGUAGE from '../constants/language';
import { isKorean } from '../utils/index';
import { translateText } from './translator'
import { STATUS_CODE, STATUS_MSG } from '../constants/status';

const nasaController = {
  async getNasaImg(req, res) {
    try {
      const { q: text, page: pageNum } = req.query;
      let searchText = text;
      if (isKorean(text)) {
        searchText = await translateText(LANGUAGE.ENGLISH, LANGUAGE.KOREAN, text);
      }
      const result = await nasaController.fetchImgData(searchText, pageNum);
      res.status(STATUS_CODE.OK).json({ result, msg: STATUS_MSG.OK });
    } catch (err) {
		console.log(err)
      const status = err.response ?? err.response.status ?? err.request ? err.request.res.statusCode : err.message;
      if (STATUS_CODE.CLIENT_ERROR <= status < STATUS_CODE.SERVER_ERROR)
        res.json({ msg: STATUS_MSG.CLIENT_ERROR });
      if (STATUS_CODE.SERVER_ERROR <= status) res.json({ msg: STATUS_MSG.SERVER_ERROR });
      res.json({ msg: STATUS_MSG.UNKNOWN_ERROR });
    }
  },
	
	async fetchImgData (text, page)  {
	try{
    const { data } = await axios.get(
        `https://images-api.nasa.gov/search?q=${text}&media_type=image&page=${page}`,
      );
	
    return data.collection
	}catch(err) {
		throw err
	}
}
};

export default nasaController;
