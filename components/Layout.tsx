import Head from 'next/head'
import React, { ReactNode } from 'react'
import { cn } from '@/utils'

function Layout({ children, title, content, className, navBar, footer }: {
    children: ReactNode,
    title: string,
    content: string,
    className?: string,
    navBar?: JSX.Element,
    footer?: JSX.Element
}) {
    const headTitle = `${title}| Mock Ups`;

    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta name='keywords' content={content} />
                <title>{headTitle}</title>
            </Head>
            <div>
                <header>
                    {navBar}
                </header>
                <main className={cn('w-full h-auto min-h-screen flex-center flex-col gap-40', className)}>
                    {children}
                </main>
                {footer}
            </div>
        </>
    )
}

export default Layout