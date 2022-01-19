import Layout from "../components/Layout"
import Head from 'next/head';
import ShadowText from "../components/textShadow/ShadowText";

const TextShadow = () =>{

    return(
        <Layout>
             <Head>
                <title>Text Shadow Page</title>
            </Head>
            <div className="content">
                <ShadowText/>
            </div>
            
        </Layout>
    )
}

export default TextShadow;