import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {bookId: bookParamsId}= useParams();
    const books = useLoaderData();
    console.log(books);
    const expectedBook = books.find(book => book.bookId == bookParamsId);
    console.log("paramId:",bookParamsId,typeof bookParamsId)
    console.log(expectedBook);

    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=expectedBook

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:card-side bg-base-100 shadow-sm container mx-auto my-10 py-10 px-10">
            <figure className='bg-base-200 rounded-xl flex items-center justify-center p-10'>
                <img
                src={image}
                alt="Album" className='h-[450px] w-auto object-contain rounded-lg' />
            </figure>
            <div className="p-6 space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By : {author}</h2>
                <p className='py-2 border-y'>{category}</p>
                <p>Review: {review}</p>
                <div className='flex items-center gap-2'>
                    <span className='font-bold'>Tag</span>
                    {
                        tags.map((tag,index)=>(
                            <div key={index} className="badge text-green-500 bg-green-100 font-semibold">#{tag}</div>
                        ))
                    }
                </div>
                <div className="border-t space-y-3 pt-3">
                    <div className='grid grid-cols-[180px_1fr]'>
                        <span>Number of pages:</span><span className='font-bold'>{totalPages}</span>
                    </div>
                    <div className='grid grid-cols-[180px_1fr]'>
                        <span >publisher:</span><span className='font-bold'>{publisher}</span>
                    </div>
                    <div className='grid grid-cols-[180px_1fr]'>
                        <span>Publish time:</span><span className='font-bold'>{yearOfPublishing}</span>
                    </div>
                    <div className='grid grid-cols-[180px_1fr]'>
                        <span>Rating:</span><span className='font-bold'>{rating}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className="btn">Read</button>
                        <button className="btn btn-info">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;