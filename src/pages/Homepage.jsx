import React from "react";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
`;

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <NavbarTwo />
      <Benefits />
      <Categories />
      <Title>Best Sellers</Title>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
