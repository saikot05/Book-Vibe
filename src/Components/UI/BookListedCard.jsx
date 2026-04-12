import React from 'react';
import { MapPin, BookOpen, User } from 'lucide-react';

const BookListedCard = ({ book, onViewDetails }) => {
    const {
        bookName, author, image, tags = [],
        yearOfPublishing, publisher, totalPages,
        category, rating,
    } = book;

    return (
        <div
            style={{ fontFamily: "'DM Sans', sans-serif", background: '#141414', border: '0.5px solid rgba(255,255,255,0.08)' }}
            className="relative flex flex-col sm:flex-row gap-5 rounded-2xl p-5 transition-all duration-300 overflow-hidden"
            onMouseEnter={e => {
                e.currentTarget.style.background = '#181818';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = '#141414';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
        >
            <div className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at 5% 50%, rgba(180,130,60,0.05) 0%, transparent 60%)' }}
            />

            <div className="flex items-center justify-center">
                <div className="w-[120px] h-[165px] rounded-xl overflow-hidden flex items-center justify-center p-2 shrink-0"
                    style={{ background: '#1e1e1e', border: '0.5px solid rgba(255,255,255,0.06)' }}>
                    <img src={image} alt={bookName} className="w-full h-full object-contain" />
                </div>
            </div>

            <div className="flex flex-col justify-between flex-1 min-w-0 gap-2">
                <div>
                    <h2
                        style={{ fontFamily: "'Playfair Display', serif", color: '#f0ece3', fontSize: '18px', fontWeight: 600 }}
                        className="truncate leading-snug m-0"
                    >
                        {bookName}
                    </h2>
                    <p style={{ color: '#6b6b6b', fontSize: '12.5px' }} className="mt-1 m-0">
                        By : {author}
                    </p>
                </div>

                <hr style={{ borderColor: 'rgba(255,255,255,0.08)', borderStyle: 'dashed' }} className="border-t border-0 m-0" />

                <div className="flex flex-wrap items-center gap-2">
                    <span style={{ color: '#555', fontSize: '12px', fontWeight: 500 }}>Tag</span>
                    {tags.map(tag => (
                        <span key={tag} style={{
                            color: '#b8924a', fontSize: '11px',
                            background: 'rgba(184,146,74,0.1)',
                            border: '0.5px solid rgba(184,146,74,0.2)',
                            padding: '2px 8px', borderRadius: '99px'
                        }}>
                            #{tag}
                        </span>
                    ))}
                    <span className="sm:ml-auto flex items-center gap-1 whitespace-nowrap" style={{ color: '#484848', fontSize: '11px' }}>
                        <MapPin size={12} style={{ opacity: 0.5 }} />
                        Year of Publishing: {yearOfPublishing ?? 'N/A'}
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1" style={{ color: '#555', fontSize: '12px' }}>
                        <User size={13} style={{ opacity: 0.5 }} />
                        Publisher: {publisher}
                    </span>
                    <span className="flex items-center gap-1" style={{ color: '#555', fontSize: '12px' }}>
                        <BookOpen size={13} style={{ opacity: 0.5 }} />
                        Page {totalPages}
                    </span>
                </div>

                <hr style={{ borderColor: 'rgba(255,255,255,0.08)', borderStyle: 'dashed' }} className="border-t border-0 m-0" />

                <div className="flex flex-wrap items-center gap-3">
                    <div>
                        <span style={{ color: '#484848', fontSize: '11.5px' }}>Category: </span>
                        <span style={{ color: '#8a8a8a', fontSize: '11.5px' }}>{category}</span>
                    </div>
                    <span style={{
                        color: '#c97d20', fontSize: '12px', fontWeight: 500,
                        background: 'rgba(201,125,32,0.12)',
                        border: '0.5px solid rgba(201,125,32,0.2)',
                        padding: '3px 10px', borderRadius: '99px'
                    }}>
                        ★ {rating}
                    </span>
                    <button
                        onClick={() => onViewDetails(book)}
                        className="sm:ml-auto w-full sm:w-auto"
                        style={{
                            padding: '7px 20px', background: '#b8924a',
                            color: '#0d0d0d', border: 'none', borderRadius: '10px',
                            fontFamily: "'DM Sans', sans-serif", fontSize: '13px',
                            fontWeight: 500, cursor: 'pointer', transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#cba45a'}
                        onMouseLeave={e => e.currentTarget.style.background = '#b8924a'}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookListedCard;