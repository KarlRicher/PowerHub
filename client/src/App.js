import styled from "styled-components";

import LoginButton from "./components/LoginButton";

const App = () => {
  return (
    <Wrapper>
      <SmallerWrapper>
        <PowerHub>PowerHub</PowerHub>
        <Paragraph>Connect with Powerlifters from around the world.</Paragraph>
      </SmallerWrapper>

      <LoginButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 100vh;
`;

const SmallerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PowerHub = styled.h1``;

const Paragraph = styled.p``;

export default App;
