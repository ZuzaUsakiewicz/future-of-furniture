import { useState, useEffect } from "react";
import Link from "next/link";
import {
  HamburgerMenuContainer,
  Hamburger,
  NavigationList,
} from "../../styles/Navbar.styled";

function HamburgerMenu({ handleScroll }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  const close = () => setOpen(false);

  useEffect(() => {
    if (open) {
      window.addEventListener("scroll", close);
    }
  }, [handleScroll]);

  return (
    <HamburgerMenuContainer handleScroll={handleScroll}>
      <Hamburger open={open} onClick={toggleOpen}>
        <div />
        <div />
        <div />
      </Hamburger>
      <NavigationList open={open}>
        <li>
          <Link href="/">
            <a onClick={() => close()}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onClick={() => close()}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a onClick={() => close()}>Contact</a>
          </Link>
        </li>
      </NavigationList>
    </HamburgerMenuContainer>
  );
}

export default HamburgerMenu;
