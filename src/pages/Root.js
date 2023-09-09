import { Outlet } from "react-router";
const RootLayOut = () => {
  // const navigation = useNavigation();

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default RootLayOut;
