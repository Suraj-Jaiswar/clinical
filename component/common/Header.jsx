import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';
import logo from '../../public/Logo.png';
import Image from "next/image";

const Header = (props) =>{

    return ( 
        <section className="header-main">
            <Container maxWidth="ls" fixed>
                <div className="container">
                    <div className="header_brand">
                        <Link href="/">
                            {/* <h2 className="text-white">Clincal</h2> */}
                            <Image
                                src={logo}
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="header-links">
                        <ul className="links-list">
                            <li className="link text-white">
                                <Link href='/'>Home</Link>
                            </li>
                            <li className="link text-white">
                                <Link href='/about'>About Us</Link>
                            </li>
                            <li className="link text-white">
                                <Link href='/'>Services</Link>
                            </li>
                            <li className="link text-white">
                                <Link href='/'>Work with us</Link>
                            </li>
                            <li className="link text-white">
                                <Link href='/'>Work</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-contact-btn">
                        <Link href='/contact'>
                            <Button variant="contained">
                                Contact Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>        
    );
}

export default Header;