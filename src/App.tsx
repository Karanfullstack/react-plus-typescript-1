import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
	return (
		<div>
			<ExpandableText maxLength={100}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quia
				praesentium ex facere, distinctio ullam reiciendis neque vel est,
				recusandae delectus? Eos, expedita quidem itaque doloribus quo vero iure
				cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
				quia praesentium ex facere, distinctio ullam reiciendis neque vel est,
				recusandae delectus? Eos, expedita quidem itaque doloribus quo vero iure
				cum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
				quia praesentium ex facere, distinctio ullam reiciendis neque vel est,
				recusandae delectus? Eos, expedita quidem itaque doloribus quo vero iure
				cum....
			</ExpandableText>
		</div>
	);
}

export default App;
