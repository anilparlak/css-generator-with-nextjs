import Layout from "../components/Layout"
import Head from 'next/head';
import GradientPage from "../components/gradient/GradientPage";

const Gradient = () => {

    return(
        <Layout>
             <Head>
                <title>Gradient Page</title>
            </Head>
            <div className="content">
                <GradientPage/>
            </div>
            
        </Layout>
    )
}

export default Gradient;