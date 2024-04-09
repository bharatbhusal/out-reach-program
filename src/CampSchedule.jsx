import React from "react";

const CampSchedule = ({ campSchedule }) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>S.N</th>
						<th>Camp Place</th>
						<th>Mandal</th>
						<th>Venue</th>
						<th>District</th>
						<th>Sponsor</th>
						<th>Date</th>
						<th>Day</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(campSchedule).map((key, index) => (
						<tr key={key}>
							<td>{index + 1}</td>
							<td>{campSchedule[key]["Camp place"]}</td>
							<td>{campSchedule[key]["Mandal"]}</td>
							<td>{campSchedule[key]["Venue"]}</td>
							<td>{campSchedule[key]["District"]}</td>
							<td>{campSchedule[key]["Sponsor"]}</td>
							<td>{campSchedule[key]["Date"]}</td>
							<td>{campSchedule[key]["Day"]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CampSchedule;
