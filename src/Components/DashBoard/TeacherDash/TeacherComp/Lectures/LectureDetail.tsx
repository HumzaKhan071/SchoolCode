import React from "react";
import { BiTime } from "react-icons/bi";
import styled from "styled-components";

const LectureDetail = () => {
  return (
    <Container>
      <Wrapper>
        <DetailedLecture>
          <DetailLectureHold>
            <LectureTopic>The Almalgamation of the Southen Empire</LectureTopic>
            <ReadTime>
              {" "}
              <BiTime color="#2b2d42" size="14px" />{" "}
              <span>12 Minutes Read</span>
            </ReadTime>

            <DetailObjective>
              At the End of the Lesson The Students should be able to Understand
              What Unity Means
            </DetailObjective>

            <DetailNotes>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis!
            </DetailNotes>
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
