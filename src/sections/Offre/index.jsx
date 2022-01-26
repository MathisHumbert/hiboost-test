import styled from 'styled-components';
import images from '../../assets/offre';
import { offreData } from '../../data';
import Info from './Info';

const Offre = () => {
  return (
    <Wrapper style={{ backgroundImage: `url(${images.background})` }}>
      {offreData.map((item) => {
        return <Info key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 130px;
  margin-bottom: 72px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;

  article:first-child {
    margin-left: -369px;

    .circle1 {
      top: 127px;
      left: -40px;
      transform: translateX(-100%);
    }

    .circle2 {
      bottom: -50px;
      left: -100px;
    }

    .dot {
      bottom: 0;
      transform: translate(-40%, 70%);
    }
  }

  article:last-child {
    flex-direction: row-reverse;
    margin-right: -369px;

    .circle1 {
      top: 0;
      right: 250px;
      transform: translateY(-70%);
    }

    .circle2 {
      top: -20px;
      right: -150px;
    }

    .dot {
      bottom: 120px;
      right: 0;
      transform: translateX(37%);
    }
  }
`;
export default Offre;
