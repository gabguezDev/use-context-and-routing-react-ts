import { useContext } from "react";
import { Context } from "../context";

export const LoginPage = () => {
	const context = useContext(Context);

	return <div>{JSON.stringify(context)}</div>;
};
