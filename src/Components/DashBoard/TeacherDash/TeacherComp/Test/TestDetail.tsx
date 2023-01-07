import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { IoHourglassOutline } from "react-icons/io5";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const URL = "https://school-code.onrender.com";
const TestDetail = () => {
  const { id } = useParams();
  const [test, setTest] = useState({} as any);
  const [testData, setTestData] = useState({} as any);

  const fetchTEst = async () => {
    const url = `${URL}/api/test/${id}/viewing-option`;

    await axios.get(url).then((res) => {
      setTestData(res.data.data);
      console.log(res.data.data);
    });
  };

  const fetchDataII = async () => {
    const newURL = `${URL}/api/test/${id}/viewing-option`;
    await axios(newURL).then((res: any) => {
      setTestData(res?.data?.data);
      console.log(testData);
    });
  };

  useEffect(() => {
    fetchTEst();
    // fetchDataII();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Top>
          <DetailText>
            <h4>Test Detail</h4>
            <span>Mid-Term Test - {testData?.testTitle}</span>
            {/* <button>Edit Details</button> */}
          </DetailText>
          <Row1>
            <DetCard>
              <CrdHold>
                <Tit>
                  {" "}
                  <AiTwotoneCalendar color="#90A1C0" size="15px" />{" "}
                  <span>Starts</span>{" "}
                </Tit>
                <Cont>
                  {moment(testData?.createdAt).format(
                    "dddd, MMMM Do YYYY, h:mm:ss a"
                  )}
                </Cont>
              </CrdHold>
            </DetCard>
            <DetCard>
              <CrdHold>
                <Tit>
                  {" "}
                  <BiTimeFive color="#90A1C0" size="15px" />{" "}
                  <span>Duration</span>{" "}
                </Tit>
                <Cont>{testData?.time}</Cont>
              </CrdHold>
            </DetCard>
          </Row1>
          <Row1>
            <DetCard>
              <CrdHold>
                <Tit>
                  {" "}
                  <IoHourglassOutline color="#90A1C0" size="15px" />{" "}
                  <span>Finish Time</span>{" "}
                </Tit>
                <Cont>
                  {moment(testData?.createdAt).format(
                    "dddd, MMMM Do YYYY, h:mm:ss a"
                  )}
                </Cont>
              </CrdHold>
            </DetCard>
            <DetCard>
              <CrdHold>
                <Tit>
                  {" "}
                  <MdOutlineAlignHorizontalLeft
                    color="#90A1C0"
                    size="15px"
                  />{" "}
                  <span>Total Questions</span>{" "}
                </Tit>
                <Cont>{testData?.mainTest?.length}</Cont>
              </CrdHold>
            </DetCard>
          </Row1>
        </Top>

        <Buttom>
          <InstQues>
            <QuestTitle> Mid-Term {testData?.testTitle} Questions</QuestTitle>
            <Instruct>{testData?.instruction}</Instruct>
          </InstQues>

          {testData?.mainTest?.map((props: any, i: any) => (
            <MainQuestions key={props._id}>
              <QuestionHold>
                <No>{i + 1}.</No>
                <Question>
                  <Quest>{props.question}</Quest>
                  <Answers>
                    <Ans>
                      <input
                        type={"radio"}
                        id="child"
                        name="age"
                        value="child"
                      />
                      <label htmlFor="child">{props.a}</label>
                    </Ans>
                    <Ans>
                      <input
                        type={"radio"}
                        id="adult"
                        name="age"
                        value="adult"
                      />
                      <label htmlFor="adult">{props.b}</label>
                    </Ans>
                    <Ans>
                      <input
                        type={"radio"}
                        id="senior"
                        name="age"
                        value="senior"
                      />
                      <label htmlFor="senior">{props.c}</label>
                    </Ans>
                    <Ans>
                      <input
                        type={"radio"}
                        id="senior"
                        name="age"
                        value="senior"
                      />
                      <label htmlFor="senior">{props.d}</label>
                    </Ans>
                  </Answers>
                </Question>
              </QuestionHold>
            </MainQuestions>
          ))}

          <Ans>
            <input type={"radio"} id="child" name="age" value="child" />
            <label htmlFor="child">17 years or younger</label>
            <input type={"radio"} id="adult" name="age" value="adult" />
            <label htmlFor="adult">18 - 64 years</label>
            <input type={"radio"} id="senior" name="age" value="senior" />
            <label htmlFor="senior">65 years or older</label>

            <button
              onClick={() => {
                console.log("object");
              }}
            >
              show:
            </button>
          </Ans>
        </Buttom>
      </Wrapper>
    </Container>
  );
};

export default TestDetail;

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
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  margin-bottom: 30px;
`;
const Row1 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DetCard = styled.div`
  height: 80px;
  width: 300px;
  margin: 0 15px 12px 0;
  background-color: #fff;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    margin: 5px 0;
  }
`;

const CrdHold = styled.div`
  padding: 0 20px;
  font-size: 13px;
`;
const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  span {
    font-size: 13px;
    margin-bottom: 10px;
  }

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
  }
`;
const Tit = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    margin-left: 5px;
    margin-top: 2px;
  }
`;
const Cont = styled.div``;
const Buttom = styled.div`
  width: 620px;
  margin: 0 15px 12px 0;

  @media (max-width: 600px) {
    width: 90%;
    margin: 5px 0;
  }
`;
const InstQues = styled.div`
  margin-bottom: 20px;
`;
const QuestTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
`;
const Instruct = styled.div`
  font-size: 11px;
  color: gray;
`;
const MainQuestions = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 6px;
`;
const QuestionHold = styled.div`
  display: flex;
  padding: 15px;
  font-size: 14px;
`;
const No = styled.div`
  margin-right: 10px;
`;
const Question = styled.div``;
const Quest = styled.div`
  margin-bottom: 10px;
`;
const Answers = styled.div``;
const Ans = styled.div`
  margin-left: -3px;
  margin-bottom: 10px;
`;
