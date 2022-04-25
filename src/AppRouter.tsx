import React, { ReactElement, ReactNode, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));

const AppRouter = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <Router>
      {children}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Help />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
