import { useContext } from "react";
import { CountContext } from "./CounterContextProvider";



const CounterIncrement = () => {
    const { state, action } = useContext(CountContext);

    return (
        <>
            <h2 className="m-40 text-center">{state.count}</h2>
            <div className="flex justify-center items-center my-40">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded" onClick={() => action({ type: 'INCREMENT' })}>increment</button>
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded" onClick={() => action({ type: 'DECREMENT' })
                }>decrement</button>
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded" onClick={() => action({ type: 'RESET' })
                }>reset</button>
            </div>
        </>
    );
};

export default CounterIncrement;