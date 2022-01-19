import Layout from "../components/layout"
import Head from 'next/head';
import TransformPage from "../components/transform/TransformPage";


const Transform = () =>{

    return(
        <Layout>
             <Head>
                <title>Transform Page</title>
            </Head>
            <div className="content">
                <TransformPage/>
            </div>
            
        </Layout>
    )
}

export default Transform;