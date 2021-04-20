import React from "react";
import Link from "next/link";
import { Title, InnerLink } from "../../styles/HomePage.styled";
import FlexContainer from "../FlexContainer";
import Spacer from "../Spacer";

function HeroContainer() {
  return (
    <FlexContainer>
      <Title>The Future of Furniture</Title>
      <h2>Starts here...</h2>
      <Spacer size={32} />
      <Link href="/about">
        <InnerLink>Collections</InnerLink>
      </Link>
    </FlexContainer>
  );
}

export default HeroContainer;
