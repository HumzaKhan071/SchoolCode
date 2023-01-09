import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { User } from "../../../../Global/RecoilState";

interface Iprops {
	newProps: any;
}

const DetailInput: React.FC<Iprops> = ({ newProps }) => {
	let todayDate = moment().add().format("dddd, Do MMMM YYYY");
	let days: any[] = [];
	let daysRequired = 90;

	for (let i = 0; i <= daysRequired; i++) {
		days.push(moment().add(i, "days").format("dddd, Do MMMM YYYY"));
	}
	const [presentData, setPresentData] = React.useState([]);

	const URL: string = "https://school-code.onrender.com";

	const user = useRecoilValue(User);

	const CreatePresent = async (id: any) => {
		console.log("id ooooo", id);
		const uuri = `${URL}/api/attendance/${user?._id}/${id}/present`;

		await axios.post(uuri).then((res) => {
			console.log("student present", res);
		});
	};

	const ViewPresent = async () => {
		// console.log("id ooooo", id);
		const uuri = `${URL}/api/attendance/${user?._id}/teacher-viewing-student-attendance`;

		await axios.get(uuri).then((res) => {
			console.log("now ", res);
			setPresentData(res?.data?.data?.attendance);
			console.log("this is present", presentData);
		});
	};

	const [studDetail, setStudDetail] = useState([] as any);

	// console.log("newgh", days);

	const getStudentDetail = async () => {
		const uuri = `${URL}/api/student/${newProps}/student-detail`;

		await axios.get(uuri).then((res) => {
			setStudDetail(res?.data?.data);
			// console.log("this is ", res);
		});
	};

	useEffect(() => {
		getStudentDetail();
	}, []);

	useEffect(() => {
		ViewPresent();
	}, []);
	return (
		<>
			{days.map((props: any) => (
				<>
					{presentData?.some(
						(el: any) =>
							el?.present == true &&
							el?.studentName === studDetail?.name &&
							el?.dateTime === props,
					) ? (
						<>
							<td>
								<input
									checked
									onClick={() => {
										CreatePresent(newProps);
									}}
									// disabled={todayDate !== props}
									type='radio'
								/>
							</td>
						</>
					) : (
						<>
							<td>
								<input
									onClick={() => {
										CreatePresent(newProps);
									}}
									disabled={todayDate !== props}
									type='radio'
								/>
							</td>
						</>
					)}
					{/* {presentData?.map((preProps: any) => (
						<>
							{preProps?.present &&
							preProps?.studentName === studDetail?.name &&
							preProps?.dateTime?.split(" ", 4).join(" ") ===
								props?.split(" ", 4).join(" ") ? (
								<td>
									<input
										checked
										onClick={() => {
											CreatePresent(props);
										}}
										disabled={todayDate !== props}
										type='radio'
									/>
								</td>
							) : (
								<td>
									<input
										onClick={() => {
											CreatePresent(props);
										}}
										disabled={todayDate !== props}
										type='radio'
									/>
								</td>
							)}

							<td>
								<input
									onClick={() => {
										CreatePresent(props);
									}}
									disabled={todayDate !== props}
									type='radio'
								/>
							</td>
						</>
					))} */}
				</>
			))}
		</>
	);
};

export default DetailInput;
