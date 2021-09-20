export const isValidSearchText = (searchText) => {
  const englishType = /^[A-Za-z0-9\s]+$/;
  const koreanType = /^[0-9가-힣\s]+$/;
  let updatedText = searchText.trim();
  if (updatedText.length === 0) return false;
  if (!englishType.test(updatedText) && !koreanType.test(updatedText)) return false;
  return true;
};

export const resetInputValue = (elem) => (elem.value = '');

export const splitTextAndLink = (description) => {
  const urlType = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/*)?/;

  if (!description) return { descripText: '', links: [] };
  const links = description.split('"').filter((text) => urlType.test(text));

  let descripText = description;
  let descripUrl = null;
  if (!description.includes('href')) {
    description.replaceAll('<b>', '');
    descripText = description.split('http')[0];
    descripUrl = description.split('http')[1] ? 'http' + description.split('http')[1] : null;
    if (descripUrl) links.push(descripUrl);
  } else {
    description.replaceAll('<b>', '');
    descripText = description.split('<a')[0];
  }

  return { descripText, links };
};
