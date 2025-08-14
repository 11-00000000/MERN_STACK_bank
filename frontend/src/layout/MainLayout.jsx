"use client";
import Navbar from '@/components/Navbar' // ✅ Import Navbar
import { MainContextProvider } from '@/context/MainContext'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // ✅ Import ToastContainer for notifications
const MainLayout = ({ children }) => {
  return (
   <Provider store={store}>
    <MainContextProvider>
    <ToastContainer/>
    <Navbar/>
        {children}
    </MainContextProvider>
    </Provider>
  );
};

export default MainLayout;
