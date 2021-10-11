import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import NavbarTwo from "../components/NavbarTwo";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-size: 36px;
  text-align: center;
  ${mobile({ textAlign: "center" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: bolder;
  margin-right: 20px;
  ${mobile({ marginRight: "0px", fontSize: "16px" })}
`;
const Select = styled.select`
  padding: 8px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px " })}
`;

const Option = styled.option``;

const ProductOverview = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters);

  return (
    <Container>
      <Navbar />
      <NavbarTwo />
      <Benefits />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>purple</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>38</Option>
            <Option>39</Option>
            <Option>40</Option>
            <Option>41</Option>
            <Option>42</Option>
            <Option>43</Option>
            <Option>44</Option>
            <Option>45</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="ascending">Price (ascending)</Option>
            <Option value="descending">Price (descending)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductOverview;
