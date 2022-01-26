import React from 'react';
import styled from 'styled-components';
import { BiChevronRight } from 'react-icons/bi';

const Info = () => {
  return (
    <Wrapper>
      <h1>
        Lorem ipsum <br /> dolor sit amet
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at eleifend
        nulla, ac gravidaneque. Nunc vel sapien pharetra, ultricies justo id,
        elementum quam. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Nulla in vulputate neque. Curabitur
        mattis justo in ipsum dignissim fringilla et sed lorem.
      </p>
      <div>
        <button className='main-btn'>Créer un compte</button>
        <p>
          or
          <span>
            Me connecter <BiChevronRight />
          </span>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h1 {
    font-family: var(--abeezee-font);
    font-size: 85px;
    line-height: 95px;
    font-style: italic;
    color: var(--primary-font-color);
  }

  p {
    font-size: 18px;
    line-height: 25px;
    color: var(--secondary-font-color);
    max-width: 740px;
    font-family: var(--roboto-font);
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 50px;

    p {
      display: flex;
      align-items: center;
      line-height: 0;
      gap: 10px;
    }
  }

  .main-btn {
    background: var(--purple-color);
  }

  span {
    color: var(--blue-color);
    display: flex;
    align-items: center;
    line-height: 0;
    cursor: pointer;
    font-weight: 700;
  }
`;
export default Info;
