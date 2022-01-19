import Layout from "../components/Layout"
import Head from 'next/head';
import Shadow from "../components/boxShadow/Shadow";

const BoxShadow = () =>{

    return(
        <Layout>
             <Head>
                <title>Box Shadow Page</title>
            </Head>
            <div className="content">
                <Shadow/>
            </div>
            
        </Layout>
    )
}

export default BoxShadow;