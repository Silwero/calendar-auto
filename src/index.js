import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from '@mui/material';
// import theme from './MUITheme';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
);

reportWebVitals();
