import * as S from "../../styles/common/Notification";
import { ReactComponent as AlertIcon } from "../../assets/imgs/alert.svg";

const Notification = ({ type, title, message }) => {
  return (
    <S.NotificationWrapper>
      {type === "Loading" ? (
        <>
          <S.NotificationLoading></S.NotificationLoading>{" "}
          <p>
            {title}: {message}
          </p>
        </>
      ) : type === "Error" ? (
        <>
          <S.NotificationError>
            <AlertIcon />
          </S.NotificationError>
          <p>
            {title}: {message}
          </p>
        </>
      ) : (
        ""
      )}
    </S.NotificationWrapper>
  );
};

export default Notification;
