require('dotenv').config();

const papagoAPIOption = {
  'X-Naver-Client-Id': process.env.CLIENT_ID,
  'X-Naver-Client-Secret': process.env.CLIENT_SECRET,
};

export default papagoAPIOption;
