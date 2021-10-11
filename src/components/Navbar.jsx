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
import { mobile } from "../responsive";
import { color } from "@mui/system";
import { BrowserRouter as Router, Link } from "react-router-dom";

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

// const Genders = styled.span`
//   font-size: 1rem;
//   cursor: pointer;
//   margin-right: 25px;
//   ${mobile({ fontSize: "12px", marginRight: "5px" })}
// `;

// const Left = styled.div`
//   color: white;
//   display: flex;
//   align-items: center;
//   flex: 1;
// `;

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

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
//   margin-right: 25px;
// `;

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

// const Input = styled.input`
//   padding: 5px;
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

const Navbar = () => {
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
            <Link to="/cart">
              <Badge badgeContent={4} color="primary" style={LinkStyle}>
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
