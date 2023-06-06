import { useDispatch } from "react-redux";
import { useState } from "react";

function AirlineForm() {
	const dispatch = useDispatch();

	const [airlineName, setAirlineName] = useState("");

	const submitAction = (event) => {
        event.preventDefault()
        console.log(airlineName);
		dispatch({ type: "ADD", payload: airlineName });
        setAirlineName('')


	};

	return (
		<>
			<form onSubmit={submitAction}>
				<label>Airline Name:</label>
				<input
					value={airlineName}
					type="text"
					placeholder="Enter the airline name here!"
					onChange={(e) =>
						setAirlineName(e.target.value)
					}
				/>
				<button type="submit">Add Airline</button>
			</form>
		</>
	);
}

export default AirlineForm;
