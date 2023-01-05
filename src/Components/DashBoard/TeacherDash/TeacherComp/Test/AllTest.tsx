import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

const URL = "https://school-code.onrender.com";
const AllTest = () => {
  const { id } = useParams();
  const [test, setTest] = useState({} as any);
  const [testData, setTestData] = useState([] as any[]);

  const fetchTEst = async () => {
    const url = `${URL}/api/test/${id}/view-class-test`;

    await axios.get(url).then((res) => {
      setTestData(res.data.data.test);
      setTest(res.data.data);
    });
  };

  useEffect(() => {
    fetchTEst();
  }, []);

  return (
    <Container>
      <Wrapper>
        <WrapperHold>
          <Top>
            <TestNam>All Test for {test?.subjectName} </TestNam>
            <TestButton to="/teacher-dashboard/test/new_test">
              <button>Create Test</button>
            </TestButton>
          </Top>

          <ViewTest>
            {testData?.map((props, i) => (
              <TestCard>
                <Layer1>
                  <TestTitle>Mid-Term Test</TestTitle>
                  <TestSubject>{props.subjectTest}</TestSubject>
                  <TestQuestions>
                    {props.testDetails.length} Questions Set
                  </TestQuestions>
                  <TimeCreated>{moment(props.createdAt).fromNow()}</TimeCreated>
                </Layer1>
                <Layer2>
                  <NavLink to="/teacher-dashboard/test/alltest/preview_test">
                    <button>View Test</button>
                  </NavLink>
                </Layer2>
              </TestCard>
            ))}
          </ViewTest>
        </WrapperHold>
      </Wrapper>
    </Container>
  );
};

export default AllTest;

const Container = styled.div`
  /* width: 100%; */
  width: calc(100vw - 230px);
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  background-color: #f7f9fc;
  /* background-color: gold; */
  overflow: hidden;
  position: absolute;
  right: 0px;
  // top: 50px;

  @media screen and (max-width: 1100px) {
    width: 95%;
  }
  @media screen and (max-width: 1005px) {
    width: 100%;
  }

  /* background-color: #352b1e; */
`;

const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
`;

const WrapperHold = styled.div`
  width: 95%;
  background-color: #fff;
  margin-top: 30px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;
const TestNam = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
const TestButton = styled(NavLink)`
  text-decoration: none;
  button {
    height: 35px;
    width: 120px;
    font-family: poppins;
    background-color: #1da1f2;
    color: #fff;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    margin-right: 10px;
    border: none;

    transition: all 350ms;

    :hover {
      transform: scale(0.96);
    }
  }
`;
const ViewTest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TestCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Layer1 = styled.div`
  padding: 10px;
`;
const TestTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
`;
const TestSubject = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;
const TestQuestions = styled.div``;
const TimeCreated = styled.div`
  font-size: 10px;
  color: gray;
`;
const Layer2 = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  button {
    height: 30px;
    width: 120px;
    font-family: poppins;
    background-color: transparent;
    border: 1px solid #1da1f2;
    color: #000;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    margin-right: 10px;
    /* border: none; */
    cursor: pointer;
    transition: all 350ms;

    :hover {
      transform: scale(0.96);
    }
  }
`;
