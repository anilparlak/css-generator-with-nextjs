import Link from "next/link";

import React,{useEffect, useState} from "react";
import { useRouter } from 'next/router';


const Navigation = () => {

    const router = useRouter();
    const [toggle,setToggle] = useState("false")

    const hamburgerHandle = () =>{
        setToggle(!toggle)
    }

    return (

        <>
            <nav className="nav">
                <header>
                    <div className="logo">
                        <Link href="/">
                        <a>
                            <img src="./images/examplecssLogo.png" alt="logo" />
                        </a>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link  href="/">
                                <a className={router.pathname == "/" ? "active" : ""}>Homepage</a>
                            </Link>   
                        </li>
                        <li>
                            <Link href="/BoxShadow">
                                <a  className={router.pathname == "/BoxShadow" ? "active" : ""}>Box Shadow</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/BorderRadius">
                                <a className={router.pathname == "/BorderRadius" ? "active" : ""}>Border Radius</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/Border">
                                <a  className={router.pathname == "/Border" ? "active" : ""}>Border</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/TextShadow">
                                <a className={router.pathname == "/TextShadow" ? "active" : ""}>Text Shadow</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/Filter">
                                <a className={router.pathname == "/Filter" ? "active" : ""}>Filter</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/Gradient">
                                <a className={router.pathname == "/Gradient" ? "active" : ""}>Gradient</a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/Transform">
                                <a className={router.pathname == "/Transform" ? "active" : ""}>Transform Css</a>
                            </Link>
                        </li>
                
                    </ul>

                </header>
            </nav>
            <div className={`hamburger ${toggle ? "active" : " "} `}>

                        <div className={(!toggle) ? "open" : null} id="btn1"  data-menu="1" onClick={hamburgerHandle}>
                            <div className="icon-left"></div>
                            <div className="icon-right"></div>
                        </div>


                        <div className={`hamburgerMenu ${!toggle? "openNav" : null} nav`}>
                            <header>
                                <ul>
                                <li>
                                    <Link  href="/">
                                        <a className={router.pathname == "/" ? "active" : "" }>Homepage</a>
                                    </Link>   
                                </li>
                                <li>
                                    <Link href="/BoxShadow">
                                        <a  className={router.pathname == "/BoxShadow" ? "active" : ""}>Box Shadow</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/BorderRadius">
                                        <a className={router.pathname == "/BorderRadius" ? "active" : ""}>Border Radius</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Border">
                                        <a  className={router.pathname == "/Border" ? "active" : ""}>Border</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/TextShadow">
                                        <a className={router.pathname == "/TextShadow" ? "active" : ""}>Text Shadow</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Filter">
                                        <a className={router.pathname == "/Filter" ? "active" : ""}>Filter</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Gradient">
                                        <a className={router.pathname == "/Gradient" ? "active" : ""}>Gradient</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Transform">
                                        <a className={router.pathname == "/Transform" ? "active" : ""}>Transform Css</a>
                                    </Link>
                                </li>
                        
                            </ul>
                            </header>
                        </div>

                    </div>
        </>
    )
}

export default Navigation;