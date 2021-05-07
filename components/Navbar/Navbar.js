import React, { useState, useEffect } from "react";
import { NavbarContainer, NavItem } from "../../styles/Navbar.styled";
import HamburgerMenu from "./HamburgerMenu";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [scrollPrevPosition, setScrollPrevPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const scrollCurrentPosition = window.pageYOffset;
    setVisible(
      (scrollPrevPosition > scrollCurrentPosition &&
        scrollPrevPosition - scrollCurrentPosition > 80) ||
        scrollCurrentPosition < 10
    );
    setScrollPrevPosition(scrollCurrentPosition);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPrevPosition, visible, handleScroll]);

  return (
    <NavbarContainer visible={visible}>
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
      <HamburgerMenu handleScroll={handleScroll} />
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
