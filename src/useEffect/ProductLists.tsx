import React, { useEffect } from "react";

export default function ProductLists({category}:{category:string}) {
	const [products, setProducts] = React.useState<string[]>([]);
	useEffect(() => {
		console.log("fetching the products in", category);
		setProducts(["Apple", "Mango"]);
	},[category]);
	return <div>ProductLists</div>;
}
