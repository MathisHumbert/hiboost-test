import styled from 'styled-components';
import PreFooter from './PreFooter';
import MainFooter from './MainFooter';
import footerCircle from '../../assets/footer-circle.png';

const Footer = () => {
  return (
    <Wrapper>
      <PreFooter />
      <MainFooter />
      <img src={footerCircle} alt='footer-circle' />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin-top: 9px;
  position: relative;

  img {
    position: absolute;
    top: 210px;
    right: 144px;
  }
`;
export default Footer;
