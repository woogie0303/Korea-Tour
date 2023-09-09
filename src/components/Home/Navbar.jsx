import * as S from "../../styles/Home/Navbar";
import { ReactComponent as Menu } from "../../assets/imgs/menu.svg";

const Navbar = ({ bookmarkHandler }) => {
  return (
    <S.Navbar>
      <S.NavbarList>
        <li onClick={bookmarkHandler}>Bookmark</li>
      </S.NavbarList>
    </S.Navbar>
  );
};

export default Navbar;
