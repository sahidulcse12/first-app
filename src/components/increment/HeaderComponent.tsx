import useStore from "./ZustandComponent";

const HeaderComponent = () => {
  const { count } = useStore();
  return (
    <>
      <div>Header element count from child : {count}</div>
    </>
  );
};

export default HeaderComponent;
