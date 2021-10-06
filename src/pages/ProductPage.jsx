import styled from "styled-components";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;

const Category = styled.h4``;

const RatingStars = styled.div`
  font-weight: bolder;
`;
const Colors = styled.div``;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const SizeText = styled.p`
  margin-bottom: 5px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 16px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #80514f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const CartButton = styled.option`
  padding: 15px;
  border: 2px solid grey;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductPage = () => {
  const [value, setValue] = useState(4.5);

  return (
    <Container>
      <Navbar />
      <Benefits />
      <Wrapper>
        <ImageContainer>
          <Image src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/05a8af68-a2c4-465d-81e2-2fa136314c4d/sb-winterized-skate-top-mhw2Pg.png" />
        </ImageContainer>

        <InfoContainer>
          <Title>Nike SB Therma-fit</Title>
          <Category>Skateboarding</Category>
          <Description>
            Made from extra thick, extra warm polar fleece, the Nike SB
            Therma-FIT Top is a cold-weather essential.Water-repellent fabric on
            the chest and upper back helps keep you dry in light rain.This
            product is made from at least 50% recycled polyester fibres.
          </Description>
          <Box>
            <RatingStars>
              <SizeText>Reviews</SizeText>
              <Rating name="read-only" value={value} readOnly />
            </RatingStars>
          </Box>
          <Colors></Colors>
          <Price> $80.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="grey"></FilterColor>
              <FilterColor color="red"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <SizeText>
            Our model is wearing a size M. It fits true to size.
          </SizeText>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount> 1 </Amount>
              <Add />
            </AmountContainer>
            <CartButton> Add to cart</CartButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
