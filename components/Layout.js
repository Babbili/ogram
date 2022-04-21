import React from 'react'
import Header from './Header'

function Layout({ children }) {

    return(
        <>
        <Header />
        <main className='container'>{children}</main>
        <footer></footer>
        </>
    )
}
export default Layout