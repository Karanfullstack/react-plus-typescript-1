import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
	const [cartItems, setCartItems] = useState<string[]>([
		"Apple",
		"Java",
		"Samsung",
	]);
	return (
		<div>
			<Navbar cartItems={cartItems} onClick={() => setCartItems([])} />

			{cartItems.map((item) => (
				<div key={item}>{item}</div>
			))}
		</div>
	);
}

export default App;
