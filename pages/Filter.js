import Layout from "../components/Layout"
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