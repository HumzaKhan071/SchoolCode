import React from "react";
import styled from "styled-components";

const CreateTest = () => {
  return (
    <Container>
      <Wrapper>
        <TestBox>
          <TestDetails>
            <TestDetailHold>
              <DetailTitle>Set Up Your Test Environment</DetailTitle>
              <DetailSet>
                <InputHold>
                  <label
                    style={{
                      color: "#219ebc",
                    }}
                  >
                    Test Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Resumption Test, Mid-Term Test..."
                  />
                </InputHold>
                <InputHold>
                  <label
                    style={{
                      color: "#219ebc",
                    }}
                  >
                    Instruction
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Question One is Compolusry"
                  />
                </InputHold>
                <InputHold>
                  <label
                    style={{
                      color: "#ffb703",
                    }}
                  >
                    Start Time
                  </label>
                  <input type="time" placeholder="e.g 12:00" />
                </InputHold>
                <InputHold>
                  <label
                    style={{
                      color: "#fb8500",
                    }}
                  >
                    End Time
                  </label>
                  <input type="time" placeholder="e.g 13:00" />
                </InputHold>
              </DetailSet>
            </TestDetailHold>
          </TestDetails>
          <NewQuestion>
            <NewQuestionHold>
              <QuestionTitle>Type New Question</QuestionTitle>
              <QuestionSet>
                <QuestInputHold>
                  <label
                    style={{
                      color: "#264653",
                    }}
                  >
                    Question
                  </label>
                  <textarea placeholder="Type Your Question Here"></textarea>
                </QuestInputHold>
                <QuestInputHold>
                  <label
                    style={{
                      color: "#e9c46a",
                    }}
                  >
                    Correct Option
                  </label>
                  <input type="text" placeholder="Write Answer here" />
                </QuestInputHold>
                <QuestInputHold>
                  <label
                    style={{
                      color: "#2a9d8f",
                    }}
                  >
                    Option 1
                  </label>
                  <input type="text" placeholder="Type option here" />
                </QuestInputHold>
                <QuestInputHold>
                  <label
                    style={{
                      color: "#f4a261",
                    }}
                  >
                    Option 2
                  </label>
                  <input type="text" placeholder="Type option here" />
                </QuestInputHold>
                <QuestInputHold>
                  <label
                    style={{
                      color: "#e76f51",
                    }}
                  >
                    Option 3
                  </label>
                  <input type="text" placeholder="Type option here" />
                </QuestInputHold>
                <QuestInputHold>
                  <label
                    style={{
                      color: "#ffafcc",
                    }}
                  >
                    Option 4
                  </label>
                  <input type="text" placeholder="Type option here" />
                </QuestInputHold>

                <Button col="#1da1f2" bod="#1da1f2">
                  Set Another
                </Button>
                <Button col="red" bod="red">
                  Cancle
                </Button>
              </QuestionSet>
            </NewQuestionHold>
          </NewQuestion>

          <TypedQuestion>
            <TypedQuestionHold>
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
                        <input type="radio" />{" "}
                        <span>Modern, Ubarn, and Utral</span>
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
            </TypedQuestionHold>
          </TypedQuestion>

          <PublishTest>
            <PublishTestHold>
              <Button col="#1da1f2" bod="#1da1f2">
                Publish Test
              </Button>
              <Button col="red" bod="red">
                Reset
              </Button>
            </PublishTestHold>
          </PublishTest>
        </TestBox>
      </Wrapper>
    </Container>
  );
};

export default CreateTest;

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
  justify-content: center;
`;

const TestBox = styled.div`
  margin: 30px 0;
`;
const TestDetails = styled.div`
  width: 600px;
  background-color: #fff;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 95%;
  }
`;
const DetailTitle = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
`;
const TestDetailHold = styled.div`
  padding: 20px;
`;
const DetailSet = styled.div``;
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

const NewQuestion = styled.div`
  width: 600px;
  background-color: #fff;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    width: 95%;
  }
`;
const NewQuestionHold = styled.div`
  padding: 20px;
`;
const QuestionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const QuestionSet = styled.div``;

const Button = styled.button<{ bod: string; col: string }>`
  height: 40px;
  width: 100%;
  font-family: poppins;
  background-color: transparent;
  color: ${({ col }) => col};
  border-radius: 3px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({ bod }) => bod};
  margin: 10px 0 10px 7px;
  transition: all 350ms;

  :hover {
    transform: scale(0.96);
  }
`;

const QuestInputHold = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  input {
    height: 40px;
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

  textarea {
    height: 100px;
    font-family: poppins;
    border: 1px solid #dddddd;
    color: #6d6d6e;
    border-radius: 3px;
    font-size: 13px;
    font-weight: 600;
    resize: none;
    padding-left: 10px;
    ::placeholder {
      color: #a6c4e4;
    }

    @media (max-width: 500px) {
      margin-bottom: 10px;
    }
  }
`;

const TypedQuestion = styled.div`
  width: 600px;
  background-color: #fff;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    width: 95%;
  }
`;
const TypedQuestionHold = styled.div`
  padding: 20px;
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

const PublishTest = styled.div`
  width: 600px;
  background-color: #fff;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    width: 95%;
  }
`;
const PublishTestHold = styled.div`
  padding: 20px;
`;
