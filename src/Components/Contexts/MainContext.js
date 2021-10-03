import { createContext } from "react";
import React from "react";

export const MainContext = createContext();

const MainProvider = (props) => {
    
    return (
        <MainContext.Provider >
            {props.children}
        </MainContext.Provider>
    )
}
export default MainProvider;