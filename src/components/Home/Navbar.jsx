import * as S from "../../styles/Home/Navbar";
import { ReactComponent as Menu } from "../../assets/imgs/menu.svg";
import LoginBtn from "./LoginBtn";

const Navbar = props => {
  return (
    <S.Navbar>
      <Menu />
      <S.NavbarList>
        {props.list.map(d => (
          <li>{d}</li>
        ))}
        <LoginBtn />
      </S.NavbarList>
    </S.Navbar>
  );
};

export default Navbar;
