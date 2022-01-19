import Layout from "../components/layout"
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