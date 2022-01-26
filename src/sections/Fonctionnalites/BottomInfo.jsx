import { BiChevronRight } from 'react-icons/bi';
import styled from 'styled-components';

const BottomInfo = ({ title, text }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>{text}</p>
      <span>
        Découvrir <BiChevronRight />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 36px;
    line-height: 70px;
    font-family: var(--abeezee-font);
    font-style: italic;
    color: var(--primary-font-color);
  }

  p {
    font-size: 18px;
    line-height: 30px;
    color: var(--secondary-font-color);
    font-family: var(--roboto-font);
  }

  span {
    color: var(--blue-color);
    display: flex;
    align-items: center;
    line-height: 0;
    cursor: pointer;
    font-family: var(--roboto-font);
    font-weight: 700;
    margin-top: 24px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export default BottomInfo;
