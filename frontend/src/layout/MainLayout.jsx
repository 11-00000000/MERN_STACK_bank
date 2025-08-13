import React from 'react';
import Navbar from '../components/Navbar'; // ✅ Import Navbar
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // ✅ Import ToastContainer for notifications
const MainLayout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
