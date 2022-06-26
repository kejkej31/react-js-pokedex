import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { createElement, Suspense } from "react";
import Loader from "components/Common/Loader";
import NotFoundPage from "components/ErrorPages/NotFoundPage";

const MainRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route: any, i: number) => (
            <Route key={i} path={route.path} element={createElement(route.element)} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default MainRouter;
