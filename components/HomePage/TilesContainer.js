import React from "react";
import FlexContainer from "../FlexContainer";
import Image from "next/image";
import Link from "next/link";
import { TileContainer, TileCard, Overlay } from "../../styles/HomePage.styled";

const tiles = [
  {
    name: "first tile",
    category: "kitchen",
    img: "/kitchen2.jpg",
    link: "/kitchen",
  },
  {
    name: "second tile",
    category: "living room",
    img: "/sofa.jpg",
    link: "/livingroom",
  },
  {
    name: "third tile",
    category: "dining room",
    img: "/chair2.jpg",
    link: "/kitchen",
  },
  {
    name: "fourth tile",
    category: "office",
    img: "/kitchen.jpg",
    link: "/livingroom",
  },
];

function TilesContainer() {
  return (
    <FlexContainer>
      <TileContainer>
        {tiles.map((tile) => (
          <TileCard key={tile.name}>
            <Link href="/">
              <a>
                <h2> {tile.name}</h2>
                <Image
                  src={tile.img}
                  alt={tile.name}
                  layout="intrinsic"
                  width={300}
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
