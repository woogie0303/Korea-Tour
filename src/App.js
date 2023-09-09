import HomePage from "./pages/Home/HomePage";
import { PC, Mobile, MobileContainer } from "./styles/common/Mediaquery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TourPage from "./pages/Tour/TourPage";
import ErrorPage from "./pages/Error/ErrorPage";
import RootLayOut from "./pages/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: ":stateId",
          element: <TourPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <PC>
        <RouterProvider router={router} />
      </PC>

      <Mobile>
        <MobileContainer>
          <RouterProvider router={router} />
        </MobileContainer>
      </Mobile>
    </>
  );
}

export default App;
