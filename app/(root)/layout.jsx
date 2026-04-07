import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
