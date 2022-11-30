import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';

const Header = (props) =>{

    return ( 
        <section className="header-main">
            <Container maxWidth="ls" fixed>
                <div className="container">
                    <div className="header-brand">
                        <h2>Clincal</h2>
                    </div>
                    <div className="header-links">
                        <ul className="links-list">
                            <li className="link text-white">
                                <Link href='/'>About Us</Link>
                            </li>
                            <li className="link text-white">
                                <Link href='/'>Industries</Link>
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
                        <Button variant="outlined">
                            Contact Now
                        </Button>
                    </div>
                </div>
            </Container>
        </section>        
    );
}

export default Header;