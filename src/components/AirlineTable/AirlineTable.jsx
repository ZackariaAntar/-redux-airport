import { useSelector } from "react-redux";
function AirlineTable() {
	const airlineList = useSelector((store) => store.airlineList);
    console.log(airlineList);

	return (
		<table>
			<thead>
				<tr>
					<th>Airlines</th>
				</tr>
			</thead>
			<tbody>

					{airlineList.map((item, i) => (
                        <tr>
						    <td key = {i}>{item}</td>
				        </tr>
					))}
			</tbody>
		</table>
	);
}

export default AirlineTable;
