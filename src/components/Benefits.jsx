import styled from "styled-components";

const Display = styled.div`
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  height: 30px;
  flex: 1;
  padding: 10px;
  font-size: 0.9rem;
  font-weight: bolder;
`;

const RightContainer = styled.div`
  height: 30px;
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 0.9rem;
  font-weight: bolder;
`;

const Benefits = () => {
  return (
    <>
      <Display>
        <Container style={{ marginLeft: 15 }}>
          Free delivery over 30 euros
        </Container>
        <Container>Next day delivery if you order before 12!</Container>
        <RightContainer>Free returns within 100 days</RightContainer>
      </Display>
    </>
  );
};

export default Benefits;
