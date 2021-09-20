import { splitTextAndLink } from './text';

export const createSearchUrl = (searchText, page) => {
  return `https://goorm-mission-server.run.goorm.io/nasa?q=${searchText}&page=${page}`;
};

export const isChange = (preData, afterData) => {
  const preDataLen = preData ? Object.keys(preData).length : 0;
  const afterDataLen = afterData ? Object.keys(afterData).length : 0;
  return preDataLen !== afterDataLen || Object.keys(preData)[0] !== Object.keys(afterData)[0];
};

export const pushNewData = (preData, newData, isChangeSearch) => {
  const updatedData = newData.reduce((acc, item) => {
    const { nasa_id, title, description, date, keywords, link } = splitNASADatas(item);
    if (acc.nasa_id) return acc;
    acc[nasa_id] = { title, link, description, date, keywords };
    return acc;
  }, {});
  if (isChangeSearch) return { ...updatedData };
  return { ...preData, ...updatedData };
};

export const splitNASADatas = (item) => {
  const { nasa_id, title, description, date_created, keywords } = item.data[0];
  const date = date_created.split('T')[0];
  const { href: link } = item.links[0];
  return { nasa_id, title, description, date, keywords, link };
};

export const createCardInfo = (data) => {
  const [id, { link: imgURL, title, keywords, description, date }] = data;
  const { descripText: body, links } = splitTextAndLink(description);
  const cardTitle = { id, title, imgURL };
  const cardBody = { keywords, body, links };
  const cardFooter = { date };
  const cardInfo = { ...cardTitle, ...cardBody, ...cardFooter };
  return cardInfo;
};

export const hasNoResult = (datas) => {
  return datas.data && Object.keys(datas.data).length === 0 && !datas.loading;
};

export const isBeforeLoad = (datas) => {
  return !datas.data && !datas.loading && !datas.searchText;
};

export const isLoadingData = (datas) => {
  return datas.data === null && datas.progress !== 0;
};

export const checkHasMoreData = (data) => {
  if (!data) return false;
  const datasPerPage = 100;
  const hasOnePageData = data.data && Object.keys(data.data).length < datasPerPage;
  const hasMoreData = !(hasOnePageData || !data.isUpdated);
  return hasMoreData;
};
