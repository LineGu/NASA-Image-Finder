import { createContext, useEffect, useReducer } from 'react';
import { reducer, createDispatcher, initState } from './ProviderAssets';
import { createSearchUrl, isChange, pushNewData } from '../../utils/index';
import http from '../../constants/http';
import SEARCH from '../../constants/search';
import STATUS from '../../constants/status';

export const ImgDataContext = createContext(null);

function ImgDataProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    const dispatcher = createDispatcher(dispatch);

    const progressHandler = {
        onDownloadProgress: (progressEvent) => {
            const loadPercent = (progressEvent.loaded * 100) / progressEvent.total + 20;
            const loadState = loadPercent > 100 ? 100 : loadPercent;
            dispatcher.progress(Math.floor(loadState));
        },
    };

    const updateData = async (inputText) => {
        if (state.loading || state.error) return;
        const { page: prePageNum, searchText: preSearchText, data: preDatas } = state;
        if (inputText === preSearchText) return;
        if (inputText) dispatcher.reset(inputText);
        dispatcher.loading();
        let newPageToSearch = !inputText && prePageNum ? prePageNum + 1 : SEARCH.DEFAULT_PAGE;
        const newTextToSearch = inputText ?? preSearchText ?? SEARCH.DEFAULT_TEXT;
        try {
            const targetURL = createSearchUrl(newTextToSearch, newPageToSearch);
            const { data } = await http.get(targetURL, progressHandler);
            if (data.msg !== STATUS.OK) {
                dispatcher.error(data.msg);
                return;
            }
            const isChangeSearch = !!inputText;
            const newDatas = pushNewData(state.data, data.result.items, isChangeSearch);
            const isUpdated = isChange(preDatas, newDatas) ? true : false;
            dispatcher.success(newDatas, newPageToSearch, isUpdated, newTextToSearch);
        } catch (error) {
            dispatcher.error(error);
        }
    };

    useEffect(() => {
        const getInitImg = async () => await updateData();
        getInitImg();
    }, []);

    return (
        <ImgDataContext.Provider value={{ state, updateImgDatas: updateData }}>
            {children}
        </ImgDataContext.Provider>
    );
}

export default ImgDataProvider;