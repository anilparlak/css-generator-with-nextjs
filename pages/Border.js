import Layout from "../components/Layout"
import Head from 'next/head';
import BorderPage from "../components/border/BorderPage";


const Border = () =>{

    return(
        <Layout>
             <Head>
                <title>Border Page</title>
            </Head>
            <div className="content">
                <BorderPage/>
            </div>
            
        </Layout>
    )
}

export default Border;