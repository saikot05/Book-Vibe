import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookListedCard from '../UI/BookListedCard';

const ListedWishList = ({sortingType}) => {
    const {wishList} = useContext(BookContext);
    console.log(wishList,"bookContext");
    const [sortedList, setSortedList] = useState([]);
    
        useEffect(() => {
            let sortedData = wishList;
            if(sortingType === 'pages'){
                sortedData = [...wishList].sort((a,b) => a.totalPages - b.totalPages);
                console.log(sortedData);
            }else if(sortingType === 'rating'){
                sortedData = [...wishList].sort((a,b) => b.rating - a.rating);
                console.log(sortedData);
            }
            setSortedList(sortedData);
        },[sortingType,wishList])
    if(wishList.length === 0){
        return <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No wish list data found</h2>
        </div>
    }
    return <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                sortedList.map((book,ind) => <BookListedCard key={ind} book={book}></BookListedCard>)
            }
        </div>
    </div>
};

export default ListedWishList;