import { createContext, useReducer } from "react";
import apiReducer from "./reducer";

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const ApiContext = createContext(null);

const ApiProvider = ({ children }) => {

    const [apiState, apiDispatch] = useReducer(apiReducer, initialState)

    return (<ApiContext.Provider value={{ apiState, apiDispatch }}>
        {children}
    </ApiContext.Provider>)
}

export default ApiProvider;