import Link from "next/link";

const HomePage = () => {

    return(
        <div>
            <div className="homepage">
                  <div className="box">
                      <Link href="/BoxShadow">
                        <a>Box Shadow</a>
                      </Link>
                  </div>  

                  <div className="box">
                      <Link href="/BorderRadius">
                        <a>Border Radius</a>
                      </Link>
                  </div>  

                  <div className="box">
                      <Link href="/Border">
                        <a>Border</a>
                      </Link>
                  </div>  

                  <div className="box">
                      <Link href="/TextShadow">
                        <a>Text Shadow</a>
                      </Link>
                  </div>  

                  <div className="box">
                      <Link href="/Filter">
                        <a>Filter</a>
                      </Link>
                  </div>  

                  <div className="box">
                      <Link href="/Gradient">
                        <a>Gradient</a>
                      </Link>
                  </div>  

                  <div className="box">
                      <Link href="/Transform">
                        <a>Transform Css</a>
                      </Link>
                  </div>
                  
            </div>
        </div>
    )
}

export default HomePage;