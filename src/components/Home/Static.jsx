import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ArrowLeft } from "../../assets/imgs/arrow_left.svg";
import { ReactComponent as ArrowRight } from "../../assets/imgs/arrow_right.svg";
import { fetchVisitData } from "../../store/visit-actions";
import * as S from "../../styles/Home/Static";
import StaticGraph from "./StaticGraph";
import Notification from "../common/Notification";

const Static = props => {
  const visitItems = useSelector(state => state.visit.items);
  const stateRef = useRef([]);
  const dispatch = useDispatch();
  const selectStateHandler = (state, i) => {
    stateRef.current.forEach(data => data.classList.remove("active"));
    stateRef.current[i].classList.add("active");

    dispatch(fetchVisitData(state));
  };

  const stateWrapperArr = props.stateArr.map((d, i) => (
    <S.StaticStateItem
      ref={element => (stateRef.current[i] = element)}
      key={d.code}
      onClick={selectStateHandler.bind(null, d, i)}
    >
      {d.state}
    </S.StaticStateItem>
  ));
  const [stateData, setStateData] = useState([]);

  const [count, setCount] = useState(0);

  const TOTAL_COUNT = stateData.length - 1;

  const showStaticState = useSelector(state => state.ui.showState);

  const notification = useSelector(state => state.ui.notification);

  const nextSlide = () => {
    if (count >= TOTAL_COUNT) {
      setCount(0);
    } else {
      setCount(pre => pre + 1);
    }
  };

  const prevSlide = () => {
    if (count === 0) {
      setCount(TOTAL_COUNT);
    } else {
      setCount(pre => pre - 1);
    }
  };

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < stateWrapperArr.length; i += 4) {
      arr.push(stateWrapperArr.slice(i, i + 4));
    }
    setStateData(pre => [...pre, ...arr]);
    dispatch(fetchVisitData());
  }, []);

  useEffect(() => {
    stateRef.current[0]?.classList.add("active");
  }, [stateData]);

  console.log(showStaticState.visitChart);

  return (
    <S.StaticContainer>
      <S.StaticDescription>
        <h2>Static</h2>
        <p>이번달의 각 지역의 방문객 수를 확인하세요</p>
      </S.StaticDescription>

      <S.StaticMain>
        <S.StaticStateCarouselWrapper>
          <S.StaticStateCarouselBox>
            {stateData.map(d => {
              return <S.StaticStateItems count={count}>{d}</S.StaticStateItems>;
            })}
          </S.StaticStateCarouselBox>
          <S.StaticStateCarouselButton>
            <ArrowLeft onClick={prevSlide} />
            <ArrowRight onClick={nextSlide} />
          </S.StaticStateCarouselButton>
        </S.StaticStateCarouselWrapper>

        <S.StaticGraphWrapper showNotification={showStaticState.notification}>
          {showStaticState.notification && (
            <Notification
              type={notification.type}
              title={notification.title}
              message={notification.message}
            />
          )}

          {showStaticState.visitChart && (
            <>
              <S.StaticVisitTypeGroup>
                {visitItems.map(d => (
                  <S.StaticVisitTypeBox touDiv={d.touDiv}>
                    <span>{d.touDiv}</span>
                  </S.StaticVisitTypeBox>
                ))}
              </S.StaticVisitTypeGroup>
              <StaticGraph />
            </>
          )}
        </S.StaticGraphWrapper>
      </S.StaticMain>
    </S.StaticContainer>
  );
};

export default Static;
