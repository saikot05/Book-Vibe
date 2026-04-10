import React, {  useEffect, useState } from 'react';
import BookCard from '../UI/BookCard';


const AllBooks = () => {
    const [books,setBooks] = useState([]);
    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    return (
        <div className='my-12 container mx-auto'>
            <h2 className='font-bold text-3xl text-center mb-6'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                books.map((book,index) => {
                    return (
                        <BookCard key={index} book={book}></BookCard>
                    )
                })
            }
            </div>
        </div>
    );
};

export default AllBooks;