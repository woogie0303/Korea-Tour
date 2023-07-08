import { uiActions } from "./ui-slice";
import { visitActions } from "./visit-slice";

export const fetchVisitData = (state = undefined) => {
  return async dispatch => {
    const fetchData = async () => {
      const res = await fetch(
        "http://apis.data.go.kr/B551011/DataLabService/metcoRegnVisitrDDList?serviceKey=/lLsBzQAwXAVyWwXvszEFqoUZtWWLmMCt6bpB1VSUHU8rAsTBpmMGLPuGMwYXQRYAq4ITCrlgWRiB1H/1ltCHQ==&pageNo=1&numOfRows=51&MobileOS=ETC&MobileApp=AppTest&startYmd=20230301&endYmd=20230301&_type=json"
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error("데이터를 불러오지 못했습니다.");
        const hi = "hi";
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
        dispatch(visitActions.addVisitItem(visitDataFormatTrans(11)));
      } else {
        dispatch(
          visitActions.addVisitItem(visitDataFormatTrans(state.areaCode))
        );
      }

      dispatch(uiActions.showVisitChart());
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          type: "Error",
          title: "Error",
          message: "데이터가 없습니다.",
        })
      );
      console.log(err);
    }
  };
};
