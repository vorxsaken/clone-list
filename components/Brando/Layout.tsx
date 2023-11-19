import Head from 'next/head'
import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                <meta name='keywords' content='brando - branding agency mockups, mockups design to code' />
                <title>Brando | Mock Ups</title>
            </Head>
            <div>
                <header>
                    <Navbar />
                </header>
                <main className='w-full h-auto min-h-screen flex-center flex-col gap-40'>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout