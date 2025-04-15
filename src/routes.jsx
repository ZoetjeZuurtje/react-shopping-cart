import App from './pages/App.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'home',
    element: <HomePage />,
  }
];

export default routes;