import {createContext} from "react";

const globalContext = createContext({});
export default globalContext;
export const {Provider, Consumer} = globalContext;