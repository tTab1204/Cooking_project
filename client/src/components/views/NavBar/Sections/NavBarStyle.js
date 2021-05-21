import styled from "styled-components";
import "../../../../index.css";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 72px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: "Jua", sans-serif;
`;
