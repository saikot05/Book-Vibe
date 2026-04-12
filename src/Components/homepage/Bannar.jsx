import React from 'react';
import bookImg from '../../assets/hero_img.jpg';
import { BookOpen, List, Info } from 'lucide-react';

const Banner = () => {
    return (
        <div className="bg-base-200 border border-neutral-content/10 rounded-2xl my-4 sm:my-8 mx-4 sm:container sm:mx-auto overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

            <div className="hero py-10 sm:py-14 lg:py-20">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-6 sm:px-10 lg:px-16 gap-8 lg:gap-10">

                    <div className="relative w-full lg:w-auto flex justify-center">
                        <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-2xl" />
                        <img
                            src={bookImg}
                            className="relative w-48 sm:w-64 lg:w-80 rounded-2xl shadow-2xl border border-neutral-content/10 object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-auto text-center lg:text-left">
                        <div className="badge text-amber-500 bg-amber-500/10 border-amber-500/20 font-semibold mb-4 gap-1 mx-auto lg:mx-0">
                            <BookOpen size={12} />
                            New Arrivals
                        </div>
                        <h1
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-content leading-tight"
                            style={{ fontFamily: "'Lora', serif" }}
                        >
                            Books to freshen up{' '}
                            <br className="hidden sm:block" />
                            <span className="text-amber-500">your bookshelf</span>
                        </h1>
                        <p className="text-neutral-content/50 mt-4 text-sm sm:text-base max-w-md leading-relaxed mx-auto lg:mx-0">
                            Explore a curated collection of books across every genre. Track your reading journey and discover your next favourite story.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-3 mt-6 sm:mt-8 flex-wrap">
                            <button className="btn btn-sm sm:btn-md bg-amber-500 hover:bg-amber-400 text-neutral border-none font-semibold shadow-lg shadow-amber-500/20 gap-2">
                                <List size={15} />
                                View The List
                            </button>
                            <button className="btn btn-sm sm:btn-md btn-ghost text-neutral-content/60 hover:text-neutral-content border border-neutral-content/10 hover:border-neutral-content/30 gap-2">
                                <Info size={15} />
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