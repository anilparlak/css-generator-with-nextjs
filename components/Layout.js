import Footer from "./footer/Footer";
import Navigation from "./navbar/Navigation";
import Head from 'next/head';

const Layout = ({children}) => {

    return (
        <div className="container" >
            <Head>
                <title>CSS Generator</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap" rel="stylesheet"/>
            </Head>
            <Navigation/>
            <main >
                {children}
            </main>

            <Footer/>

        </div>
    )
}

export default Layout;