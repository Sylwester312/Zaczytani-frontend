import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import User from './pages/User';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Layout from './layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'account', element: <Account /> },
      { path: '/user/:id', element: <User /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
