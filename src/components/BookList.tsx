import bookData from '@/data/bookData.json';
import Book from './Book';
import BookInfo from './BookInfo';


export interface IBook {
    author: string,
    description: string,
    title: string,
    imageUrl: string,
    price: number,
    genre: string,
    numberOfPages: number,
    publicationDate: string,
}


const BookList = () => {
    const data: IBook[] = bookData;
    return (
        <div className='py-20 gap-y-10 place-items-center grid grid-cols-3'>
            {
                data.map((book, index) => (
                    <Book book={book} key={index} />
                ))
            }
        </div>
    );
};

export default BookList;