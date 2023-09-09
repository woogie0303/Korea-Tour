import { uiActions } from "./ui-slice";
import { itemsActions } from "./items-slice";

export const fetchTourData = (stateId, tourType, cart = undefined) => {
  return async dispatch => {
    const fetchData = async () => {
      const res = await fetch(
        ` http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=${
          process.env.REACT_APP_TOUR_ITEM_API_KEY
        }&pageNo=1&numOfRows=12&MobileApp=AppTest&MobileOS=ETC&arrange=A&areaCode=${stateId}&contentTypeId=${
          tourType === undefined ? 12 : tourType
        }&_type=json`
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
      const data = await fetchData();
      dispatch(itemsActions.addItems(data));
      cart.forEach(c => {
        dispatch(itemsActions.changeCartIn(c));
      });
    } catch (err) {
      uiActions.showNotification({
        type: "Error",
        title: "Error",
        message: "데이터가 없습니다.",
      });
    }
  };
};

export const fetchTourItemData = tourItem => {
  return async dispatch => {
    const tourItemData = {
      ...tourItem,
      type: "CART",
    };

    console.log(itemsActions);

    dispatch(itemsActions.addItems(tourItemData));
    dispatch(itemsActions.changeCartIn(tourItemData));
  };
};
