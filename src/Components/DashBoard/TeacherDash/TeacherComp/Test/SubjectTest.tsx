import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../../../Global/RecoilState";
import ClipLoader from "react-spinners/ClipLoader";

const SubjectTest = () => {
  const URL: string = "https://school-code.onrender.com";

  interface iTeacher {
    _id: string;
    name: string;
  }
  interface iSubject {
    _id: string;
    className: string;
    subjectToken: string;
    subjectName: string;
    students: [];
    test: [];
    lecture: [];
  }

  const user = useRecoilValue(User);
  const [getSubjects, setGetSubjects] = useState([] as iSubject[]);
  const [teacherInfo, setTeacherInfo] = useState({} as iTeacher);
  const [load, setLoad] = useState(true);

  const getSub = async () => {
    // Getting teacher subjects
    const myURI = `${URL}/api/subject/${user._id}/viewing-subject-teacher`;
    const uuri = `https://school-code.onrender.com/api/subject/63ac5573bed0fbc981b7ae08/viewing-subject-teacher`;

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
            {getSubjects.length >= 1 ? (
              <div>
                {getSubjects?.map((props) => (
                  <SubjectCard key={props._id}>
                    <SubjectName> {props.className} </SubjectName>
                    <SubjectName> {props.subjectName} </SubjectName>
                    <SubjectTeacher> {teacherInfo.name} </SubjectTeacher>
                    <ButtonHold>
                      <button>View / Create Test</button>
                    </ButtonHold>
                  </SubjectCard>
                ))}
              </div>
            ) : (
              <BoxHold1>
                {load ? (
                  <div>
                    <div>
                      <ClipLoader color="#36d7b7" />
                    </div>
                    <div> Fetching data...</div>
                  </div>
                ) : (
                  <>
                    <BoxImag src="/img/emp.gif" />
                    <h3>Add ClassRoom to your institute.</h3>
                    <p>
                      Your institute has no ClassRoom yet. Added classrooms will
                      appear here.
                    </p>
                  </>
                )}
              </BoxHold1>
            )}
          </AllSubjects>
        </TestSubjects>
      </Wrapper>
    </Container>
  );
};

export default SubjectTest;

const BoxImag = styled.img`
  height: 200px;
`;

const BoxHold1 = styled.div`
  min-height: 70vh;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  display: flex;

  justify-content: center;
  max-height: 70vh;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    margin: 0;
  }

  /* align-items: center; */
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
