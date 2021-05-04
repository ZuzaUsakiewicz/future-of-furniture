import styled from "styled-components";
import { device } from "../components/breakpoints";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: ${({ visible }) => (visible ? "0" : "-80px")};
  left: 0;
  right: 0;
  width: 50vw;
  margin: 0 auto;
  height: 1rem;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem 0;
  transition: all 0.4s ease-in-out;
`;
export const NavItem = styled.div`
  position: relative;
  width: ${({ left }) => (left ? "1rem" : "3rem")};
  height: 2rem;
  transition: transform 0.4s cubic-bezier(0.44, 0.38, 0.83, 0.67);
  display: ${({ left }) => (left ? "none" : null)};
  &::after {
    content: "";
    position: absolute;
    padding: ${({ left }) => (left ? "1.5rem" : "0.7rem")};
    border-radius: 50%;
    top: 0;
    left: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    text-align: center;
    background: ${({ theme }) => theme.colors.primaryGold};
    display: block;
    z-index: -1;
    transition: transform 0.4s cubic-bezier(0.44, 0.38, 0.83, 0.67);
  }
  &:hover {
    transform: ${({ left }) => (left ? "scale(1.6)" : null)};
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(0.8);
  }
  @media ${device.laptop} {
    display: block;
  }
`;

export const HamburgerMenuContainer = styled.div`
  width: 2rem;
  height: 100%;
`;

export const Hamburger = styled.button`
  width: 2rem;
  height: 2rem;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  div {
    width: 2rem;
    height: 0.13rem;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    transform-origin: 0.1rem;
    transition: transform 0.5s ease-in-out, opacity 0.3s ease-out;
    z-index: 997;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      width: 1.5rem;
      height: 0.1rem;
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const NavigationList = styled.ul`
  background: ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  transition: transform 0.5s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  list-style-type: none;
  li {
    a {
      font-size: ${({ theme }) => theme.fontSize.large};
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;
