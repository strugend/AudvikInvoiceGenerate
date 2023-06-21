import React from "react";
import Navbar from './Navbar';
import DataFetching from "./DataFetching";
import LegalPage from "./LegalPage";

const App = () => {
  return (
    <div>
      <Navbar/>
      <DataFetching />
      <LegalPage/>
    </div>
  );
};

export default App;
