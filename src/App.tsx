import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<div className="App">
			{visible && <Alert onClose={()=> setVisible(false)}>Warning</Alert>}
			<Button color="danger" onClick={() => setVisible(true)}>
				{visible ? "Hide" : "Show"}
			</Button>
		</div>
	);
}

export default App;
