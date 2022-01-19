import Layout from "../components/Layout"
import Head from 'next/head';
import Radius from "../components/borderRadius/Radius";

const BorderRadius = () =>{

    return(
        <Layout>
             <Head>
                <title>Border Radius Page</title>
            </Head>
            <div className="content">
                <Radius/>
            </div>
            
        </Layout>
    )
}

export default BorderRadius;