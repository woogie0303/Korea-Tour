import * as S from "../../styles/Tour/TourNavbar";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as ArrowLeft } from "../../assets/imgs/arrow_left.svg";
import { Link } from "react-router-dom";

const navItem = [
  { cat: "관광지", catNum: 12 },
  { cat: "문화시설", catNum: 14 },
  { cat: "행사/공연/축제", catNum: 15 },
  { cat: "여행코스", catNum: 25 },
  { cat: "레포츠", catNum: 28 },
  { cat: "숙박", catNum: 32 },
  { cat: "쇼핑", catNum: 38 },
  { cat: "음식점", catNum: 39 },
];
const TourNavbar = ({ tourDataHandler }) => {
  const navRef = useRef([]);
  const [navFix, setNavFix] = useState(false);

  const scrollEventHandler = () => {
    if (window.scrollY > 45) {
      setNavFix(true);
    } else {
      setNavFix(false);
    }
  };

  useEffect(() => {
    navRef.current[0].className += " active";
    window.addEventListener("scroll", scrollEventHandler);

    return () => {
      window.removeEventListener("scroll", scrollEventHandler);
    };
  }, []);

  const navActiveHandler = (i, catNum) => {
    navRef.current.forEach(
      nav => (nav.className = nav.className.replace(" active", ""))
    );
    navRef.current[i].className += " active";
    tourDataHandler(catNum);
  };

  return (
    <S.TourNavWrapper $fix={navFix}>
      <Link to="/">
        <ArrowLeft />
      </Link>

      <S.TourNavLists>
        {navItem.map((d, i) => (
          <S.TourNavList
            ref={ref => (navRef.current[i] = ref)}
            key={d.catNum}
            onClick={navActiveHandler.bind(null, i, d.catNum)}
          >
            {d.cat}
          </S.TourNavList>
        ))}
      </S.TourNavLists>
    </S.TourNavWrapper>
  );
};

export default TourNavbar;
