import styled from 'styled-components';
import logo from '../../assets/logo-hiboost.png';
import { FaSearch } from 'react-icons/fa';

const Menu = () => {
  return (
    <Wrapper>
      <div className='left'>
        <img src={logo} alt='company-logo' />
        <ul>
          <li>Ultricies justo</li>
          <li>Paturient montes</li>
          <li>Nulla in vulputate</li>
        </ul>
      </div>
      <div className='right'>
        <button className='connexion-btn'>Connexion</button>
        <button className='contact-btn'>Contact</button>
        <button className='search-btn'>
          <FaSearch className='search-icon' />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: calc(100% - 143px);
  margin: 0 auto;
  font-family: var(--roboto-font);
  color: var(--primary-font-color);

  img {
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: flex-end;
    gap: 2rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 27px;

    li {
      line-height: 21px;
      cursor: pointer;
      font-weight: 500;
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin-bottom: -13px;
  }

  .connexion-btn {
    padding: 0;
    background: 0;
    font-family: var(--roboto-font);
    color: var(--primary-font-color);
    font-weight: 500;
  }

  .contact-btn {
    background: var(--purple-color);
    padding: 13px 13.5px;
    border-radius: 5px;
    color: #fff;
    font-family: var(--roboto-font);
    margin-left: 21px;
    margin-right: 30px;
    font-weight: 500;
  }

  .search-btn {
    padding: 0;
    background: 0;

    .search-icon {
      font-size: 21px;
      color: var(--primary-font-color);
    }
  }
`;
export default Menu;
