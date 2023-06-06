import { useSelector } from "react-redux";
function AirlineTable() {
	const airlineList = useSelector((store) => store.airlineList);
    console.log(airlineList);

	return (
		<table className="airlineTable">
			<thead>
				<tr>
					<th>Airlines</th>
				</tr>
			</thead>
			<tbody>
				{airlineList.map((item, i) => (
					<tr key={i}>
						<td>{item[0]}</td>
                        <td>{item[1]}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default AirlineTable;
