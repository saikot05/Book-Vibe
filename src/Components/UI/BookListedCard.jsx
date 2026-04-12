import React from 'react';
import { MapPin, BookOpen, User } from 'lucide-react';

const BookListedCard = ({ book, onViewDetails }) => {
    const {
        bookName,
        author,
        image,
        tags = [],
        yearOfPublishing,
        publisher,
        totalPages,
        category,
        rating,
    } = book;

    return (
        <div className="flex flex-col sm:flex-row gap-5 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">

            {/* Image — top center on mobile, left center on desktop */}
            <div className="flex items-center justify-center">
                <div className="w-[140px] h-[180px] sm:w-[120px] sm:h-[160px] rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center p-2 shrink-0">
                    <img
                        src={image}
                        alt={bookName}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 min-w-0">

                <div>
                    <h2 className="text-xl font-bold text-gray-900 truncate">{bookName}</h2>
                    <p className="text-sm text-gray-500 mt-1">By : {author}</p>
                </div>

                <hr className="border-dashed border-gray-200 my-3" />

                {/* Tags + Year */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-semibold text-gray-700">Tag</span>
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-gray-100 text-green-600 font-medium px-2 py-0.5 rounded-full text-xs"
                        >
                            #{tag}
                        </span>
                    ))}
                    <span className="sm:ml-auto flex items-center gap-1 text-gray-500 text-xs whitespace-nowrap">
                        <MapPin size={13} className="text-gray-400" />
                        Year of Publishing: {yearOfPublishing ?? 'N/A'}
                    </span>
                </div>

                {/* Publisher + Pages */}
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                        <User size={14} className="text-gray-400" />
                        Publisher: {publisher}
                    </span>
                    <span className="flex items-center gap-1">
                        <BookOpen size={14} className="text-gray-400" />
                        Page {totalPages}
                    </span>
                </div>

                <hr className="border-dashed border-gray-200 my-3" />

                {/* Category + Rating + Button */}
                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-gray-700">Category:</span>
                        <span className="text-sm text-gray-600">{category}</span>
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                        ★ {rating}
                    </span>
                    <button
                        onClick={() => onViewDetails(book)}
                        className="sm:ml-auto w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 active:scale-95 transition-all duration-200"
                    >
                        View Details
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BookListedCard;