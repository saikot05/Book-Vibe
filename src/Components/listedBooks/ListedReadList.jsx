import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookListedCard from '../UI/BookListedCard';

const ListedReadList = ({sortingType}) => {
    const {readlist} = useContext(BookContext);
    console.log(readlist,"bookContext")

    let filteredReadList = readlist;
    if(sortingType === 'pages'){
        filteredReadList = [...readlist].sort((a,b) => a.totalPages - b.totalPages);
    }else if(sortingType === 'rating'){
        filteredReadList = [...readlist].sort((a,b) => b.rating - a.rating);
    }
    
    if(readlist.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No read list data found</h2>
        </div>
    }
    return <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                filteredReadList.map((book,ind) => <BookListedCard key={ind} book={book}></BookListedCard>)
            }
        </div>
        </div>
};

export default ListedReadList;