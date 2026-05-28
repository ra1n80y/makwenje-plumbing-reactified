import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout: React.FC = () => {
  useEffect(() => {
    document.body.classList.add("dark-theme");
    return () => document.body.classList.remove("dark-theme");
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
