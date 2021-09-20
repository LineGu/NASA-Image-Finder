import axios from 'axios';
import papagoAPIOption from '../config/papago.js';
import { STATUS_MSG } from '../constants/status';
import { isEnglish } from '../utils/index'

export const translateText = async (target, source, text) => {
  try {
    const languageConfig = { target, source };
    const result = await axios.post(
      'https://openapi.naver.com/v1/papago/n2mt',
      { ...languageConfig, text },
      { headers: papagoAPIOption },
    );
    const { translatedText } = result.data.message.result;
    if (isEnglish(translatedText)) return translatedText;
    else throw new Error(STATUS_MSG.CLIENT_ERROR);
  } catch (err) {
    throw err ;
  }
};