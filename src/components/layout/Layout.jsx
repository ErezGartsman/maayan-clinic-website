import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import FloatingSocials from "./FloatingSocials.jsx";

function Layout({ children }) {
  return (
    <div className="bg-cream-200">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingSocials />
    </div>
  );
}

export default Layout;
