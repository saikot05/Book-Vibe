import React from 'react';
import bookImg from '../../assets/hero_img.jpg';
import { BookOpen, List, Info } from 'lucide-react';

const Banner = () => {
    return (
        <div className="bg-base-200 border border-neutral-content/10 rounded-2xl my-8 container mx-auto overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

            <div className="hero py-14 lg:py-20">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-10 lg:px-16 gap-10">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-2xl" />
                        <img
                            src={bookImg}
                            className="relative max-w-sm rounded-2xl shadow-2xl border border-neutral-content/10"
                        />
                    </div>

                    <div>
                        <div className="badge text-amber-500 bg-amber-500/10 border-amber-500/20 font-semibold mb-4 gap-1">
                            <BookOpen size={12} />
                            New Arrivals
                        </div>
                        <h1
                            className="text-5xl font-bold text-neutral-content leading-tight"
                            style={{ fontFamily: "'Lora', serif" }}
                        >
                            Books to freshen up <br />
                            <span className="text-amber-500">your bookshelf</span>
                        </h1>
                        <p className="text-neutral-content/50 mt-4 text-base max-w-md leading-relaxed">
                            Explore a curated collection of books across every genre. Track your reading journey and discover your next favourite story.
                        </p>
                        <div className="flex items-center gap-3 mt-8">
                            <button className="btn bg-amber-500 hover:bg-amber-400 text-neutral border-none font-semibold shadow-lg shadow-amber-500/20 gap-2">
                                <List size={16} />
                                View The List
                            </button>
                            <button className="btn btn-ghost text-neutral-content/60 hover:text-neutral-content border border-neutral-content/10 hover:border-neutral-content/30 gap-2">
                                <Info size={16} />
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;