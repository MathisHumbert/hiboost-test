import styled from 'styled-components';
import First from './First';
import Second from './Second';
import Third from './Third';

const Fonctionnalites = () => {
  return (
    <Wrapper>
      <h2>
        Maecenas lobortis <br /> maximus
      </h2>
      <div className='all-fonctionnalites'>
        <First />
        <Second />
        <Third />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 65px 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: var(--abeezee-font);
    font-size: 55px;
    line-height: 70px;
    font-style: italic;
    color: var(--primary-font-color);
    text-align: center;
  }

  .all-fonctionnalites {
    padding-top: 56px;
    display: flex;
    gap: 69px;
  }
`;

export default Fonctionnalites;
