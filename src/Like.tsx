import { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

interface LikeProps {
	onClick: () => void;
}
export default function Like({ onClick }: LikeProps) {
	const [liked, setLiked] = useState(false);
	const onClickHandler = () => {
		setLiked(!liked);
		onClick();
	};
	return (
		<div onClick={onClickHandler}>
			{liked ? <FcLike size={30} /> : <FcLikePlaceholder size={30} />}
		</div>
	);
}
