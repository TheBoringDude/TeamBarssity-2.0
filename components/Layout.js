import Head from 'next/head'
import '../assets/styles/main.css';

export const siteName = 'Team Barssity'

function Layout({ children }) {
    return (
        <div className="antialiased w-full h-full">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="/logo.png" />
                <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
            </Head>
            <body>
            { children }
            </body>
        </div>
    )
}

export default Layout