import styled from "styled-components";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import Instagram from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Twitter from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Pinterest from "@mui/icons-material/Pinterest";

const Container = styled.div`
  display: flex;
  margin-left: 25px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20;
`;

const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.h1`
  display: flex;
`;
const SocialIcon = styled.h1`
  margin: 7px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Center = styled.div`
  flex: 1;
  padding-bottom: 20px;
`;

const Logo = styled.h2`
  margin-bottom: 25px;
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
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SOCIALS</Logo>
        <Description>
          Connect with us!
        </Description>
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
          <ListItem>Contact us</ListItem>
          <ListItem>Delivery details</ListItem>
          <ListItem>Returns</ListItem>
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
