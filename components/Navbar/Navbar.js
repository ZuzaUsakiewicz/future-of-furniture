import React from "react";
import { NavbarContainer, NavItem } from "../../styles/Navbar.styled";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";

function Navbar() {
  return (
    <NavbarContainer>
      <NavItem>
        <Image
          src="/favicon.ico"
          alt="Futuristic logo"
          layout="fill"
          objectFit="contain"
          quality={100}
          priority={true}
          objectPosition="center"
        />
      </NavItem>
      <HamburgerMenu />
      <NavItem>
        <Image
          src="/futureoff.png"
          alt="Futuristic logo"
          layout="fill"
          objectFit="contain"
          quality={100}
          priority={true}
          objectPosition="center"
        />
      </NavItem>
    </NavbarContainer>
  );
}

export default Navbar;
