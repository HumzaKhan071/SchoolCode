import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../../../Global/RecoilState";

const SubjectTest = () => {
  const URL: string = "https://school-code.onrender.com";

  interface iTeacher {
    _id: string;
    name: string;
  }

  const user = useRecoilValue(User);
  const [getSubjects, setGetSubjects] = useState<[]>();
  const [teacherInfo, setTeacherInfo] = useState({} as iTeacher);

  const getSub = async () => {
    const myURI = `${URL}/api/teacher/${user._id}/`;

    await axios.get(myURI).then((res) => {
      console.log("For Subject", res.data.data);
      setGetSubjects(res.data.data.subjectTaken);
      setTeacherInfo(res.data.data);
    });
  };

  useEffect(() => {
    getSub();
  }, []);

  return (
    <Container>
      <Wrapper>
        <TestSubjects>
          <AllSubjects>
            {getSubjects?.map((props) => (
              <SubjectCard key={teacherInfo._id}>
                <SubjectName> {props} </SubjectName>
                <SubjectTeacher> {teacherInfo.name} </SubjectTeacher>
                <ButtonHold>
                  <button>View / Create Test</button>
                </ButtonHold>
              </SubjectCard>
            ))}
          </AllSubjects>
        </TestSubjects>
      </Wrapper>
    </Container>
  );
};

export default SubjectTest;

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
`;

const TestSubjects = styled.div`
  /* width: 95%; */
  background-color: #fff;
  margin-top: 30px;
`;

const AllSubjects = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const SubjectCard = styled.div`
  height: 130px;
  width: 280px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const SubjectName = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
const SubjectTeacher = styled.div`
  /* font-size: 12px; */
  font-weight: lighter;
`;
const ButtonHold = styled.div`
  button {
    height: 40px;
    width: 150px;
    margin-top: 15px;
    font-family: poppins;
    /* border: 1px solid #dddddd; */
    /* color: #6d6d6e; */
    border: none;
    outline: none;
    color: #fff;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    background-color: #1da1f2;
    cursor: pointer;
    margin-right: 10px;
    @media (max-width: 500px) {
      height: 40px;
      width: 100px;
      font-size: 12px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
