import React from "react";
import CampSchedule from "./CampSchedule";
import campScheduleData from "./campScheduleData";

const App = () => {
	return (
		<div className="container">
			<CampSchedule campSchedule={campScheduleData} />
		</div>
	);
};

export default App;
