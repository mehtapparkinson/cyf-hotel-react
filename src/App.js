import React from "react";

import Bookings from "./components/Bookings";

import AppHeader from "./components/Heading";

import CityCards from "./components/TouristInfoCards";

import Footer from "./components/Footer";

import "./App.css";

import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <CityCards />
      <Bookings />
      <Restaurant />
      <Footer
        array={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
