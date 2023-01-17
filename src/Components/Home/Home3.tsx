import React from "react";
import styled from "styled-components";
import pic1 from "../Img/o.png";
import pic2 from "../Img/oo.png";
import pic3 from "../Img/ooo.png";
import pic4 from "../Img/oooo.png";

const Home3 = () => {
	return (
		<Container>
			<Wrapper>
				<CardHold>
					<Card bg='#FFFAEB'>
						<InnerCard>
							<Text>
								<Title>Schools</Title>
								<Content>
									Automate operations, boost efficiency and reduce overheads
									with the most powerful school management platform by your
									side.
								</Content>
							</Text>
							<ImageDiv>
								<img src={pic1} alt='' />
							</ImageDiv>
						</InnerCard>
					</Card>
					<Card bg='#EEFDFF'>
						<InnerCard>
							<Text>
								<Title>Teachers</Title>
								<Content>
									Create an enriching learning environment through world- class
									learning content along with digital tools that simplify every
									classroom operation.
								</Content>
							</Text>
							<ImageDiv>
								<img src={pic2} alt='' />
							</ImageDiv>
						</InnerCard>
					</Card>
				</CardHold>
				<CardHold>
					<Card bg='#F5EEFE'>
						<InnerCard>
							<Text>
								<Title>Students</Title>
								<Content>
									Never miss a lesson with continuous learning at your
									fingertips through classroom recordings, unlimited practice
									questions and much more.
								</Content>
							</Text>
							<ImageDiv>
								<img src={pic3} alt='' />
							</ImageDiv>
						</InnerCard>
					</Card>
					<Card bg='#FFF3F7'>
						<InnerCard>
							<Text>
								<Title>Parents</Title>
								<Content>
									Monitor & track your children’s progress with complete
									transparency and stay on top of all the school updates with
									ease.
								</Content>
							</Text>
							<ImageDiv>
								<img src={pic4} alt='' />
							</ImageDiv>
						</InnerCard>
					</Card>
				</CardHold>
			</Wrapper>
		</Container>
	);
};

export default Home3;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;
`;
const Wrapper = styled.div`
	width: 85%;
`;
const CardHold = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 800px) {
		justify-content: center;
	}
`;
const Card = styled.div<{ bg: string }>`
	width: 550px;
	height: 315px;
	background-color: ${({ bg }) => bg};
	display: flex;
	justify-content: center;
	margin: 10px 0;

	@media (max-width: 560px) {
		width: 100%;
		height: 200px;
	}
`;

const InnerCard = styled.div`
	width: 90%;
	margin: 20px 20px 0 20px;
	/* background-color: aliceblue; */
	display: flex;
	justify-content: space-between;
`;
const Text = styled.div`
	width: 230px;
	@media (max-width: 560px) {
		width: 100%;
	}
`;
const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 20px;
`;
const Content = styled.div`
	font-size: 14px;
`;
const ImageDiv = styled.div`
	/* background-color: red; */
	width: 200px;
	overflow: hidden;
	img {
		width: 100%;
	}
	@media (max-width: 560px) {
		display: none;
	}
`;
