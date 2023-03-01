import { Outlet } from 'react-router';
import Header from './component/Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
