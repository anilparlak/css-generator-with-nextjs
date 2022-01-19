import Head from 'next/head';
import React from "react";
import Layout from "../components/Layout";
import HomePage from "../components/homepage/HomePage";


const Homepage = () =>{

    return(
        <Layout>
            <Head>
                <title>Home Page</title>
            </Head>
            <div className="content">
                <HomePage/>
            </div>
            
        </Layout>
       
    )
}

export default Homepage;