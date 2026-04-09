import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({book}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='p-6'>
                <figure className='p-6 bg-gray-100 rounded-2xl'>
                    <img src={book.image} alt={book.bookName} className='rounded-xl h-[250px]'/>
                </figure>
            </div>
            <div className="card-body">
                <div className='flex items-center gap-2'>
                    {
                        book.tags.map((tag,index)=>(
                            <div key={index} className="badge text-green-500 bg-green-100 font-semibold">{tag}</div>
                        ))
                    }
                </div>
                                
                <h2 className="card-title text-2xl">
                    {book.bookName}
                </h2>
                <p className='font-semibold text-lg'>By: {book.author}</p>
                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                    <div className="font-semibold">{book.category}</div>
                    <div className="flex items-center gap-2">{book.rating}<FaRegStar /></div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;