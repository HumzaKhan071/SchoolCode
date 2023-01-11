import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { reset } from "numeral";
import { User } from "../../Global/RecoilState";
import RatingLecture from "./RatingLecture";

const url = "https://school-code.onrender.com";

const LectureScreen = () => {
  const { id } = useParams();
  const [draft, setDraft] = useState("");

  const user = useRecoilValue(User);
  const [lectures, setLectures] = useState([] as any[]);
  const [rate, setRate] = useState(0);
  const [rateLoad, setRateLoad] = useState({} as any);
  const [rateLoad1, setRateLoad1] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = () => {
    setRateLoad1(!rateLoad1);
  };

  const fetchSub = async () => {
    const newURL = `${url}/api/lecture/${id}/view-class-lecture`;
    await axios.get(newURL).then((res) => {
      setLectures(res.data.data.lecture);
    });
  };

  // console.log(lectures);
  // console.log(id);

  useEffect(() => {
    fetchSub();
  }, []);

  return (
    <>
      {rateLoad1 && rateLoad !== "" ? (
        <RatingLecture
          toggle={toggle}
          rep={rateLoad}
          myProps={rateLoad}
          buttonCall="Rate Lecture"
          show={show}
          check={false}
        />
      ) : null}
      <Container>
        <Wrapper>
          <CreateLecture>
            <CreateLectureHold>
              <LectureTitle>View all Lectures for {} classes</LectureTitle>
            </CreateLectureHold>
          </CreateLecture>

          {lectures?.map((props) => (
            <AllLecture key={props._id}>
              <AllLectureHold>
                <TestCard>
                  <Layer1>
                    <LectureTit>{props.lectureTopic}</LectureTit>
                    <LectureReadTime>{props.lectureTime}</LectureReadTime>
                    <LectureObjective>
                      {props.lectureObjective}
                    </LectureObjective>
                    <br />

                    <LectureReadTime>
                      <strong>
                        Students Ratings: {props.lecturePerformance}
                      </strong>
                    </LectureReadTime>
                  </Layer1>

                  <Layer2>
                    {/* <NavLink to={`lecture-screen-detail/${props._id}`}> */}
                    <button
                      onClick={() => {
                        setRateLoad(props);
                        setRateLoad1(true);
                        toggle();
                      }}
                    >
                      Explore/Rate
                    </button>
                    {/* </NavLink> */}
                  </Layer2>
                </TestCard>
              </AllLectureHold>
            </AllLecture>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default LectureScreen;
const Card = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 10px;
  margin: 5px;
`;
const Title = styled.div`
  margin: 5px;
  font-size: 17px;

  span {
    font-weight: bold;
  }
`;
const Coded = styled.div<{ col: string }>`
  margin: 5px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: center;
  color: ${({ col }) => col};
  font-weight: bold;

  span {
    color: black;
  }
`;
const Code = styled.div`
  margin: 5px;

  span {
    font-weight: bold;
  }
`;
const CardHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
`;

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
  padding-top: 60px;
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
  align-items: center;
  flex-direction: column;
`;

const CreateLecture = styled.div`
  width: 90%;
  background-color: #fff;
  margin: 30px 0;
`;
const LectureTitle = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
`;
const CreateLectureHold = styled.div`
  padding: 20px;
`;
const LectureSet = styled.form`
  button {
    height: 40px;
    width: 100%;
    margin-top: 15px;
    font-family: poppins;
    border: 1px solid;
    /* color: #1DA1F2; */
    color: #fff;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 600;
    background-color: #1da1f2;
    cursor: pointer;
    margin-right: 10px;
    transition: all 350ms;

    :hover {
      transform: scale(0.98);
    }

    /* @media (max-width: 500px) {
      height: 40px;
      width: 100px;
      font-size: 12px;
      margin-left: 10px;
      margin-right: 10px;
    } */
  }
`;
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  textarea {
    height: 150px;
    width: 100%;
    font-family: poppins;
    border: 1px solid #1da1f2;
    color: #6d6d6e;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    resize: none;
    padding-left: 10px;
    padding-top: 10px;
    ::placeholder {
      color: #a6c4e4;
    }
  }

  input {
    height: 40px;
    /* width: 300px; */
    width: 100%;
    font-family: poppins;
    border: 1px solid #dddddd;
    color: #6d6d6e;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    padding-left: 10px;
    ::placeholder {
      color: #a6c4e4;
    }

    @media (max-width: 500px) {
      margin-bottom: 10px;
    }
  }
  label {
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 3px;
  }
`;

const AllLecture = styled.div`
  width: 90%;
  background-color: #fff;
  margin: 30px 0;
`;
const AllLectureHold = styled.div`
  padding: 20px;
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
const LectureTit = styled.div`
  font-size: 18px;
  font-weight: 800;
`;
const LectureReadTime = styled.div`
  font-size: 10px;
  margin-bottom: 10px;
`;
const LectureObjective = styled.div``;

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
    font-size: 13px;
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
