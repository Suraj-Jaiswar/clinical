import React, { Component } from 'react';
import Header from './Header';

const Layout = (props) =>{
    const { children } = props;

    return (
      <div className='layout'>
        <Header />
            {children}
        <Header />
      </div>
    );
}

export default Layout;
