import * as S from "../../styles/Home/ExplorePart";
import seoul from "../../assets/imgs/seoul.png";
import busan from "../../assets/imgs/busan.png";
import jeju from "../../assets/imgs/jeju.png";
import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    state: "서울",
    areaCode: "1",
    imgSrc: seoul,
  },
  {
    state: "부산",
    areaCode: "6",
    imgSrc: busan,
  },
  {
    state: "제주도",
    areaCode: "39",
    imgSrc: jeju,
  },
];

const ExplorePart = () => {
  return (
    <S.ExplorePartContainer>
      <h2>Explore</h2>
      <S.ExplorePartNavList>
        <li>제일 유명한 장소</li>
      </S.ExplorePartNavList>
      <S.ExploreCarousel>
        {DUMMY_DATA.map(d => (
          <Link to={`${d.areaCode}`} key={d.areaCode}>
            <S.ExploreCarouselImgWrapper $imgSrc={d.imgSrc}>
              <S.ExploreCarouselImgTitleBox>
                <p>{d.state}</p>
              </S.ExploreCarouselImgTitleBox>
            </S.ExploreCarouselImgWrapper>
          </Link>
        ))}
      </S.ExploreCarousel>
    </S.ExplorePartContainer>
  );
};

export default ExplorePart;
