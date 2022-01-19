import Link from "next/link";

const Footer = () => {

    var d = new Date();

   
    return (
        <footer>
            <div className="footer-content">
                <span>Copyright &copy; {d.getFullYear()}
                    <Link href="https://github.com/anilparlak">
                
                        <a target="_blank"> Anıl Parlak</a>
                    </Link>
                    
                </span>
             
              
            </div>
        </footer>
    )
}

export default Footer;