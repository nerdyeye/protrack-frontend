import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer/Footer";
import RoutePaths from "../../routes";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <RoutePaths />
      <Footer />
    </div>
  );
};

export default MainPage;
