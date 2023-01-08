import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { User } from "../../../../Global/RecoilState";

interface Iprops {
	props: any;
}
const DetailAttend: React.FC<Iprops> = ({ props }) => {
	const [studDetail, setStudDetail] = useState([] as any);
	const URL: string = "https://school-code.onrender.com";

	const user = useRecoilValue(User);
	console.log("newgh", props);

	const getStudentDetail = async () => {
		const uuri = `${URL}/api/student/${props}/student-detail`;

		await axios.get(uuri).then((res) => {
			setStudDetail(res?.data?.data);
			// console.log("this is ", res);
		});
	};

	useEffect(() => {
		getStudentDetail();
	}, []);

	return (
		<>
			<td>{studDetail.name}</td>
		</>
	);
};

export default DetailAttend;
