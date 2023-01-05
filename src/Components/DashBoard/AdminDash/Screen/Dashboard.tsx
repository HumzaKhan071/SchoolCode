import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrFormNext } from "react-icons/gr";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import { Session, User } from "../../../Global/RecoilState";
import axios from "axios";
import CreateClassRoom from "./Homeforms/CreateClassRoom";
import MyForm from "./Homeforms/MyForm";
import { Navigate, useNavigate } from "react-router";
import Notice from "./Notice";
import NewNotice from "./NewNotice";
import SliderComp from "./Homeforms/SliderComp";

const url: string = "https://school-code.onrender.com";

interface iData {
  teachers: [];
  students: [];
  classes: [];
}
interface iNotice {
  date?: string;
  title?: string;
  detail?: string;
  dateTime?: string;
  _id?: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const session = useRecoilValue(Session);
  const [schoolData, setSchoolData] = useState({} as iData);
  const [newNotice, setNewNotice] = useState({} as iNotice);
  const [newNotices, setNewNotices] = useState([] as iNotice[]);
  const user = useRecoilValue(User);

  const getCount = async () => {
    await axios.get(`${url}/api/school/${user._id}`).then((res) => {
      setSchoolData(res.data.data);
    });
  };

  const [announcement, setAnnouncement] = useState(false);
  const [classRoom, setClassRoom] = useState(false);
  const [event, setEvent] = useState(false);
  const [subject, setSubject] = useState(false);
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");
  const [name5, setName5] = useState("");

  const toggleAnnouncement = () => {
    setAnnouncement(!announcement);
  };

  const toggleClassRoom = () => {
    setClassRoom(!classRoom);
  };

  const toggleEvent = () => {
    setEvent(!event);
  };

  const toggleSubject = () => {
    setSubject(!subject);
  };

  const createClassRoom = async () => {
    setShow(true);
    const newUrl = `${url}/api/class/${user._id}/create-class`;
    console.log(name);
    console.log(name1);
    await axios
      .post(newUrl, {
        className: name.toUpperCase(),
        termFee: parseInt(name1),
      })
      .then((res) => {
        setShow(false);
        toggleClassRoom();
      });
  };

  const createSubject = async () => {
    setShow(true);
    const newUrl = `${url}/api/subject/${user._id}/create-class-subject`;
    await axios
      .post(newUrl, {
        subjectName: name,
        classToken: name1,
        subjectTeacher: name2,
      })
      .then((res) => {
        setShow(false);
        navigate("/");
      });
  };

  const createAnnouncement = async () => {
    setShow(true);
    const newUrl = `${url}/api/announcement/${user._id}/create-announcement`;

    await axios
      .post(newUrl, {
        title: name,
        code: session?.sessionCode,
        detail: name2,
      })
      .then((res) => {
        setShow(false);
        setAnnouncement(!announcement);
      });
  };

  const createEvent = async () => {
    console.log("show");
    setShow(true);
    const locl = "http://localhost:2244";
    const newUrl = `${locl}/api/event/${user._id}/create-event`;
    await axios
      .post(newUrl, {
        title: name,
        desc: name1,
        month: name2,
        time: name3,
        year: name4,
        fixedData: name5,
        code: session?.sessionCode,
      })
      .then((res) => {
        setShow(false);
        navigate("/");
      });
  };

  const getNotice = async () => {
    const uri = `${url}/api/announcement/${user._id}/viewing-announcement-school-one`;
    await axios.post(uri, { code: session?.sessionCode }).then((res: any) => {
      setNewNotice(res.data.data.notification[0]);
    });
  };

  const getNotices = async () => {
    const uri = `${url}/api/announcement/${user._id}/viewing-announcement-school`;
    await axios.post(uri, { code: session?.sessionCode }).then((res: any) => {
      setNewNotices(res.data.data.notification);
    });
  };

  useEffect(() => {
    getCount();
    getNotice();
    getNotices();
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
          <SliderComp notice={newNotices} />
          <br />
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
            <Button bg="black" col="black" onClick={toggleAnnouncement}>
              Create Announcement
            </Button>
            {announcement ? (
              <MyForm
                title1="Enter The Announcement to be made"
                holder="Enter Annonucement"
                holder2="Enter Annonucement Details"
                toggle={toggleAnnouncement}
                title="Make Annonucement"
                title3="Enter Annonucement details"
                subTitle=" By creating a class room, this new class will be added to your list
                of class rooms."
                mainAction={createAnnouncement}
                show={show}
                setName={setName}
                setName2={setName2}
                setName1={setName1}
                setName3={setName3}
                setName4={setName4}
                setName5={setName5}
                one={false}
                two={true}
                three={false}
                four={false}
                five={false}
                name={name}
                name1={name1}
                name2={name2}
                name3={name3}
                name4={name4}
                name5={name5}
                check={true}
                buttonCall="Create Announcement"
              />
            ) : null}

            <Button bg="#ED931A" col="black" onClick={toggleEvent}>
              Create Event
            </Button>

            {event ? (
              <MyForm
                holder="Enter Event title:EG Football Match"
                holder1="A time to wine and dine with the Football pitch"
                holder2="Enter Event title:EG Inner house Sport"
                holder3="Which Month:eg. Feburary"
                holder4="Give a time: eg. 10:00AM "
                holder5="what day: WEDNESDAY 12TH"
                mainAction={createEvent}
                toggle={toggleEvent}
                title="create new Event"
                title1="Title the Event"
                title2="Enter event description"
                title3="Enter Month"
                title4="At what Time"
                title5="I guess this year, right?"
                title6="Give it a fixed date"
                subTitle=" By creating a class room, this new class will be added to your list
                of class rooms."
                show={show}
                setName={setName}
                setName1={setName1}
                setName2={setName2}
                setName3={setName3}
                setName4={setName4}
                setName5={setName5}
                one={true}
                two={true}
                three={true}
                four={true}
                five={true}
                name={name}
                name1={name1}
                name2={name2}
                name3={name3}
                name4={name4}
                name5={name5}
                check={true}
                buttonCall="Create Event"
              />
            ) : null}

            <Button bg="#0FBBFE" col="" onClick={toggleClassRoom}>
              Create ClassRoom
            </Button>
            {classRoom ? (
              <MyForm
                title1="Name the Class"
                title2="class school Fee"
                holder="Enter the class Name: eg SS3A"
                holder1="Enter class School Fee"
                toggle={toggleClassRoom}
                title="Create ClassRoom"
                subTitle=" By creating a class room, this new class will be added to your list
                of class rooms."
                mainAction={createClassRoom}
                show={show}
                setName={setName}
                setName1={setName1}
                setName2={setName2}
                setName3={setName3}
                setName4={setName4}
                setName5={setName5}
                one={true}
                two={false}
                three={false}
                four={false}
                five={false}
                check={true}
                name={name}
                name1={name1}
                name2={name2}
                name3={name3}
                name4={name4}
                name5={name5}
                buttonCall="Create Class Room"
              />
            ) : null}

            <Button bg="#8E6AFF" col="" onClick={toggleSubject}>
              Create Subject
            </Button>
            {subject ? (
              <MyForm
                holder="Enter the class Name: eg SS3A"
                holder1="session code: 8b309d"
                holder2="Teacher to take this subject"
                toggle={toggleSubject}
                title="Create Subject"
                title1="Subject Name"
                title2="Class Code"
                title3="subject Teacher"
                subTitle=" By creating a class room, this new class will be added to your list
                of class rooms."
                mainAction={createSubject}
                show={show}
                setName={setName}
                setName1={setName1}
                setName2={setName2}
                setName3={setName3}
                setName4={setName4}
                setName5={setName5}
                one={true}
                two={true}
                three={false}
                four={false}
                five={false}
                name={name}
                name1={name1}
                name2={name2}
                name3={name3}
                name4={name4}
                name5={name5}
                check={true}
                buttonCall="Create Subject"
              />
            ) : null}
          </Card>
          <AnnounceCard>
            <div>Top Recent Notice</div>

            <NewNotice />
          </AnnounceCard>
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

const Button = styled.button<{
  bg: string;
  col: string;
}>`
  background-color: ${({ bg }) => bg};
  color: ${({ col }) => col};
  height: 40px;
  width: 100%;
  margin-top: 10px;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 350ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 13px;

  :hover {
    transform: scale(0.95);
  }
`;

const MyDiv = styled.div`
  font-size: 14px;
`;

const AnnounceCard = styled.div`
  /* margin-right: 30px; */
  // height: 50vh;
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
  margin-top: 80px;
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
