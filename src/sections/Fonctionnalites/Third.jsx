import styled from 'styled-components';
import BottomInfo from './BottomInfo';
import images from '../../assets/fonctionnalites';

const Third = () => {
  return (
    <Wrapper>
      <div className='top'>
        <img src={images.third1} alt='main-thrid' className='third1' />
        <img src={images.third2} alt='third2' className='absolute-img third2' />
        <img src={images.third3} alt='third3' className='absolute-img third3' />
        <img src={images.third4} alt='third4' className='absolute-img third4' />
      </div>
      <BottomInfo
        title='Auctor ut'
        text='Aenean consectetur ac augue id finibus. Duis ac urna pretium mi bibendum sodales ac quis est.'
      />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding-top: 148px;
  max-width: 430px;

  .top {
    position: relative;
    width: fit-content;
  }

  .absolute-img {
    position: absolute;
  }

  .third2 {
    top: -56px;
    transform: translateY(-100%);
    right: 48px;
  }

  .third3 {
    left: 32px;
    transform: translateY(-50%);
  }

  .third4 {
    top: 115px;
    left: 325px;
  }
`;
export default Third;
