import React from 'react';
import { useRoutes } from 'react-router-dom';

import Table from './ui/Table';
import Main from './pages';
import Detail from './pages/detail';


const Routes: React.FC = (): JSX.Element => {
  const routing = useRoutes([{
    path: '/',
    element: <Main />,
  },
  {
    path: ':hash',
    element: <Detail />,
  }]);

  return <>{routing}</>;
};

export default Routes;