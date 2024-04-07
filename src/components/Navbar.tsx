interface CartItems {
	cartItems: string[];
 onClick: () => void;
}

export default function Navbar({ cartItems, onClick }: CartItems) {
	return <div>
  <span>No of Itemes:</span> {cartItems.length}
  <button onClick={onClick}>Clear</button>
  </div>;
}
