import * as S from "../../styles/Home/Home.js";
import Navbar from "../../components/Home/Navbar.jsx";
import ExplorePart from "../../components/Home/ExplorePart";
import Static from "../../components/Home/Static.jsx";
import Bookmark from "../../components/common/Bookmark.jsx";
import { useState } from "react";

const STATE_CODE = [
  { state: "서울특별시", areaCode: 11 },
  { state: "부산광역시", areaCode: 26 },
  { state: "대구광역시", areaCode: 27 },
  { state: "인천광역시", areaCode: 28 },
  { state: "광주광역시", areaCode: 29 },
  { state: "대전광역시", areaCode: 30 },
  { state: "울산광역시", areaCode: 31 },
  { state: "세종특별자치시", areaCode: 36 },
  { state: "경기도", areaCode: 41 },
  { state: "강원도", areaCode: 42 },
  { state: "충청북도", areaCode: 43 },
  { state: "충청남도", areaCode: 44 },
  { state: "전라북도", areaCode: 45 },
  { state: "전라남도", areaCode: 46 },
  { state: "경상북도", areaCode: 47 },
  { state: "경상남도", areaCode: 48 },
  { state: "제주특별자치도", areaCode: 50 },
];

const HomePage = () => {
  const [bookmarkShow, setBookmarkShow] = useState(false);

  const bookmarkShowHandler = () => {
    setBookmarkShow(pre => !pre);
  };
  return (
    <S.HomeContainer>
      <S.HomeImgWrapper>
        <S.HomeImgTitleBox>
          <h1>전통의 상징 한국</h1>
          <p>한국에 방문하시면 잊지 못할 경험을 선사합니다</p>
          <p>한국의 아름다움에 한번 빠져보세요</p>
        </S.HomeImgTitleBox>
      </S.HomeImgWrapper>
      <S.HomeContentContainer>
        <Navbar bookmarkHandler={bookmarkShowHandler} />
        <ExplorePart />
        <Static stateArr={STATE_CODE} />
        <Bookmark
          bookmarkHandler={bookmarkShowHandler}
          bookmarkShow={bookmarkShow}
        />
      </S.HomeContentContainer>
    </S.HomeContainer>
  );
};

export default HomePage;
