import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/listedBooks/ListedReadList';
import ListedWishList from '../../Components/listedBooks/ListedWishList';
import { ArrowDownUp, BookOpen, BookMarked, ChevronDown, Star, FileText } from 'lucide-react';

const Books = () => {
    const [sortingType, setSortingType] = useState("");

    return (
        <div className="container mx-auto my-6 px-4">

            <div className="flex justify-center my-5">
                <div className="dropdown dropdown-bottom">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn bg-neutral border border-neutral-content/15 hover:border-amber-500/40 text-neutral-content/80 hover:text-neutral-content rounded-xl text-sm font-medium gap-2"
                    >
                        <ArrowDownUp size={14} className="text-amber-500" />
                        Sort by
                        {sortingType && (
                            <span className="text-amber-500 font-semibold capitalize">{sortingType}</span>
                        )}
                        <ChevronDown size={14} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-neutral border border-neutral-content/10 rounded-xl z-50 w-44 p-1.5 shadow-xl mt-1"
                    >
                        <li onClick={() => setSortingType('pages')}>
                            <a className="flex items-center gap-2 text-sm text-neutral-content/70 hover:text-amber-500 hover:bg-amber-500/10 rounded-lg">
                                <FileText size={13} />
                                Pages
                            </a>
                        </li>
                        <li onClick={() => setSortingType('rating')}>
                            <a className="flex items-center gap-2 text-sm text-neutral-content/70 hover:text-amber-500 hover:bg-amber-500/10 rounded-lg">
                                <Star size={13} />
                                Rating
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div role="tablist" className="tabs tabs-bordered">
                <Tabs>
                    <TabList className="flex gap-1 border-b border-neutral-content/10 mb-6">
                        <Tab
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-content/50 hover:text-neutral-content hover:bg-neutral-content/5 rounded-t-lg cursor-pointer transition-all duration-200 border-b-2 border-transparent list-none"
                            selectedClassName="!text-amber-500 !bg-amber-500/10 !border-b-2 !border-amber-500"
                        >
                            <BookOpen size={14} />
                            Read Books
                        </Tab>
                        <Tab
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-content/50 hover:text-neutral-content hover:bg-neutral-content/5 rounded-t-lg cursor-pointer transition-all duration-200 border-b-2 border-transparent list-none"
                            selectedClassName="!text-amber-500 !bg-amber-500/10 !border-b-2 !border-amber-500"
                        >
                            <BookMarked size={14} />
                            Wishlist Books
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <ListedReadList sortingType={sortingType} />
                    </TabPanel>
                    <TabPanel>
                        <ListedWishList sortingType={sortingType} />
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Books;