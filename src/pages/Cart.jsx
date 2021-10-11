import { Add, Remove } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from '../components/Newsletter';
import { mobile } from "../responsive";
import WomensBoot from "../images/WomensBoot.png"
import NikeShoesTwo from "../images/NikeShoesTwo.png";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 25px;
  ${mobile({ padding: "10px" })}
  
`;

const Title = styled.h1`
  font-weight: 300;
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
  width: 250px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.h3``;

const ProductDescription = styled.p``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
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
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
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
`
  
const Input = styled.input`
  padding: 10px;
  border: 1px black solid;
`;

const Cart = () => {
 
  return (
    <Container>
      <Navbar />
      <Benefits />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={WomensBoot} />
                <Details>
                  <ProductName>
                        Brown ankle boots
                  </ProductName>
                  <ProductDescription>
                       Women's boots
                  </ProductDescription>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="blue" />
                  <ProductSize>
                    <b>Size:</b> 39
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>£ 80</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={NikeShoesTwo} />
                <Details>
                  <ProductName>
                     Jordan One
                  </ProductName>
                  <ProductDescription>
                      Men's sneakers
                  </ProductDescription>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>£ 120</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>£ 200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>£ 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>£ 200</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout</Button>
            <SummaryItem>
              <SummaryItemText>Estimated delivery date is the <b>20th </b> of October, 2021. </SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Insert discount code (not required) </SummaryItemText>
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