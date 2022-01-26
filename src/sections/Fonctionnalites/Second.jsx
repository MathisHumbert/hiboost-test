import styled from 'styled-components';
import BottomInfo from './BottomInfo';
import images from '../../assets/fonctionnalites';

const Second = () => {
  return (
    <Wrapper>
      <div className='top'>
        <img src={images.second1} alt='main-second' className='second1' />
        <img
          src={images.second2}
          alt='second2'
          className='absolute-img second2'
        />
        <img
          src={images.second3}
          alt='second3'
          className='absolute-img second3'
        />
        <img
          src={images.second4}
          alt='second4'
          className='absolute-img second4'
        />
        <img
          src={images.second5}
          alt='second5'
          className='absolute-img second5'
        />
        <img
          src={images.second6}
          alt='second6'
          className='absolute-img second6'
        />
      </div>
      <BottomInfo
        title='Quisque scelerisque '
        text='Sed vel metus fringilla, consequat ligula eu, commodo magna.'
      />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding-top: 74px;

  align-items: center;
  max-width: 430px;

  .top {
    position: relative;
    width: fit-content;
  }

  .absolute-img {
    position: absolute;
  }

  .second2 {
    top: 0;
    left: 48px;
    transform: translateY(-50%);
  }

  .second3 {
    top: 19px;
    right: 36px;
  }

  .second4 {
    top: 112px;
    left: 48px;
  }

  .second5 {
    top: 134px;
    right: 96px;
  }

  .second6 {
    top: 249px;
    right: 172px;
  }
`;
export default Second;
