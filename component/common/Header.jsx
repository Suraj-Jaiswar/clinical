import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import logo from '../../public/Logo.png';
import Image from "next/image";
import {MdDehaze} from 'react-icons/md';
import { isMobile } from 'react-device-detect';

const Header = (props) =>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [loaded, setLoad] = useState(false);

    useEffect(()=>{
        setLoad(true);
    },[])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return ( 
        <>
        {loaded ? 
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
                        {!isMobile ?
                            <>
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
                            </>
                            :
                            <div>
                                <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                                    <MdDehaze size="24"/>
                                </Button>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                    }}
                                >
                                    <Typography sx={{ p: 2 }} onClick={handleClose}>
                                        <Link href='/'>Home</Link>
                                    </Typography>
                                    <Typography sx={{ p: 2 }} onClick={handleClose}>
                                        <Link href='/about'>About Us</Link>
                                    </Typography>
                                    <Typography sx={{ p: 2 }} onClick={handleClose}>
                                        <Link href='/'>Services</Link>
                                    </Typography>
                                    <Typography sx={{ p: 2 }} onClick={handleClose}>
                                        <Link href='/'>Work With Us</Link>
                                    </Typography>
                                    <Typography sx={{ p: 2 }} onClick={handleClose}>
                                        <Link href='/contact'>Contact Us</Link>
                                    </Typography>
                                </Popover>
                            </div>
                        }
                    </div>
                </Container>
            </section>
            :null        
        }
        </>
    );
}

export default Header;