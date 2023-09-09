import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../../store/items-slice";
import { fetchTourItemData } from "../../store/tour-action";
import * as S from "../../styles/Tour/Tour";

const TourItem = ({ tourData, cartIn }) => {
  const dispatch = useDispatch();

  const tourItemDataHandler = () => {
    if (cartIn) {
      dispatch(itemsActions.changeCartIn(tourData));
    } else {
      dispatch(
        fetchTourItemData({
          contentid: tourData.contentid,
          imgSrc: tourData.firstimage,
          title: tourData.title,
          addr: tourData.addr1,
        })
      );
    }
  };

  return (
    <S.TourGridItem $activeBookmarkIcon={cartIn}>
      <img
        src={
          tourData.firstimage
            ? tourData.firstimage
            : "https://media.istockphoto.com/id/818134550/ko/%EB%B2%A1%ED%84%B0/%EB%82%A8%EC%82%B0-%ED%83%80%EC%9B%8C-%EC%84%9C%EC%9A%B8-%EC%95%84%EC%9D%B4%EC%BD%98%EC%97%90.jpg?s=612x612&w=0&k=20&c=J3NdV4qQS7WtLCR0U-CqjMLN1injHUEkeOq_RfKXdUE="
        }
        alt={tourData.title}
      />
      <p>{tourData.title}</p>

      <div onClick={tourItemDataHandler}></div>
    </S.TourGridItem>
  );
};

export default TourItem;

// const dispatch = useDispatch();
//   const [activeBookmarkIcon, setActiveBookmarkIcon] = useState(false);
//   const tourCartItems = useSelector(state => state.items.cartItems);

//   const tourItemDataHandler = () => {
//     setActiveBookmarkIcon(pre => !pre);
//   };

//   useEffect(() => {
//     if (!activeBookmarkIcon && tourCartItems.length > 0) {
//       dispatch(itemsActions.removeItem(tourData.contentid));
//     }

//     if (activeBookmarkIcon) {
//       dispatch(
//         fetchTourItemData({
//           contentId: tourData.contentid,
//           imgSrc: tourData.firstimage,
//         })
//       );
//     }
//   }, [activeBookmarkIcon]);
