import BookImage from "./BookImage";
import BookInfo from "./BookInfo";
import { IBook } from "./BookList";
import Description from "./Description";

const Book = ({ book }: { book: IBook }) => {
  const { imageUrl, ...info } = book;
  return (
    <div className="max-w-sm bg-white p-5 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <BookImage imageUrl={imageUrl} />
      <BookInfo info={info}>
        <Description description={info.description} />
      </BookInfo>
    </div>
  );
};

export default Book;
