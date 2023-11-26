import { ReactNode, createContext, useReducer } from "react";

export const CountContext = createContext({
    state: { count: 0 },
    action: (value: { type: string }) => { }
})


const CountContextProvider = ({ children }: { children: ReactNode }) => {
    const countReducer = (state: { count: number }, action: { type: string }) => {
        switch (action.type) {
            case "INCREMENT":
                return { ...state, count: state.count + 1 };
            case "DECREMENT":
                return { ...state, count: state.count - 1 };
            case "RESET":
                return { ...state, count: 0 };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(countReducer, { count: 0 });
    const contextValue = {
        state,
        action: dispatch,
    };

    return (
        <CountContext.Provider value={contextValue}>
            {children}
        </CountContext.Provider>
    );
};
export default CountContextProvider;