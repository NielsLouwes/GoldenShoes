import styled from "styled-components";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { publicRequest } from "../axiosRequests";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { popularProducts } from "../data";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
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

const ReviewText = styled.p`
  color: grey;
  font-size: 14px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
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
  ${mobile({ width: "100%" })}
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const CartButton = styled.option`
  padding: 10px;
  border: 2px solid grey;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    background-color: #f8f4f4;
  }
  ${mobile({ padding: "8px" })}
`;

const ProductPage = () => {
  const [value, setValue] = useState(4.5);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await publicRequest.get("/products/find/" + id);
        setProduct(response.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < 10 && setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Container>
      <Navbar />
      <Benefits />
      <Wrapper>
        <ImageContainer>
          <Image src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg" />
        </ImageContainer>

        <InfoContainer>
          <Title>{popularProducts[0].name}</Title>
          <Category>{popularProducts[0].category}</Category>
          <Description>
            Originally made for basketball courts in the '70s. Celebrated by hip
            hop royalty in the '80s. The adidas Superstar shoe is now a
            lifestyle staple for streetwear enthusiasts. The world-famous shell
            toe feature remains, providing style and protection. Just like it
            did on the B-ball courts back in the day.
          </Description>
          <Box>
            <RatingStars>
              <SizeText>Reviews</SizeText>
              <Rating name="read-only" value={value} readOnly />
            </RatingStars>
            <ReviewText>
              Leave a review and receive £10 off your next purchase.
            </ReviewText>
          </Box>
          <Colors></Colors>
          <Price> £{popularProducts[0].price}</Price>
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
          <SizeText>This shoe fits true to size.</SizeText>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("decrease")} />
              <Amount> {quantity} </Amount>
              <Add onClick={() => handleQuantity("increase")} />
            </AmountContainer>
            <CartButton onClick={handleClick}> Add to cart</CartButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
