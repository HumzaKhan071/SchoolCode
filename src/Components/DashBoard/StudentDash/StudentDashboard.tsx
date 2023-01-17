import React, { useEffect, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { GoBook } from "react-icons/go";
import { MdOutlineAssignmentLate } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlinePlayLesson } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TimeLine from "./TimeLine";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useRecoilState, useRecoilValue } from "recoil";
import { Session, User } from "../../Global/RecoilState";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./pagination.css";
import { iDataLeture } from "./LectureData";
import SliderComp from "./SliderComp";
import Swal from "sweetalert2";

const url: string = "https://school-code.onrender.com";
const StudentDashboard = () => {
  const [percentage, setPercentage] = React.useState(80);
  const [value, setValue] = React.useState(new Date());
  const user = useRecoilValue(User);
  const [classData, setClassData] = useState<any>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(0);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [session, setSession] = useRecoilState(Session);
  const [clasSubject, setClassSubjects] = React.useState([] as any[]);
  const [notice, setNotice] = useState({} as any);
  const [academic, setAcademic] = useState({} as any);

  console.log("this is users", user);

  const viewingClass = async () => {
    await axios
      .get(`${url}/api/class/${user?.classID}/viewing-class`)
      .then((res) => {
        console.log("this is the class", res);
        setClassData(res.data.data);
      });
  };

  const getSubject = async () => {
    const newURL = `${url}/api/class/${user.classID}/viewing-student-class-subject`;
    await axios.get(newURL).then((res) => {
      setClassSubjects(res!.data!.data!.subject);
    });
  };

  const getNotice = async () => {
    await axios
      .post(
        `${url}/api/announcement/${user._id}/viewing-announcement-student`,
        { code: session?.sessionCode }
      )
      .then((res) => {
        setNotice(res.data.data);
        console.log("notice: ", notice);
      });
  };

  useEffect(() => {
    getNotice();
    getSubject();
  }, []);

  const userPerLecture: number = 1;
  const pageVisited = pageNumber * userPerLecture;

  const displayLecture = clasSubject
    .slice(pageVisited, pageVisited + userPerLecture)
    .map((props, i) => {
      return (
        <>
          <TodayClass>
            <Circle>
              <div style={{ width: "50%", marginTop: "-10px" }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransitionDuration: 5.5,
                    textSize: "16px",
                  })}
                />
              </div>
            </Circle>
          </TodayClass>

          <DetailsClass>
            <Details1>
              <Box1>
                <Boxchild>
                  <SiGoogleclassroom
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginTop: "5px",
                    }}
                  />
                </Boxchild>
                <Boxchild2>
                  class
                  <span>Primary 5</span>
                </Boxchild2>
              </Box1>
              <Box2>
                <Boxchild>
                  <MdOutlineAssignmentLate
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginTop: "5px",
                    }}
                  />
                </Boxchild>
                <Boxchild2>
                  Subject
                  <span>{props.subjectName}</span>
                </Boxchild2>
              </Box2>
            </Details1>
            <Details2>
              <Box1>
                <Boxchild>
                  <BiTimeFive
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginTop: "5px",
                    }}
                  />
                </Boxchild>
                <Boxchild2>
                  Time
                  <span>2 hrs</span>
                </Boxchild2>
              </Box1>
              <Box2>
                <Boxchild>
                  <CgProfile
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginTop: "5px",
                    }}
                  />
                </Boxchild>
                <Boxchild2>
                  Teacher
                  <span>{props.subjectTeacher}</span>
                </Boxchild2>
              </Box2>
            </Details2>
            <Details3>
              <Box1>
                <Boxchild>
                  <GoBook
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginTop: "5px",
                    }}
                  />
                </Boxchild>
                <Boxchild2>
                  Rating
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "auto",
                    }}
                  >
                    {[...Array(5)].map((start, index) => {
                      index += 1;
                      return (
                        <button
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(rating)}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            outline: "none",
                            cursor: "pointer",
                            fontSize: "18px",
                            display: "flex",
                          }}
                          className={index <= (hover || rating) ? "on" : "off"}
                          onClick={async () => {
                            try {
                              setRating(index);
                              await axios
                                .post(
                                  `${url}/api/lecture-rating/${user._id}/${props._id}/creating-lecture-rating`,
                                  { ratingLecture: index }
                                )
                                .then((res) => {
                                  console.log("rating successfully");
                                });
                            } catch (err) {
                              console.error(err, "something wen wrong");
                            }
                          }}
                        >
                          &#9733;
                        </button>
                      );
                    })}
                  </div>
                </Boxchild2>
              </Box1>
              <Box2>
                {/* <ConBottum bg="#8E6AFF">Click To Rate</ConBottum> */}

                {/* <Boxchild>
												<MdOutlinePlayLesson
													style={{
														color: "grey",
														fontSize: "20px",
														marginTop: "5px",
													}}
												/>
											</Boxchild>
											<Boxchild2>
												Lesson Learned
												<span>10/50</span>
											</Boxchild2> */}
              </Box2>
            </Details3>
          </DetailsClass>
        </>
      );
    });

  const pageCount = Math.ceil(iDataLeture.length / userPerLecture);

  const changePage = (event: any) => {
    setPageNumber(event.selected);
  };

  React.useEffect(() => {
    viewingClass();
  }, []);

  return (
    <Container>
      <MyContent>
        <UserName>
          Welome {user?.name}
          <span>Student/</span>
        </UserName>

        <DisPlayBoard>
          <DisPlay>
            <One>
              <div>
                All Courses
                <span>{classData?.subject?.length}</span>
              </div>
            </One>
            <Two>
              <BackTwo>
                <img src="/svg/teacher-icon-01.svg" />
              </BackTwo>
            </Two>
          </DisPlay>
          <DisPlay>
            <One>
              <div>
                All Students
                <span>{classData?.students?.length}</span>
              </div>
            </One>
            <Two>
              <BackTwo>
                <img src="/svg/teacher-icon-02.svg" />
              </BackTwo>
            </Two>
          </DisPlay>
          <DisPlay>
            <One>
              <div>
                Tested Attented
                <span>{classData?.test?.length}</span>
              </div>
            </One>
            <Two>
              <BackTwo>
                <img src="/svg/student-icon-01.svg" />
              </BackTwo>
            </Two>
          </DisPlay>
          <DisPlay>
            <One>
              <div>
                Presents
                <span>{classData?.attendance?.length}</span>
              </div>
            </One>
            <Two>
              <BackTwo>
                <img src="/svg/student-icon-02.svg" />
              </BackTwo>
            </Two>
          </DisPlay>
        </DisPlayBoard>
        <div>
          <SliderComp notice={notice!.notification} />
        </div>

        <MainDisplay>
          <FirstPart>
            <TodadyLesson>
              <ViewToday>
                <p>Recenet Leacture</p>
                <span>View All</span>
              </ViewToday>
              <Holder>
                {displayLecture}

                <ViewAll>
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    pageClassName="page-item-none"
                    breakClassName="page-item-none"
                    marginPagesDisplayed={0}
                    // breakLabel="..."
                    activeClassName={"paginationActive"}
                  />
                </ViewAll>
              </Holder>
            </TodadyLesson>

            <History>
              <Histitle>
                <p>Teacher History</p>
                <span>View All</span>
              </Histitle>
              <TimeLine />
            </History>
          </FirstPart>

          <SecondPart>
            <ShowBox>
              <DateBox>
                <Calendar value={value} />
              </DateBox>

              <UpcomingEvent>
                <TitleEvent>
                  <pre>Upcoming Events</pre>
                  <p>+</p>
                </TitleEvent>

                <EventCon>
                  <DateEvent>Jan 4</DateEvent>
                  <br />
                  <ContentEvent>
                    <Fisrt>08:00 am</Fisrt>
                    <Second>
                      <SeconDiv></SeconDiv>
                      <SeconDiv2>
                        <span>&nbsp; New Year Party</span>
                        <pre>&nbsp; All student should Attennd</pre>
                      </SeconDiv2>
                    </Second>
                    <Third>09:30am - 10:45am</Third>
                  </ContentEvent>
                </EventCon>
              </UpcomingEvent>
            </ShowBox>
          </SecondPart>
        </MainDisplay>
      </MyContent>
    </Container>
  );
};

export default StudentDashboard;

const Mybutton = styled.button`
  span {
  }
`;

const SeconDiv = styled.div`
  height: 50px;
  width: 3px;
  border-radius: 3px;
  background-color: #028ee1;
`;
const SeconDiv2 = styled.div`
  height: 50px;

  font-size: 12px;
  color: grey;
  span {
    font-weight: 600;
    font-size: 14px;
    color: black;
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  pre {
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Fisrt = styled.div`
  width: 65px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 11px;
  font-weight: 700;
`;
const Second = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
`;
const Third = styled.div`
  width: 100px;
  height: 50px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const ContentEvent = styled.div`
  display: flex;
`;

const DateEvent = styled.div`
  padding-left: 20px;
`;

const EventCon = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TitleEvent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;

  pre {
    font-width: 900;
    font-size: 20px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
  }
`;

const Histitle = styled.div`
  padding-left: 20px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 600;
  }
  span {
    margin-top: 20px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const ConBottum = styled.div<{ bg: string }>`
  width: 100px;
  background-color: ${({ bg }) => bg};
  height: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 10px;
  cursor: pointer;
`;

const ViewToday = styled.div`
  padding-left: 40px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 600;
  }
  span {
    margin-top: 20px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
const Holder = styled.div`
  width: 720px;
  height: 170px;

  border-radius: 5px;
  display: flex;

  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
  }
`;

const Boxchild = styled.div`
  width: 40px;
  height: 100%;
`;
const Boxchild2 = styled.div`
  width: 160px;
  height: 100%;
  color: grey;
  display: flex;
  flex-direction: column;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    color: black;
    font-width: 600;
  }
`;

const Box1 = styled.div`
  width: 130px;
  height: 100%;

  display: flex;
`;
const Box2 = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
`;

const Details1 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  justify-content: space-between;
`;
const Details2 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  justify-content: space-between;
`;
const Details3 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  justify-content: space-between;
`;

const Circle = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    height: 180px;
  }
`;

const TodayClass = styled.div`
  width: 190px;
  height: 100%;
  display: flex;

  div {
    margin-top: 15px;
    span {
      margin-left: 20px;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;
const DetailsClass = styled.div`
  width: 350px;
  height: 230px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const ViewAll = styled.div`
  width: 150px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const TodadyLesson = styled.div`
  width: 720px;
  height: 230px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
  }
`;
const History = styled.div`
  width: 720px;
  height: 250px;
  background-color: white;
  border-radius: 5px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

const UpcomingEvent = styled.div`
  width: 310px;
  height: 190px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const DateBox = styled.div`
  width: 310px;
  height: 320px;
  background-color: white;

  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ShowBox = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const FirstPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: auto;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    height: auto;
    width: 100%;
  }

  span {
    font-weight: 500;
  }
`;
const SecondPart = styled.div`
  span {
    font-weight: 500;
  }
`;

const MainDisplay = styled.div`
  display: flex;
  margin-top: 30px;
  width: 97%;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    height: auto;
    margin-left: 0;
    width: 100%;
  }
`;

const BackTwo = styled.div`
  padding: 3px;
  border-radius: 4px;
  background-color: #edf4ff;
  padding-bottom: 1px;
`;

const One = styled.div`
  height: 80px;
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    width: 120px;
    color: grey;
    font-size: 15px;

    span {
      font-size: 20px;
      font-weight: 700;
      color: black;
      margin-top: 5px;
    }
  }
`;
const Two = styled.div`
  height: 80px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DisPlay = styled.div`
  height: 110px;
  width: 330px;
  display: flex;
  margin-right: 30px;
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #ffffff;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

const DisPlayBoard = styled.div`
  height: 110px;

  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1030px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

const UserName = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #2c323f;
  font-weight: 800px;
  font-size: 20px;

  span {
    font-size: 15px;
    font-weight: 500px;
  }
`;

const MyContent = styled.div`
  width: 95%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  /* width: 100%; */
  width: calc(100vw - 230px);
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
  padding-top: 40px;

  background-color: #f7f9fc;
  /* background-color: gold; */
  overflow: hidden;
  position: absolute;
  right: 0px;
  // top: 50px;

  @media screen and (max-width: 1100px) {
    width: 95%;
    height: auto;
  }
  @media screen and (max-width: 1005px) {
    width: 100%;
    height: auto;
  }

  /* background-color: #352b1e; */
`;
