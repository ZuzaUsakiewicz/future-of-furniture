import React from "react";
import FlexContainer from "../FlexContainer";
import Image from "next/image";
import Link from "next/link";
import {
  TileContainer,
  TileCard,
  TileContainerTitle,
} from "../../styles/HomePage.styled";

const tiles = [
  {
    name: "kitchens",
    category: "kitchen",
    img: "/kitchen.jpg",
    link: "/kitchen",
  },
  {
    name: "daily",
    category: "living room",
    img: "/sofa2.jpg",
    link: "/livingroom",
  },
  {
    name: "dinner time",
    category: "dining room",
    img: "/kitchen2.jpg",
    link: "/kitchen",
  },
  {
    name: "the office",
    category: "office",
    img: "/chair2.jpg",
    link: "/livingroom",
  },
];

function TilesContainer() {
  return (
    <FlexContainer>
      <TileContainerTitle>2021 Trends</TileContainerTitle>
      <TileContainer>
        {tiles.map((tile) => (
          <TileCard key={tile.name}>
            <Link href={tile.link}>
              <a>
                <h2> {tile.name}</h2>
                <Image
                  src={tile.img}
                  alt={tile.name}
                  layout="intrinsic"
                  width={280}
                  height={300}
                  objectFit="cover"
                />
              </a>
            </Link>
          </TileCard>
        ))}
      </TileContainer>
    </FlexContainer>
  );
}

export default TilesContainer;
