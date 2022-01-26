import styled from 'styled-components';

const PreFooter = () => {
  return (
    <Wrapper>
      <p>
        A convallis aliquet. <span>Morbi rutrum blandit sapien</span>, vel
        mollis neque consequat non.
      </p>
      <button className='main-btn'>Découvrir</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #5f37ef;
  padding: 85px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 67px;

  p {
    font-size: 36px;
    line-height: 52.5px;
    max-width: 855px;
    color: #fff;
    font-family: var(--roboto-font);
  }

  span {
    font-weight: 700;
  }

  .main-btn {
    border: 2px solid #fff;
    background: 0;
  }
`;
export default PreFooter;
