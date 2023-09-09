import * as S from "../../styles/common/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Cancel } from "../../assets/imgs/cancel.svg";
import { itemsActions } from "../../store/items-slice";

const Bookmark = ({ bookmarkHandler, bookmarkShow }) => {
  const carItems = useSelector(state => state.items.cartItems);

  const dispatch = useDispatch();

  const cartItemRemoveHandler = d => {
    dispatch(itemsActions.removeCartItem(d));
  };
  return (
    <S.BookmarkLayout $bookmarkShow={bookmarkShow}>
      <Cancel onClick={bookmarkHandler} />
      <S.BoomarkList $tourCartLength={carItems.length === 0}>
        {carItems.length === 0 && <p>가고싶은 여행지를 북마크에 표시하세요</p>}
        {carItems.map(d => (
          <S.BookmarkItem key={d.contentid}>
            <Cancel onClick={cartItemRemoveHandler.bind(null, d)} />
            <img
              src={
                d.imgSrc
                  ? d.imgSrc
                  : "https://media.istockphoto.com/id/818134550/ko/%EB%B2%A1%ED%84%B0/%EB%82%A8%EC%82%B0-%ED%83%80%EC%9B%8C-%EC%84%9C%EC%9A%B8-%EC%95%84%EC%9D%B4%EC%BD%98%EC%97%90.jpg?s=612x612&w=0&k=20&c=J3NdV4qQS7WtLCR0U-CqjMLN1injHUEkeOq_RfKXdUE="
              }
              alt={d.title}
            />
            <div>
              <p>{d.title}</p>
              <p>주소: {d.addr}</p>
            </div>
          </S.BookmarkItem>
        ))}
      </S.BoomarkList>
    </S.BookmarkLayout>
  );
};

export default Bookmark;
