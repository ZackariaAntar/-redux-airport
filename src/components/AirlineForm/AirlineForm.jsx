import { useDispatch } from "react-redux";
import { useState } from "react";

function AirlineForm() {
	const dispatch = useDispatch();

	const [airlineName, setAirlineName] = useState("");
	const [planes, setPlanes] = useState('');

	const submitAction = (event) => {
        event.preventDefault()
		dispatch({ type: "ADD", payload: [airlineName, planes]});
        setAirlineName('')
        setPlanes('')


	};

	return (

			<form onSubmit={submitAction} className="airlineForm">
				<label>Airline Name: </label>
				<input
					value={airlineName}
					type="text"
					placeholder="Enter the airline name here!"
					onChange={(e) => setAirlineName(e.target.value)}
				/>
				<label> Number of planes: </label>
				<input
					value={planes}
					type="text"
                    placeholder="enter number of planes here"
					onChange={(e) => setPlanes(e.target.value)}
				/>
				<button type="submit">Add Airline</button>
			</form>

	);
}

export default AirlineForm;
