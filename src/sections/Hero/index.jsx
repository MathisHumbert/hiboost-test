import styled from 'styled-components';
import Info from './Info';
import Images from './Images';
import Menu from './Menu';

const Hero = () => {
  return (
    <Wrapper>
      <Menu />
      <div className='hero'>
        <Info />
        <Images />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: linear-gradient(
    180deg,
    #e5efff 0%,
    rgba(229, 239, 255, 0.262661) 83.7%,
    rgba(229, 239, 255, 0) 100%
  );

  .hero {
    padding-top: 179px;
    display: flex;
    justify-content: space-between;
    margin-left: 210px;
  }
`;
export default Hero;
