export const isKorean = (text) => {
  const koreanType = /^[0-9가-힣\s]+$/;
  return koreanType.test(text);
};

export const isEnglish = (text) => {
  const englishType = /^[A-Za-z0-9\s]+$/;
  return englishType.test(text);
};


