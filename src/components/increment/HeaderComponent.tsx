import { useContext } from "react";
import { CountContext } from "./CounterContextProvider";

const HeaderComponent = () => {
    const { state } = useContext(CountContext)
    return (
        <>
            <div>
                Header element count from child : {state.count}
            </div>
        </>
    );
};

export default HeaderComponent;