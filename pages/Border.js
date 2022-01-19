import Layout from "../components/layout"
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