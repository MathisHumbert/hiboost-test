import styled from 'styled-components';
import images from '../../assets/offre';

const Info = ({ title, text, img, circle1, circle2, dot }) => {
  return (
    <Wrapper>
      <div className='left'>
        <img src={img} alt='first-img' />
      </div>
      <div className='right'>
        <h3>{title}</h3>
        <p>{text}</p>
        <button className='main-btn'>En savoir plus</button>
      </div>
      <img src={circle1} alt='circle1' className='circle1' />
      <img src={circle2} alt='circle2' className='circle2' />
      <img src={dot} alt='dot' className='dot' />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  gap: 70px;
  color: #fff;
  position: relative;

  .left {
    z-index: 3;
  }

  .right {
    max-width: 480px;
  }

  h3 {
    font-size: 36px;
    line-height: 36px;
    font-family: var(--abeezee-font);
    font-style: italic;
  }

  p {
    margin-top: 19px;
    margin-bottom: 39px;
    font-size: 18px;
    line-height: 30px;
    font-family: var(--roboto-font);
  }

  button {
    background: var(--green-color);
  }

  .circle1,
  .circle2,
  .dot {
    position: absolute;
    z-index: 2;
  }
`;
export default Info;
