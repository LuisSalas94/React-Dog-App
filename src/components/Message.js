import React from "react";

const Message = ({ message }) => {
	return (
		<div
			class="alert alert-primary text-center"
			style={{ width: "100%", fontSize: "1.2rem" }}
			role="alert"
		>
			{message}
		</div>
	);
};

export default Message;
