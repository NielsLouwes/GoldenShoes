import styled from "styled-components";
import { mobile } from "../responsive";

const Display = styled.div`
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  height: 30px;
  flex: 1;
  padding: 10px;
  font-size: 16px;
  font-weight: bolder;
  text-align: center;
  color: darkslategrey;
  ${mobile({ fontSize: "10px ", padding: 2, marginBottom: "10px"})}
`;

const Benefits = () => {
  return (
    <>
      <Display>
        <Container style={{ marginLeft: 15 }}>
          Free delivery for orders over 30 euros
        </Container>
       <Container>Free returns within 100 days</Container> 
      </Display>
    </>
  );
};

export default Benefits;
