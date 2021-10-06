import React from "react";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components';

const Container = styled.div`
    height: 50vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Description = styled.div`
  font-size: 24px;
  font-weight: bolder;
  margin-bottom: 20px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #4F8060;
  color: white;
  `

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description> Join now to receive 15% off on your next purchase!</Description>
      <InputContainer>
        <Input placeholder="Your email here..." />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
