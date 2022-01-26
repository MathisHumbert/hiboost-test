import styled from 'styled-components';
import images from '../../assets/citations';
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';

const Citations = () => {
  return (
    <Wrapper>
      <h2>
        Sed vel metus fringilla, <br /> consequat ligula eu.
      </h2>
      <div className='img-container'>
        <img src={images.mainImg} alt='main-img' className='main-img' />
        <div className='arrow-container'>
          <CgArrowLongLeft className='left-arrow ' />
          <CgArrowLongRight className='right-arrow' />
        </div>
      </div>
      <img
        src={images.person1}
        alt='person1'
        className='person1 absolute-img'
      />
      <img
        src={images.person2}
        alt='person2'
        className='person2 absolute-img'
      />
      <img
        src={images.person3}
        alt='person3'
        className='person3 absolute-img'
      />
      <img
        src={images.person4}
        alt='person4'
        className='person4 absolute-img'
      />
      <img
        src={images.person5}
        alt='person5'
        className='person5 absolute-img'
      />
      <img
        src={images.person6}
        alt='person6'
        className='person6 absolute-img'
      />
      <img src={images.dot1} alt='dot1' className='dot1 absolute-img' />
      <img src={images.dot2} alt='dot2' className='dot2 absolute-img' />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 138px 0 221px 0;
  background: linear-gradient(
    180deg,
    rgba(236, 240, 253, 0) 0%,
    rgba(236, 240, 253, 0.53) 14.32%,
    #ecf0fd 45.83%,
    rgba(236, 240, 253, 0.43) 84.33%,
    rgba(236, 240, 253, 0) 100%
  );
  position: relative;
  z-index: 1;

  h2 {
    font-family: var(--abeezee-font);
    font-size: 55px;
    line-height: 70px;
    font-style: italic;
    color: var(--primary-font-color);
    text-align: center;
  }

  .img-container {
    padding-top: 103px;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .absolute-img {
    position: absolute;
    z-index: -1;
  }

  .person1 {
    top: 209px;
    right: 448px;
  }

  .person2 {
    top: 223px;
    left: 381px;
  }

  .person3 {
    top: 438px;
    left: 102px;
  }

  .person4 {
    top: 466px;
    right: 233px;
  }

  .person5 {
    bottom: 156px;
    left: 256px;
  }

  .person6 {
    right: 396px;
    bottom: 108px;
  }

  .dot1 {
    top: 447px;
    right: 468px;
  }

  .dot2 {
    bottom: 180px;
    left: 474px;
  }

  .arrow-container {
    position: absolute;
    bottom: 0;
    font-size: 24px;
    right: calc(50% - 250px);
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .right-arrow,
  .left-arrow {
    cursor: pointer;
  }

  .right-arrow {
    font-size: 32px;
  }
`;
export default Citations;
