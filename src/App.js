import { Outlet } from 'react-router';
import styled from 'styled-components';
import Header from './component/Header/Header';

const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100%;
`;

const MainContent = styled.div`
  padding-top: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <MainWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </MainWrapper>
  );
};

export default App;
