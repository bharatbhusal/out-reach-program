import React from "react";
import CampSchedule from "./CampSchedule";
import campScheduleData from "./campScheduleData";

const App = () => {
	return (
		<div className="container">
			<h1>APRIL-2024 OUT-REACH PROGRAMES</h1>
			<CampSchedule campSchedule={campScheduleData} />
		</div>
	);
};

export default App;
