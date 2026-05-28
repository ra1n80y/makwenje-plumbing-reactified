import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import PageTransition from "../components/ui/PageTransition";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
          <Route
            path="contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
      <AnimatedRoutes />
    </Suspense>
  </BrowserRouter>
);

export default AppRouter;
