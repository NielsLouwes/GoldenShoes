import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 40px;
  margin-bottom: 5px;
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
  font-size: 12px;
  ${mobile({ fontSize: "12px", marginRight: "5px", marginLeft: "10px"})}
`;

const Right = styled.div``;

const UserLoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  margin-right: 25px;
  ${mobile({ fontSize: "8px", marginRight: "25px" , alignItems: "flex-start", padding: 0})}
`;

const UserOptions = styled.p`
  margin-left: 15px;
  font-weight: bolder;
  cursor: pointer;
  font-size: 12px;
`

const LinkStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "12px",
  
};

const NavbarTwo = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Genders>Women</Genders>
          <Genders>Men</Genders>
          <Genders>Youth</Genders>
        </Left>
        <Right>
          <UserLoginContainer >
            { !user && <Link style={LinkStyle} to="/login"><UserOptions>Log in</UserOptions></Link>} 
            { !user && <Link style={LinkStyle} to="/register"><UserOptions>Sign up</UserOptions></Link>}
            { user && <UserOptions onClick={(e) => handleLogout(e)}> Log out</UserOptions>}
          </UserLoginContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavbarTwo;
