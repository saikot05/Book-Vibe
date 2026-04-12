import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import BookListedCard from '../UI/BookListedCard';
import { BookOpen } from 'lucide-react';

const ListedReadList = ({ sortingType }) => {
    const { readlist } = useContext(BookContext);

    let filteredReadList = readlist;
    if (sortingType === 'pages') {
        filteredReadList = [...readlist].sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === 'rating') {
        filteredReadList = [...readlist].sort((a, b) => b.rating - a.rating);
    }

    if (readlist.length === 0) {
        return (
            <div className="h-[50vh] bg-neutral border border-neutral-content/10 rounded-2xl flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center">
                    <BookOpen size={28} className="text-amber-500/60" />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-neutral-content/70">No books in your read list</h2>
                    <p className="text-sm text-neutral-content/30 mt-1">Start reading and mark books as read!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredReadList.map((book, ind) => (
                <BookListedCard key={ind} book={book} />
            ))}
        </div>
    );
};

export default ListedReadList;