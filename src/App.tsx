import { useState } from "react";
import ProductLists from "./useEffect/ProductLists";

function App() {
	const [category, setCategory] = useState("");

	return (
		<div>
			<div>
				<select
					className="form-select"
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value="apple">Apple</option>
					<option value="mango">Mango</option>
				</select>
			</div>
			<ProductLists category={category} />
		</div>
	);
}

export default App;
