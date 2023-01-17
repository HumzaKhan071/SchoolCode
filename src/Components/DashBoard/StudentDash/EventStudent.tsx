import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { User } from "../../Global/RecoilState";

const url: string = "https://school-code.onrender.com";

const EventStudent = () => {
  const user = useRecoilValue(User);

  const [holderData, setHolderData] = useState([] as any[]);
  const [studentData, setStudentData] = useState({} as any);

  const [academic, setAcademic] = useState({} as any);

  const getStudent = async () => {
    const myURL = `${url}/api/student/${user._id}/student-detail-school`;
    await axios.get(myURL).then((res) => {
      setStudentData(res.data.data);
    });
  };

  const dataURL = `${url}/api/academic/${studentData._id}/viewing-present-academic-session`;

  const dataURL2 = `${url}/api/event/${academic!._id}/viewing-event-school`;

  const getSession = async () => {
    await axios.get(dataURL).then((res) => {
      setAcademic(res.data.data);
    });
  };

  const getEvent = async () => {
    await axios.get(dataURL2).then((res) => {
      setHolderData(res.data.data);
    });
  };

  useEffect(() => {
    getStudent();
    getSession();
    getEvent();
  }, [academic]);

  return (
    <Container>
      <br />

      <CardHolder>
        <Div>Activities/Events For the TERM</Div>
      </CardHolder>

      <Wrap>
        <View>
          {holderData?.map((props: any) => (
            <Card key={props._id}>
              <Top>
                <Icon />
                <Line />
              </Top>
              <Out>
                <Day>
                  {props.date} {props.month} {props.year} - {props.time}
                </Day>
                <Hold>
                  <NewLine />
                  <Title>{props.title}</Title>
                </Hold>
                <Desc>{props.desc}</Desc>
              </Out>
            </Card>
          ))}
        </View>
      </Wrap>
    </Container>
  );
};

export default EventStudent;

const View = styled.div`
  /* background: yellow; */
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  flex-wrap: nowrap;
`;
const Wrap = styled.div`
  width: 90%;
  justify-content: center;
  display: flex;
  border-radius: 5px;
  border: 1px solid silver;
`;

const Desc = styled.div`
  font-weight: 500;
  line-height: 1.5;
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 60px;
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  line-height: 1;
  @media screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 1;
  }
`;

const NewLine = styled.div`
  width: 30px;
  height: 7px;
  background: darkorange;
  margin-right: 10px;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Out = styled.div`
  margin-left: 30px;
`;

const Day = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

const DateCall = styled.div``;

const Line = styled.div`
  width: 170px;
  height: 7px;
  background: darkorange;
  position: absolute;
  bottom: 0;
`;

const Icon = styled(BsFillCalendar2EventFill)`
  font-size: 50px;
  margin-left: 30px;
  margin-top: 30px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
`;

const Div = styled.div`
  margin-bottom: 30px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 40px;
  color: white;
  background: #000269;
  border-radius: 20px;
  text-align: center;
  line-height: 1.2;
`;

const Card = styled.div`
  margin: 10px;
  min-width: 300px;
  min-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: all 350ms;
  background-color: white;
  :hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 600px) {
    min-width: 260px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CardHolder = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Date = styled.div<{ bg: string }>`
  padding: 7px 30px;
  border-radius: 20px;
  background: ${({ bg }) => (bg ? "darkorange" : "white")};
  color: ${({ bg }) => (bg ? "white" : "black")};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 20px 10px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
    background: ${({ bg }) => (bg ? "" : "rgba(255, 140, 0, 0.2)")};
  }
`;

const DateHolder = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  overscroll-behavior-inline: contain;
`;

const Dater = styled.div`
  width: 90%;
  min-height: 150px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`;
