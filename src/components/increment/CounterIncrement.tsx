import useStore from "./ZustandComponent";

const CounterIncrement = () => {
  const { count, reset, increment, decrement } = useStore();

  return (
    <>
      <h2 className="m-40 text-center">{count}</h2>
      <div className="flex justify-center items-center my-40">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
          onClick={increment}
        >
          increment
        </button>
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
          onClick={decrement}
        >
          decrement
        </button>
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
          onClick={reset}
        >
          reset
        </button>
      </div>
    </>
  );
};

export default CounterIncrement;
