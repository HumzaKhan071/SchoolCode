import React from "react";
import styled from "styled-components";

const Home2 = () => {
  return (
    <Container>
      <Wrapper>
        <LeftText>
          <hr />
          <span>
            Unlocking the true potential of education with cutting edge
            technology
          </span>
        </LeftText>
        <RightsNum>
          <Hold>
            <TopNum>
              10k <label>+</label>{" "}
            </TopNum>
            <Buttom>schools</Buttom>
          </Hold>
          <hr />
          <Hold>
            <TopNum>
              10 Million <label>+</label>{" "}
            </TopNum>
            <Buttom>teachers & students</Buttom>
          </Hold>
          <hr />

          <Hold>
            <TopNum>
              30 <label>+</label>{" "}
            </TopNum>
            <Buttom>countries</Buttom>
          </Hold>
          <hr />
          <Hold>
            <TopNum>
              96% <label>+</label>{" "}
            </TopNum>
            <Buttom>customers</Buttom>
          </Hold>
        </RightsNum>
      </Wrapper>
    </Container>
  );
};

export default Home2;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;
const LeftText = styled.div`
  width: 300px;
  font-size: 20px;
  display: flex;
  font-weight: 300;
  align-items: center;
  hr {
    margin-right: 20px;
    border: none;
    width: 3px;
    height: 100%;
    background-color: #1da1f2;
  }
  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;
const RightsNum = styled.div`
  display: flex;
  flex-wrap: wrap;

  hr {
    margin: 0 20px;
    border: none;
    background-color: lightgray;
    width: 1px;
  }
  @media (max-width: 500px) {
    hr {
      display: none;
    }
    justify-content: center;
  }
`;
const Hold = styled.div`
  /* background-color: red; */
  @media (max-width: 500px) {
    margin: 10px;
    width: 170px;
    border-bottom: 1px solid lightgray;
  }
`;
const TopNum = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  label {
    color: #1da1f2;
  }
`;
const Buttom = styled.div``;
