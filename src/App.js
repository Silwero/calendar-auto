import { Outlet } from 'react-router';

export const App = () => {
  return (
    <div>
      <header>header</header>
      <Outlet />
    </div>
  );
};

export default App;
