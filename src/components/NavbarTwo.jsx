import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40px;
  margin-bottom: 15px;
  ${mobile({ heigh: "50px" })}
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  color: black;
  display: flex;
  align-items: center;
  flex: 1;
`;

const Genders = styled.span`
  font-size: 1rem;
  cursor: pointer;
  margin-right: 25px;
  font-weight: bolder;
  ${mobile({ fontSize: "12px", marginRight: "5px", marginLeft: "10px"})}
`;
const Right = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  margin-right: 25px;
  ${mobile({ fontSize: "8px", marginRight: "25px" , alignItems: "flex-start", padding: 0})}
`;

const Search = styled.div`
    border: none;
    
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  background-color: #d3d3d3;
  ${mobile({ width: "100px" , padding: "5px" })}
`;

const NavbarTwo = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Genders>Women</Genders>
          <Genders>Men</Genders>
          <Genders>Youth</Genders>
        </Left>
        <Right>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search />
          </SearchContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavbarTwo;