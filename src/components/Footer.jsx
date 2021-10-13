import styled from "styled-components";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Pinterest from "@mui/icons-material/Pinterest";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  margin-left: 25px;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20;
  ${mobile({ padding: "0" })}
`;

const Description = styled.p`
  margin: 20px 0px;
  ${mobile({ margin: "none" })}
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  margin: 7px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${mobile({ margin: "0px" })}
`;

const Center = styled.div`
  flex: 1;
  padding-bottom: 20px;
  margin-left: 50px;
  padding-left: 25px;
  ${mobile({ marginTop: "20px", marginLeft: "0px", paddingLeft: "0px" })}
`;

const Logo = styled.h3`
  margin-bottom: 25px;
  ${mobile({ marginBottom: "0" })}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li``;

const Right = styled.div`
  flex: 1;
  padding-bottom: 20px;
  margin-left: 60px;
  ${mobile({ padding: "none", marginLeft: "0px" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SOCIALS</Logo>
        <Description>Connect with us!</Description>
        <SocialContainer>
          <SocialIcon>
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Logo>Customer Service</Logo>
        <List>
          <ListItem>Returns Policy and FAQ</ListItem>
          <ListItem>Delivery details</ListItem>
          <ListItem>Contact us</ListItem>
          <ListItem>Warranty and repairs</ListItem>
          <ListItem>Gift Cards</ListItem>
          <ListItem>Refunds</ListItem>
        </List>
      </Center>
      <Right>
        <List>
          <Logo>Useful Links</Logo>
          <ListItem>Inspiration</ListItem>
          <ListItem>Influencer Picks</ListItem>
          <ListItem>Brands</ListItem>
          <ListItem>Sales</ListItem>
        </List>
      </Right>
    </Container>
  );
};

export default Footer;
