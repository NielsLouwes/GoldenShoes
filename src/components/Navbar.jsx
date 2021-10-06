import React from "react";
import styled from "styled-components";
import {
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";

const Container = styled.div`
  height: 60px;
  background-color: #80514F;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Genders = styled.span`
  font-size: 1rem;
  cursor: pointer;
  margin-right: 25px;
`;

const Left = styled.div`
  color: white;
  align-items: center;
  flex: 1;
`;
const Center = styled.div`
  color: white;
  align-items: center;
  text-align: center;
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bolder;
`;
const Right = styled.div`
  color: white;
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  margin-right: 25px;
`;

const MenuItems = styled.span`
  font-size: 1rem;
  cursor: pointer;
  margin-right: 25px;
`;
const Input = styled.input``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Genders>Women</Genders>
          <Genders>Men</Genders>
          <Genders>Youth</Genders>
        </Left>
        <Center>
          <Logo>Golden Shoes</Logo>
        </Center>
        <Right>
          <SearchContainer>
            <Input />
            <Search  />
          </SearchContainer>
          <MenuItems>
            <Badge>
              <AccountCircleOutlined />
            </Badge>
          </MenuItems>
          <MenuItems>
            <Badge>
              <FavoriteBorderOutlined />
            </Badge>
          </MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItems>

          {/* <Badge >
              <ShoppingCartOutlined />
            </Badge> */}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
