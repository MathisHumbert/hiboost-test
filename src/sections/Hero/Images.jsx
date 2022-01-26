import styled from 'styled-components';
import images from '../../assets/hero';

const Images = () => {
  return (
    <Wrapper>
      <img src={images.img1} alt='first-img' className='img1' />
      <img src={images.img2} alt='second-img' className='img2' />
      <img src={images.img3} alt='third-img' className='img3' />
      <img src={images.dot1} alt='first-dot' className='dot1' />
      <img src={images.dot2} alt='second-dot' className='dot2' />
      <img src={images.dot3} alt='third-dot' className='dot3' />
      <img src={images.circle1} alt='first-circle' className='circle1' />
      <img src={images.circle2} alt='second-circle' className='circle2' />
      <img src={images.circle3} alt='third-circle' className='circle3' />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  width: 822px;
  height: 830px;

  img {
    position: absolute;
  }

  .img1 {
    top: 40px;
    left: 0;
    z-index: 2;
  }

  .img2 {
    top: 141px;
    right: 0;
  }

  .img3 {
    top: 440px;
    left: 160px;
  }

  .dot1 {
    right: 0;
    bottom: -70px;
    z-index: -1;
  }

  .dot2 {
    top: 141px;
    z-index: -1;
  }

  .dot3 {
    right: 160px;
    top: 0;
    z-index: -1;
  }

  .circle1 {
    top: 117px;
    left: 380px;
  }

  .circle2 {
    top: 463px;
    right: 678.5px;
  }

  .circle3 {
    top: 540px;
    right: 80px;
  }
`;
export default Images;
