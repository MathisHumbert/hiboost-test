import styled from 'styled-components';
import Info from './Info';
import Images from './Images';

const Hero = () => {
  return (
    <Wrapper>
      <Info />
      <Images />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 179px;
  display: flex;
  justify-content: space-between;
  margin-left: 210px;
`;
export default Hero;
