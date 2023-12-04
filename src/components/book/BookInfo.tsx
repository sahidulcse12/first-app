import { ReactNode, useState } from "react";
import { IBook } from "./BookList";

const BookInfo = ({
  children,
  info,
}: {
  children: ReactNode;
  info: Partial<IBook>;
}) => {
  const [button, setButton] = useState<boolean>(false);
  const { genre, numberOfPages, price, publicationDate, title } = info;
  const handleButtonClick = () => {
    setButton(!button);
  };

  return (
    <>
      <div className="ml-3 mb-3 h-60 overflow-y-auto">
        <h2 className="text-xl mt-2">Title: {title}</h2>
        <h3>Genre: {genre}</h3>
        <h3>Publication Date: {publicationDate}</h3>
        <h3>Number of Pages: {numberOfPages}</h3>
        <h3>Price: ${price}</h3>
        <button
          onClick={handleButtonClick}
          className="
              bg-blue-500
              hover:bg-blue-700
              text-white font-bold 
                py-2 px-4 rounded-full"
        >
          {button ? "Hide" : "Show"}
        </button>
        {button ? children : null}
      </div>
    </>
  );
};

export default BookInfo;
