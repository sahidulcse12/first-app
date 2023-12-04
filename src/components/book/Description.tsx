import bookData from "@/data/bookData.json";
const Description = ({ description }: { description: string }) => {
  console.log(description, "description");
  return (
    <>
      <div>{description}</div>
    </>
  );
};

export default Description;
