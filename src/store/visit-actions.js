import { uiActions } from "./ui-slice";
import { itemsActions } from "./items-slice";

export const fetchVisitData = (state = undefined) => {
  return async dispatch => {
    const fetchData = async () => {
      const res = await fetch(
        `http://apis.data.go.kr/B551011/DataLabService/metcoRegnVisitrDDList?serviceKey=${process.env.REACT_APP_VISIT_API_KEY}&pageNo=1&numOfRows=51&MobileOS=ETC&MobileApp=AppTest&startYmd=20230301&endYmd=20230301&_type=json`
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error("데이터를 불러오지 못했습니다.");
      }

      return data.response.body.items.item;
    };

    dispatch(
      uiActions.showNotification({
        type: "Loading",
        title: "Loading",
        message: "잠시만 기다려주세요",
      })
    );

    try {
      const visitData = await fetchData();

      const visitDataFormatTrans = state => {
        const localVisitData = visitData
          .filter(data => parseInt(data.areaCode) === parseInt(state))
          .map(d => {
            return {
              touDiv: d.touDivNm.slice(0, 3),
              touNum: parseInt(d.touNum),
            };
          });
        return localVisitData;
      };

      if (!state) {
        dispatch(itemsActions.addItems(visitDataFormatTrans(11)));
      } else {
        dispatch(itemsActions.addItems(visitDataFormatTrans(state.areaCode)));
      }

      dispatch(uiActions.showItems());
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          type: "Error",
          title: "Error",
          message: "데이터가 없습니다.",
        })
      );
    }
  };
};
