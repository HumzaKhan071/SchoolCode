import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrFormNext } from "react-icons/gr";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { User } from "../../../Global/RecoilState";
import axios from "axios";

const url: string = "https://school-code.onrender.com";

interface iData {
  teachers: [];
  students: [];
  classes: [];
}

const Dashboard = () => {
  const [schoolData, setSchoolData] = useState({} as iData);
  const user = useRecoilValue(User);

  const getCount = async () => {
    await axios.get(`${url}/api/school/${user._id}`).then((res) => {
      setSchoolData(res.data.data);
    });
  };
  useEffect(() => {
    getCount();
  }, []);
  return (
    <Container>
      <Content>
        <First>
          <span>OverView</span>
          <MainHold>
            <OverCard>
              <CountHold>
                <Cont>{schoolData?.teachers?.length}</Cont>
                <Text>Teachers</Text>
              </CountHold>
              <IconHold bg="#fdf4e6">
                <img src="/img/tea.svg" />
              </IconHold>
            </OverCard>
            <OverCard>
              <CountHold>
                <Cont>{schoolData?.classes?.length}</Cont>
                <Text>Classrooms</Text>
              </CountHold>
              <IconHold bg="#EAF9FF">
                <img src="/img/cl.svg" />
              </IconHold>
            </OverCard>
            <OverCard>
              <CountHold>
                <Cont>{schoolData?.students?.length}</Cont>
                <Text>Students</Text>
              </CountHold>
              <IconHold bg="#EDE8FF">
                <img src="/img/st.svg" />
              </IconHold>
            </OverCard>
          </MainHold>
          <br />
          <span>Reports</span>
          <ReportsHold>
            <StudRep>
              <CircleHold>
                <Circle>
                  <FaMoneyBillAlt />
                </Circle>
                <TitLeHold>
                  <Title>Fee</Title>
                  <span>Reports</span>
                </TitLeHold>
              </CircleHold>
              <GrFormNext />
            </StudRep>
            <TeachRep>
              <CircleHold>
                <Circle style={{ backgroundColor: "#fdf4e6" }}>
                  <BsPersonSquare />
                </Circle>
                <TitLeHold>
                  <Title>Students Attendance</Title>
                  <span>Reports</span>
                </TitLeHold>
              </CircleHold>
              <GrFormNext />
            </TeachRep>
          </ReportsHold>
          <br />

          <span>Fee</span>
          <FeeCard>
            <CircleH>
              <TitLeHold>
                <Title1>#0.00</Title1>
                <span
                  style={{
                    color: "silver",
                    fontSize: "13px",
                  }}
                >
                  Applied Fee
                </span>
              </TitLeHold>
            </CircleH>
            <CircleH>
              <TitLeHold>
                <Title1>#0.00</Title1>
                <span
                  style={{
                    color: "silver",
                    fontSize: "13px",
                  }}
                >
                  Discounts
                </span>
              </TitLeHold>
            </CircleH>
            <CircleH>
              <TitLeHold>
                <Title1>#0.00</Title1>
                <span
                  style={{
                    color: "silver",
                    fontSize: "13px",
                  }}
                >
                  Paid Fee
                </span>
              </TitLeHold>
            </CircleH>
            <CircleH>
              <TitLeHold>
                <Title1>#0.00</Title1>
                <span
                  style={{
                    color: "silver",
                    fontSize: "13px",
                  }}
                >
                  Due Fee
                </span>
              </TitLeHold>
            </CircleH>
          </FeeCard>

          <span>Student Attendance</span>
          <FeeCard>
            <CircleH>
              <TitLeHold>
                <Title1>0/46</Title1>
                <span
                  style={{
                    color: "silver",
                    fontSize: "13px",
                  }}
                >
                  Class Mark
                </span>
              </TitLeHold>
            </CircleH>
            <CircleH>
              <TitLeHold>
                <Title1>-</Title1>
                <span
                  style={{
                    color: "silver",
                    fontSize: "13px",
                  }}
                >
                  Total Present
                </span>
              </TitLeHold>
            </CircleH>
            <CircleH>
              <TitLeHold>
                <Title1>-</Title1>
                <span
                  style={{
                    color: "silver",
                    fontSize: "13px",
                  }}
                >
                  Total Absent
                </span>
              </TitLeHold>
            </CircleH>
            <CircleH>
              <TitLeHold>
                <Title1>-</Title1>
                <span
                  style={{
                    color: "silver",
                    fontSize: "13px",
                  }}
                >
                  Overall Attendance
                </span>
              </TitLeHold>
            </CircleH>
          </FeeCard>
        </First>
        <Second>
          <span>Quick Actions</span>
          <Card>
            <MyDiv>Share information with teachers and students</MyDiv>
            <Button>Create Announcement</Button>
          </Card>
          <AnnounceCard>anouncements list</AnnounceCard>
        </Second>
      </Content>
    </Container>
  );
};

export default Dashboard;

const CircleH = styled.div``;
const Title1 = styled.div`
  font-weight: bold;
  font-size: 20px;

  /* @media screen and (max-width: 760px) {
		font-size: 13px;
	} */
`;

const FeeCard = styled.div`
  /* height: 40px; */
  width: 96%;
  background-color: white;
  /* margin-top: 50px; */
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    font-size: 10px;
    flex-wrap: wrap;
  }
`;

const CircleHold = styled.div`
  display: flex;
  align-items: center;
`;
const Circle = styled.div`
  height: 50px;
  width: 50px;
  background-color: #eaf9ff;
  border-radius: 50%;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const TitLeHold = styled.div``;
const Title = styled.div``;

const StudRep = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
const TeachRep = styled.div`
  width: 45%;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
  /* padding: 10px; */
`;
const ReportsHold = styled.div`
  width: 98%;
  background-color: white;
  /* height: 50px; */
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  @media screen and (max-width: 760px) {
    flex-wrap: wrap;
  }
`;

const MainHold = styled.div`
  display: flex;

  @media screen and (max-width: 1030px) {
    flex-wrap: wrap;
  }
`;
const CountHold = styled.div`
  min-height: 40px;
`;
const OverCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
  background-color: white;
  border-radius: 5px;
  margin-top: 5px;
  position: relative;
  padding: 10px;
  overflow: hidden;
  margin-right: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Cont = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Text = styled.div`
  font-size: 17px;
  font-weight: 300;
`;
const IconHold = styled.div<{ bg: string }>`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  margin-top: 5px;
  position: absolute;
  margin-left: 10px;
  right: 0;
  left: 180px;

  @media screen and (min-width: 310px) and (max-width: 325px) {
    left: 210px;
  }
  @media screen and (min-width: 375px) and (max-width: 400px) {
    left: 260px;
  }
  @media screen and (min-width: 410px) and (max-width: 427px) {
    left: 310px;
  }

  img {
    height: 50px;
    margin-left: 5px;
    margin-top: 5px;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 100%;
  margin-top: 10px;
  /* padding: 25px 50px; */
  background-color: #1da1f2;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 350ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  :hover {
    transform: scale(0.95);
  }
`;

const MyDiv = styled.div`
  font-size: 14px;
`;

const AnnounceCard = styled.div`
  /* margin-right: 30px; */
  height: 50vh;
  width: 250px;
  background-color: white;
  border-radius: 5px;
  margin-top: 5px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
const Card = styled.div`
  /* margin-right: 30px; */
  /* height: 100px; */
  width: 250px;
  background-color: white;
  border-radius: 5px;
  margin-top: 5px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const First = styled.div`
  flex: 1;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }

  span {
    font-weight: 500;
  }
`;
const Second = styled.div`
  span {
    font-weight: 500;
  }
`;

const Content = styled.div`
  /* background-color: red; */
  width: 100%;
  /* margin-left: 20px; */
  display: flex;
  margin-top: 30px;
  width: 90%;
  /* flex-wrap: wrap; */

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    margin-left: 0;
  }
`;

const Container = styled.div`
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
`;
