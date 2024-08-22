import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import NotFound from '@pages/NotFound';
import Todos from '@pages/Todos';
import Home from '@pages/Home';

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/todos', element: <Todos /> },
    { path: '*', element: <NotFound /> },
  ]);
};

const DefineRouter = () => {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
};

export default DefineRouter;
