import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import RichTextEditor from "../RichTextEditor/RichTextEditor";

const Lecture = () => {
  return (
    <Container>
      <Wrapper>
        <CreateLecture>
          <CreateLectureHold>
            <LectureTitle>Make a New Lecture</LectureTitle>
            <LectureSet>
              <InputHold>
                <label
                  style={{
                    color: "#219ebc",
                  }}
                >
                  Lecture Topic
                </label>
                <input
                  type="text"
                  placeholder="e.g The Amagamation of the Southern Empire"
                />
              </InputHold>
              <InputHold>
                <label
                  style={{
                    color: "#219ebc",
                  }}
                >
                  Learning Objective
                </label>
                <input
                  type="text"
                  placeholder="e.g By the End of this Lesson..."
                />
              </InputHold>
              <InputHold>
                <label
                  style={{
                    color: "#ffb703",
                  }}
                >
                  Reading Time
                </label>
                <input type="time" />
              </InputHold>
              <InputHold>
                <RichTextEditor />
              </InputHold>
            </LectureSet>
          </CreateLectureHold>
        </CreateLecture>

        <AllLecture>
          <AllLectureHold>
            <TestCard>
              <Layer1>
                <LectureTit>The Almalgamation of the Southen Empire</LectureTit>
                <LectureReadTime>12 minutes read</LectureReadTime>
                <LectureObjective>
                  At the End of the Lesson The Students should be able to
                  Understand What Unity Means
                </LectureObjective>
              </Layer1>
              <Layer2>
                <NavLink to="/teacher-dashboard/lecture_detail">
                  <button>Explore</button>
                </NavLink>
              </Layer2>
            </TestCard>
          </AllLectureHold>
        </AllLecture>
      </Wrapper>
    </Container>
  );
};

export default Lecture;

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
const LectureSet = styled.div``;
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
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
