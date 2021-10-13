import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { popularProducts } from "../data";
import { useState } from "react";
import { tablet } from "../responsive";
import NavbarTwo from "../components/NavbarTwo";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 25px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: bolder;
  text-align: center;
  margin-bottom: 50px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  height: 250px;
`;

const Image = styled.img`
  width: 300px;
  ${mobile({ width: "150px" })};
  ${tablet({ width: "200px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.h3``;

const ProductDescription = styled.p`
  ${mobile({ marginBottom: "5px" })}
`;

const ProductId = styled.span`
  ${mobile({ marginBottom: "5px" })}
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid grey;
  background-color: ${(props) => props.color};
  ${mobile({ marginBottom: "5px" })}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${tablet({ heigh: "65vh" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  ${tablet({ fontSize: "18px", fontWeight: "bolder" })}
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  ${tablet({ margin: "12px" })}
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ApplyCodeButton = styled.button`
  width: 100%;
  padding: 10px;
  color: black;
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 10px;
  border: 2px solid black;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px black solid;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < 10 && setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <Navbar />
      <NavbarTwo />
      <Benefits />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={popularProducts[0].img} />
                <Details>
                  <ProductName>{popularProducts[0].name}</ProductName>
                  <ProductDescription>
                    {popularProducts[0].category}
                  </ProductDescription>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="white" />
                  <ProductSize>
                    <b>Size:</b> {popularProducts[0].size[6]}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>{quantity}</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>£ {popularProducts[0].price}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={popularProducts[7].img} />
                <Details>
                  <ProductName>{popularProducts[7].name}</ProductName>
                  <ProductDescription>
                    {popularProducts[7].category}
                  </ProductDescription>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="#BC9E82" />
                  <ProductSize>
                    <b>Size:</b> {popularProducts[7].size[1]}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove onClick={() => handleQuantity("decrease")} />
                  <ProductAmount>{quantity}</ProductAmount>
                  <Add onClick={() => handleQuantity("increase")} />
                </ProductAmountContainer>
                <ProductPrice>£ {popularProducts[7].price}</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>£ 180</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>£ 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem></SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>£ 180</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout</Button>
            <SummaryItem>
              <SummaryItemText>
                Estimated delivery date is the <b>20th </b> of October, 2021.{" "}
              </SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>
                Insert discount code (not required){" "}
              </SummaryItemText>
            </SummaryItem>
            <Input placeholder="Enter discount code" />
            <ApplyCodeButton>Apply</ApplyCodeButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
