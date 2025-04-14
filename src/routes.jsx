import App from './pages/App.jsx';
import ShoppingCart from './pages/ShoppingCart.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'checkout',
    element: <ShoppingCart />,
  }
];

export default routes;