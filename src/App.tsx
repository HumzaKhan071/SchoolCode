import axios from "axios";
import { useEffect } from "react";
import AllRoutes from "./Components/AllRoutes/AllRoutes";

function App() {
	const load = async () => {
		await axios.get("https://school-code.onrender.com");
	};
	useEffect(() => {
		load();
	}, []);
	return (
		<div>
			<AllRoutes />
		</div>
	);
}

export default App;
