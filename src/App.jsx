import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Preloader from "./components/ui/Preloader.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import SideDrawer from "./components/ui/SideDrawer.jsx";
import { DrawerProvider } from "./lib/DrawerContext.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Process from "./pages/Process.jsx";
import FAQ from "./pages/FAQ.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";

const PRELOADER_MS = 1300;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, PRELOADER_MS);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      <ScrollToTop />
      <DrawerProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home revealed={!loading} />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>
        </Layout>
        <SideDrawer />
      </DrawerProvider>
    </BrowserRouter>
  );
}

export default App;
