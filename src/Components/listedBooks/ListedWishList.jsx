import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookListedCard from '../UI/BookListedCard';
import { Bookmark } from 'lucide-react';

const ListedWishList = ({ sortingType }) => {
    const { wishList } = useContext(BookContext);
    const [sortedList, setSortedList] = useState([]);

    useEffect(() => {
        let sortedData = wishList;
        if (sortingType === 'pages') {
            sortedData = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
        } else if (sortingType === 'rating') {
            sortedData = [...wishList].sort((a, b) => b.rating - a.rating);
        }
        setSortedList(sortedData);
    }, [sortingType, wishList]);

    if (wishList.length === 0) {
        return (
            <div className="h-[50vh] bg-neutral border border-neutral-content/10 rounded-2xl flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center">
                    <Bookmark size={28} className="text-amber-500/60" />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-neutral-content/70">No books in your wishlist</h2>
                    <p className="text-sm text-neutral-content/30 mt-1">Add books you want to read later!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedList.map((book, ind) => (
                <BookListedCard key={ind} book={book} />
            ))}
        </div>
    );
};

export default ListedWishList;