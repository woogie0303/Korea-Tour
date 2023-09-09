import * as S from "../../styles/Tour/Tour.js";
import TourItem from "../../components/Tour/TourItem";
import TourNavbar from "../../components/Tour/TourNavbar.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchTourData } from "../../store/tour-action.js";

const TourPage = () => {
  const params = useParams();
  const tourItems = useSelector(state => state.items.fetchItems);
  const cart = useSelector(state => state.items.cartItems);
  const [tourData, setTourData] = useState({
    localId: params.stateId,
    contentTypeId: undefined,
  });

  const tourDataHandler = contentTypeId => {
    setTourData(pre => ({ ...pre, contentTypeId }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length > 0) {
      dispatch(fetchTourData(tourData.localId, tourData.contentTypeId, cart));
    } else {
      dispatch(fetchTourData(tourData.localId, tourData.contentTypeId));
    }
  }, [tourData]);

  return (
    <S.TourContainer>
      <TourNavbar tourDataHandler={tourDataHandler} />

      <S.TourGridWrapper>
        {tourItems.map((d, i) => {
          return <TourItem tourData={d} key={i} cartIn={d.cartIn} />;
        })}
      </S.TourGridWrapper>
    </S.TourContainer>
  );
};

export default TourPage;
