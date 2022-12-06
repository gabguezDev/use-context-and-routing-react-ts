import { FC, ReactNode } from "react";
import { Context } from "./Context";

export const initialContext = { foo: "bar", boo: "far" };

export type ContextProviderProps = {
	children: ReactNode;
};

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
	return <Context.Provider value={initialContext}>{children}</Context.Provider>;
};
