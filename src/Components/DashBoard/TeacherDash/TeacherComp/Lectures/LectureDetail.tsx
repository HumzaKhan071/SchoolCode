import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { User } from "../../../../Global/RecoilState";

const url = "https://school-code.onrender.com";
const LectureDetail = () => {
  const { id } = useParams();
  const user = useRecoilValue(User);
  const [lectures, setLectures] = useState({} as any);

  const getAllLecture = async () => {
    const URL: string = `${url}/api/lecture/${id}/view-single-teacher-lecture`;
    await axios.get(URL).then((res: any) => {
      setLectures(res.data.data);
    });
  };

  useEffect(() => {
    getAllLecture();
  }, []);
  return (
    <Container>
      <Wrapper>
        <DetailedLecture>
          <DetailLectureHold>
            <LectureTopic>{lectures.lectureTopic}</LectureTopic>
            <ReadTime>
              {" "}
              <BiTime color="#2b2d42" size="14px" />{" "}
              <span>{lectures.lectureTime}</span>
            </ReadTime>

            <DetailObjective>{lectures.lectureObjective}</DetailObjective>

            <DetailNotes>{lectures.lectureNote}</DetailNotes>
          </DetailLectureHold>
        </DetailedLecture>
      </Wrapper>
    </Container>
  );
};

export default LectureDetail;

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
`;

const DetailedLecture = styled.div`
  width: 95%;
  background-color: #fff;
  margin-top: 30px;
`;
const DetailLectureHold = styled.div`
  padding: 30px;
`;
const LectureTopic = styled.div`
  font-size: 20px;
  font-weight: 800;
  /* color: #219ebc; */
  color: #1da1f2;
`;
const ReadTime = styled.div`
  font-size: 12px;
  /* color: #fb8500; */
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  span {
    margin-left: 5px;
    color: #ffb703;
    margin-top: 2px;
    font-weight: 600;
  }
`;
const DetailObjective = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  height: 40px;
  width: 100%;
  background-color: #f7f9fc;
  display: flex;
  align-items: center;
`;
const DetailNotes = styled.div``;
