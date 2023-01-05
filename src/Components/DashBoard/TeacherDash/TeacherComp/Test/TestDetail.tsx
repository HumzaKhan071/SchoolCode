import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { IoHourglassOutline } from "react-icons/io5";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import styled from "styled-components";

const TestDetail = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <DetailText>
            <h4>Test Detail</h4>
            <span>Mid-Term Test - Computer</span>
            <button>Edit Details</button>
          </DetailText>
          <Row1>
            <DetCard>
              <CrdHold>
                <Tit>
                  {" "}
                  <AiTwotoneCalendar color="#90A1C0" size="15px" />{" "}
                  <span>Starts</span>{" "}
                </Tit>
                <Cont>2022 Dec 28, 11:38 AM</Cont>
              </CrdHold>
            </DetCard>
            <DetCard>
              <CrdHold>
                <Tit>
                  {" "}
                  <BiTimeFive color="#90A1C0" size="15px" />{" "}
                  <span>Duration</span>{" "}
                </Tit>
                <Cont>30 min</Cont>
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
                <Cont>2022 Dec 28, 12:38 AM</Cont>
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
                <Cont>3</Cont>
              </CrdHold>
            </DetCard>
          </Row1>
        </Top>
        <Buttom>
          <InstQues>
            <QuestTitle> Mid-Term Questions</QuestTitle>
            <Instruct>
              Answer Three of Five Questions, No 1 Is Compulsry
            </Instruct>
          </InstQues>

          <MainQuestions>
            <QuestionHold>
              <No>1.</No>
              <Question>
                <Quest>What is Social Studies</Quest>
                <Answers>
                  <Ans>
                    <input type="radio" /> <span>The study of Nature</span>
                  </Ans>
                  <Ans>
                    <input type="radio" />{" "}
                    <span>The study of Humans and Mammals</span>
                  </Ans>
                  <Ans>
                    <input type="radio" />{" "}
                    <span>The study of Man and His Environment</span>
                  </Ans>
                  <Ans>
                    <input type="radio" />{" "}
                    <span>The Abbit of reading and Writing</span>
                  </Ans>
                </Answers>
              </Question>
            </QuestionHold>
          </MainQuestions>
          <MainQuestions>
            <QuestionHold>
              <No>2.</No>
              <Question>
                <Quest>Mention Three Types of Marriage</Quest>
                <Answers>
                  <Ans>
                    <input type="radio" /> <span>Modern, Ubarn, and Utral</span>
                  </Ans>
                  <Ans>
                    <input type="radio" />{" "}
                    <span>Physical, Spritual and Medical</span>
                  </Ans>
                  <Ans>
                    <input type="radio" />{" "}
                    <span>Big, Medium and Small Marriage</span>
                  </Ans>
                  <Ans>
                    <input type="radio" />{" "}
                    <span>Christian, Islamic and Triditional</span>
                  </Ans>
                </Answers>
              </Question>
            </QuestionHold>
          </MainQuestions>
          <MainQuestions>
            <QuestionHold>
              <No>3.</No>
              <Question>
                <Quest>Who Is the Head of the Family</Quest>
                <Answers>
                  <Ans>
                    <input type="radio" /> <span>Father</span>
                  </Ans>
                  <Ans>
                    <input type="radio" /> <span>Teacher</span>
                  </Ans>
                  <Ans>
                    <input type="radio" /> <span>Pastor</span>
                  </Ans>
                  <Ans>
                    <input type="radio" /> <span>Mother</span>
                  </Ans>
                </Answers>
              </Question>
            </QuestionHold>
          </MainQuestions>
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
