import React from "react";
import styled from "styled-components";
import {
  AccountCircleOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import { mobile } from "../responsive";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  background-color: #b51204;
  ${mobile({ heigh: "45px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Center = styled.div`
  color: white;
  align-items: center;
  text-align: left;
  flex: 2;
`;

const Logo = styled.h1`
  font-weight: bolder;
  font-family: "Yaldevi", sans-serif;
  font-size: 32px;
  ${mobile({ fontSize: "24px", textAlign: "center" })}
`;

const Right = styled.div`
  color: white;
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, marginRight: "20px" })}
`;

const MenuItems = styled.span`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px ", marginLeft: "5px" })}
`;

const LinkStyle = {
  textDecoration: "none",
  color: "white",
};

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Center>
          <Link to="/" style={LinkStyle}>
            <Logo>GOLDEN SHOE</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItems>
            <Link to="/login">
              <Badge style={LinkStyle}>
                <AccountCircleOutlined />
              </Badge>
            </Link>
          </MenuItems>
          <MenuItems>
            <Badge>
              <FavoriteBorderOutlined />
            </Badge>
          </MenuItems>
          <MenuItems>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary" style={LinkStyle}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
