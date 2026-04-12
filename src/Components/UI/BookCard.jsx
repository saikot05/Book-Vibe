import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link
            to={`/bookDetails/${book.bookId}`}
            className="card bg-neutral border border-neutral-content/10 shadow-sm hover:border-amber-500/30 hover:shadow-amber-500/10 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            <div className='p-6 relative z-10'>
                <figure className='p-6 bg-neutral-content/5 rounded-2xl overflow-hidden'>
                    <img
                        src={book.image}
                        alt={book.bookName}
                        className='rounded-xl h-[250px] group-hover:scale-105 transition-transform duration-500 object-contain'
                    />
                </figure>
            </div>
            <div className="card-body relative z-10">
                <div className='flex items-center gap-2 flex-wrap'>
                    {book.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="badge text-amber-500 bg-amber-500/10 border-amber-500/20 font-semibold"
                        >
                            {tag}
                        </div>
                    ))}
                </div>

                <h2 className="card-title text-2xl text-neutral-content group-hover:text-amber-500 transition-colors duration-200">
                    {book.bookName}
                </h2>
                <p className='font-semibold text-lg text-neutral-content/50'>By: {book.author}</p>
                <div className="card-actions justify-between border-t border-dashed border-neutral-content/10 pt-4 text-xl">
                    <div className="font-semibold text-neutral-content/60">{book.category}</div>
                    <div className="flex items-center gap-2 text-amber-500 font-semibold">
                        {book.rating}
                        <FaRegStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;