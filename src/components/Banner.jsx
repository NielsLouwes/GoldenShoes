import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  margin-top: 15px;
`;
const Image = styled.img`
  max-width: 90%;
  max-height: 100%;
  display: block;
  margin-left: 4%;
`;

const Banner = () => {
  return (
    <ImageContainer>
      <Image
        src="https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="girl playing with a basketball"
      />
    </ImageContainer>
  );
};

export default Banner;
