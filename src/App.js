import React from "react";
import Navbar from './Navbar';
import DataFetching from "./DataFetching";
import LegalPage from "./LegalPage";
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <DataFetching />
      <LegalPage/>
      <Footer/>
    </div>
  );
};

export default App;
