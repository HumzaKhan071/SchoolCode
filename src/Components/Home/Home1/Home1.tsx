import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomCard from "./HomCard";

const Home1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <h2>The Best Solution</h2>
      <Wrapper>
        <Slider {...settings}>
          <HomCard />
          <HomCard />
          <HomCard />
          <HomCard />
          <HomCard />
          <HomCard />
          <HomCard />
          <HomCard />
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Home1;

const Container = styled.div`
  width: 100%;
  background-color: #f9fafb;
  padding: 30px 0;
  margin-bottom: 150px;
  h2 {
    text-align: center;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
