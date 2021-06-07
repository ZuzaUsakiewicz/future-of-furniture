import Head from "next/head";
import Spacer from "../components/Spacer";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import FlexContainer from "../components/FlexContainer";

// Import Swiper styles

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function About() {
  return (
    <FlexContainer>
      <Head>
        <title> | Future of Furniture |</title>
      </Head>
      <Spacer size={132} />
      <h1>About!</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        <SwiperSlide>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            quasi? Quod dolore expedita quasi cupiditate nobis, illum,
            asperiores voluptates eius minima commodi rem nemo doloremque iusto
            assumenda molestias eligendi fugiat.
          </p>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <Spacer size={132} />
    </FlexContainer>
  );
}
