import Layout from "../components/layout"
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