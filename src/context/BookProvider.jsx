import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllReadListFromLocalDB, addReadListToLocalDB, getAllWishListFromLocalDB, addWishListToLocalDB } from '../utils/LocalDB';

export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [readlist,setReadList] = useState([]);
    const [wishList,setWishList] = useState([]);

    useEffect(() => {
        const getReadListfromLocalDB = getAllReadListFromLocalDB();
        if(getReadListfromLocalDB?.length) {
            setReadList(getReadListfromLocalDB)
        }

        const getWishListFromLocalDB = getAllWishListFromLocalDB();
        if(getWishListFromLocalDB?.length) {
            setWishList(getWishListFromLocalDB)
        }
    },[])

    const handleMarkAsRead = (currentBook) => {
        const isExistBook = readlist.find(book => book.bookId === currentBook.bookId)
        if(isExistBook){
            toast.error("The book is already in read list");
        }else{
            setReadList([...readlist, currentBook]);
            addReadListToLocalDB(currentBook);

            const isExistInWishList = wishList.find(book => book.bookId === currentBook.bookId)
            if(!isExistInWishList){
                setWishList([...wishList, currentBook]);
                addWishListToLocalDB(currentBook);
            }

            toast.success(`${currentBook.bookName} is added to the read list`)
        }
    }

    const handleWishList = (currentBook) => {
        const isExistInReadList = readlist.find(book => book.bookId === currentBook.bookId)
        if(isExistInReadList){
            toast.error("This book is already in read list");
            return;
        }

        const isExistBook = wishList.find(book => book.bookId === currentBook.bookId)
        if(isExistBook){
            toast.error("The book is already in wishlist");
        }else{
            setWishList([...wishList, currentBook]);
            addWishListToLocalDB(currentBook);
            toast.success(`${currentBook.bookName} is added to the wishlist`)
        }
    }

    const data = {
        readlist,
        setReadList,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;