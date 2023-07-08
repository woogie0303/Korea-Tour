import Home from "./pages/Home/Home";
import styled from "styled-components";
import { PC, Mobile, MobileContainer } from "./styles/common/Mediaquery";

function App() {
  return (
    <>
      <PC>
        <Home />
      </PC>

      <Mobile>
        <MobileContainer>
          <Home />
        </MobileContainer>
      </Mobile>
    </>
  );
}

export default App;
