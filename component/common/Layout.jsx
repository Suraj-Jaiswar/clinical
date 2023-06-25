import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) =>{
    const { children } = props;

    return (
      <div className='layout'>
        <Header />
            {children}
        <Footer />
      </div>
    );
}

export default Layout;
