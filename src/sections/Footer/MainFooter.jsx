import styled from 'styled-components';

const MainFooter = () => {
  return (
    <Wrapper>
      <p>Nullam vitae</p>
      <p>
        <span>Morbi</span> rutrum blandit sapien
      </p>
      <p>
        <span>Vel mollis neque </span>consequa
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #7854f7;
  padding: 45px 0 58px 0;
  display: flex;
  justify-content: center;
  gap: 322px;

  p {
    font-size: 20px;
    line-height: 52.5px;
    color: #fff;
    font-family: var(--roboto-font);
  }

  span {
    font-weight: 700;
  }
`;
export default MainFooter;
