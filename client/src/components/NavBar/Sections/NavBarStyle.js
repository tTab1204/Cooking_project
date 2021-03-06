import styled from 'styled-components';
import { color } from 'styles/Theme';

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  font-size: 1rem;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  background: ${({ scrollNav }) => (scrollNav ? 'white' : 'white')};
  top: 0;
  z-index: 10;
  width: 100%;

  @media screen and (max-width: 540px) {
    padding: 0 8px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 72px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    padding: 0;
    height: 60px;
  }
`;

export const NavLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  color: ${color.green_2};
  font-family: 'Jua', sans-serif;

  @media screen and (max-width: 1140px) {
    margin-left: 0.5rem;
  }
`;
