import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState, useRecoilValue } from "recoil";
import { Test, User } from "../../../../Global/RecoilState";
import axios from "axios";
import { useParams } from "react-router-dom";

interface TestData {
  subjectTest: string;
  time: string;
  instruction: string;
  testDetails: any[];
}

const url: string = "https://school-code.onrender.com";

const CreateTest = () => {
  const { id } = useParams();
  const [testValue, setTestValue] = useRecoilState(Test);
  const readValue = useRecoilValue(Test);
  const user = useRecoilValue(User);

  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [instruction, setInstruction] = useState("");
  const [gradeScore, setGradeScore] = useState("");

  const schema = yup.object().shape({
    question: yup.string().required("This field has to be filled"),
    answer: yup.string().required("This field has to be filled"),
    a: yup.string().required("This field has to be filled"),
    b: yup.string().required("This field has to be filled"),
    c: yup.string().required("This field has to be filled"),
    d: yup.string().required("This field has to be filled"),
  });

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    const { question, a, b, c, d, answer } = data;

    console.log(data);

    setTestValue([
      ...testValue,
      {
        question,
        answer,
        options: [
          {
            a,
            b,
            c,
            d,
          },
        ],
      },
    ]);
  });

  const publishingTest = async () => {
    await axios
      .post(`${url}/api/test/${user?._id}/${id}/creating-test`, {
        subjectTest: subject,
        time,
        instruction,
        gradeScore,
        testDetails: testValue,
      })
      .then((res) => {
        console.log(res);
      });
    setTestValue([]);
    setGradeScore("");
    setInstruction("");
    setTime("");
    setSubject("");
  };

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
                    required
                    value={subject}
                    onChange={(e: any) => {
                      setSubject(e.target.value);
                    }}
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
                    required
                    value={instruction}
                    onChange={(e: any) => {
                      setInstruction(e.target.value);
                    }}
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
                    Duration
                  </label>
                  <input
                    required
                    value={time}
                    onChange={(e: any) => {
                      setTime(e.target.value);
                    }}
                    placeholder="e.g 12:00"
                    type="text"
                  />
                </InputHold>
                <InputHold>
                  <label
                    style={{
                      color: "#ffb703",
                    }}
                  >
                    Grade Score
                  </label>
                  <input
                    required
                    value={gradeScore}
                    onChange={(e: any) => {
                      setGradeScore(e.target.value);
                    }}
                    placeholder="Grade Score: e.g 12 marks each"
                    type="number"
                  />
                </InputHold>
              </DetailSet>
            </TestDetailHold>
          </TestDetails>

          <form onSubmit={onSubmit}>
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
                    <textarea
                      required
                      {...register("question")}
                      placeholder="Type Your Question Here"
                    ></textarea>
                  </QuestInputHold>
                  <QuestInputHold>
                    <label
                      style={{
                        color: "#e9c46a",
                      }}
                    >
                      Correct Option
                    </label>
                    <input
                      required
                      {...register("answer")}
                      type="text"
                      placeholder="Write Answer here"
                    />
                  </QuestInputHold>
                  <QuestInputHold>
                    <label
                      style={{
                        color: "#2a9d8f",
                      }}
                    >
                      Option 1
                    </label>
                    <input
                      required
                      {...register("a")}
                      type="text"
                      placeholder="Type option here"
                    />
                  </QuestInputHold>
                  <QuestInputHold>
                    <label
                      style={{
                        color: "#f4a261",
                      }}
                    >
                      Option 2
                    </label>
                    <input
                      required
                      {...register("b")}
                      type="text"
                      placeholder="Type option here"
                    />
                  </QuestInputHold>
                  <QuestInputHold>
                    <label
                      style={{
                        color: "#e76f51",
                      }}
                    >
                      Option 3
                    </label>
                    <input
                      required
                      {...register("c")}
                      type="text"
                      placeholder="Type option here"
                    />
                  </QuestInputHold>
                  <QuestInputHold>
                    <label
                      style={{
                        color: "#ffafcc",
                      }}
                    >
                      Option 4
                    </label>
                    <input
                      required
                      {...register("d")}
                      type="text"
                      placeholder="Type option here"
                    />
                  </QuestInputHold>

                  <Button
                    type="submit"
                    onClick={() => {
                      // onSubmit();
                    }}
                    col="#1da1f2"
                    bod="#1da1f2"
                  >
                    Set Another
                  </Button>
                  <Button col="red" bod="red">
                    Cancel
                  </Button>
                </QuestionSet>
              </NewQuestionHold>
            </NewQuestion>
          </form>

          <TypedQuestion>
            <TypedQuestionHold>
              <MainQuestions>
                {testValue?.map((props: any, i: any) => (
                  <QuestionHold key={props._id}>
                    <No>{i + 1}.</No>
                    <Question>
                      <Quest>{props?.question}</Quest>
                      {props?.options?.map((newProps: any, i: any) => (
                        <div key={newProps._id}>
                          <Answers>
                            <Ans>
                              <input type="radio" /> <span>{newProps?.a}</span>
                            </Ans>
                          </Answers>
                          <Answers>
                            <Ans>
                              <input type="radio" /> <span>{newProps?.b}</span>
                            </Ans>
                          </Answers>
                          <Answers>
                            <Ans>
                              <input type="radio" /> <span>{newProps?.c}</span>
                            </Ans>
                          </Answers>
                          <Answers>
                            <Ans>
                              <input type="radio" /> <span>{newProps?.d}</span>
                            </Ans>
                          </Answers>
                        </div>
                      ))}
                    </Question>
                  </QuestionHold>
                ))}
              </MainQuestions>
            </TypedQuestionHold>
          </TypedQuestion>

          <PublishTest>
            <PublishTestHold>
              <Button onClick={publishingTest} col="#1da1f2" bod="#1da1f2">
                Publish Test
              </Button>
              <Button
                onClick={() => {
                  setTestValue([]);
                }}
                col="red"
                bod="red"
              >
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
