import React from 'react';
import Navbar from '../Components/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className='flex-1'>
                <Outlet></Outlet>   
            </main>   
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;