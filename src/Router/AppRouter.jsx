import { Route, Routes, useLocation } from "react-router-dom";
import { menuRouter } from "./menuRouter";
import Layout from '../Router/layout/Layout';
import { useEffect } from "react";

const AppRouter = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {menuRouter.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRouter;
