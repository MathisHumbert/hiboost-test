import styled from 'styled-components';
import BottomInfo from './BottomInfo';
import images from '../../assets/fonctionnalites';

const First = () => {
  return (
    <Wrapper>
      <div className='top'>
        <img src={images.first1} alt='main-first' className='first1' />
        <img src={images.first2} alt='first2' className='absolute-img first2' />
        <img src={images.first3} alt='first3' className='absolute-img first3' />
      </div>
      <BottomInfo
        title='Donec tincidunt tellus'
        text='In at eleifend nulla, ac gravida neque. Nunc vel sapien pharetra, ultricies justo id, elementum quam.'
      />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-left: 101px;
  max-width: 430px;

  .top {
    position: relative;
    width: fit-content;
  }

  .absolute-img {
    position: absolute;
  }

  .first2 {
    top: 10px;
    left: 0;
    transform: translateX(-50%);
  }

  .first3 {
    left: -14px;
    transform: translateX(-100%);
  }
`;
export default First;
