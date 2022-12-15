import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <Container>
      <Wrapper>
        <TextDiv>
          <h1>
            A digital <br />
            school hub
            <br /> for all arms
          </h1>
          <strong>Manage every need of the School...</strong>
          <p>
            From the School Admin, Teachers, Students down to the Parents{" "}
            <strong>schoolcode</strong> is here to provide learning facilitated
            by technology that gives students some element of control over time,
            place, path and/or pace
          </p>
          <ButtonHold>
            <NavLink to="/signup">
              <button>Sign Up</button>
            </NavLink>
          </ButtonHold>
        </TextDiv>

        <ImageDiv>
          <img src="/Img/SckoolCodMain2.png" alt="" />
        </ImageDiv>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column-reverse;
    text-align: center;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;
const TextDiv = styled.div`
  width: 500px;
  h1 {
    font-size: 70px;
    line-height: 1;
    font-weight: 800;
  }

  strong {
    font-size: 15px;
  }

  p {
    font-size: 13px;
  }

  @media (max-width: 500px) {
    width: 100%;
    h1 {
      font-size: 40px;
    }
    strong {
      font-size: 13px;
    }

    p {
      width: 100%;
      font-size: 12px;
    }
  }
`;
const ButtonHold = styled.div`
  button {
    height: 35px;
    width: 150px;
    background-color: #4285f4;
    color: #fff;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 350ms;
    :hover {
      transform: scale(0.94);
    }
  }
`;
const ImageDiv = styled.div`
  width: 500px;
  img {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
