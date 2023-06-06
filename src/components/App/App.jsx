import './App.css'
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineTable from '../AirlineTable/AirlineTable';


function App() {

  return (
		<div>
			<body>
				<header className="header">
					<h1>Redux Airport</h1>
				</header>
				<AirlineForm className='form'/>
				<AirlineTable  className='table'/>
			</body>
		</div>
  );
}

export default App;
