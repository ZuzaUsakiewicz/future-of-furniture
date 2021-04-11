import React from "react";
import { NavbarContainer, NavItem } from "../../styles/Navbar.styled";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <NavbarContainer>
      <Link href="/about">
        <a>
          <NavItem left>
            <Image
              src="/icon.svg"
              alt="contact icon"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority={true}
              objectPosition="center"
            />
          </NavItem>
        </a>
      </Link>
      <HamburgerMenu />
      <Link href="/">
        <a>
          <NavItem>
            <Image
              src="/futureoffwhite.svg"
              alt="Futuristic logo"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority={true}
              objectPosition="center"
            />
          </NavItem>
        </a>
      </Link>
    </NavbarContainer>
  );
}

export default Navbar;
