import Layout from "../components/layout"
import Head from 'next/head';
import FilterPage from "../components/filter/FilterPage";


const Filter = () =>{

    return(
        <Layout>
             <Head>
                <title>Filter Page</title>
            </Head>
            <div className="content">
                <FilterPage/>
            </div>
            
        </Layout>
    )
}

export default Filter;