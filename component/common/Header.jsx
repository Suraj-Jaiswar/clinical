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
import styles from "./heading.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
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
                                            <div className={styles["drop-service"]}>
                                                <div className={"fs-b"}>Services<span className={styles["arrow"]}><MdKeyboardArrowDown size={"20px"}/></span></div>
                                                <Link href="/services">
                                                    <ul className={styles["serivce-list"]}>
                                                        <li>Site Management</li>
                                                        <li>Ethics Committee</li>
                                                        <li>Regulatory Affairs</li>
                                                        <li>Clinical Trial Registry India</li>
                                                        <li>Training</li>
                                                    </ul>    
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="link text-white">
                                            <div className={styles["drop-thea"]}>
                                                <div className={"fs-b"}>Therapeutic Area <span className={styles["arrow"]}><MdKeyboardArrowDown size={"20px"}/></span></div>
                                                <Link href="/therapeutic">
                                                    <ul className={styles["thea-list"]}>
                                                        <li>COVID-19 Clinical Trial</li>
                                                        <li>Cardiology</li>
                                                        <li>Oncology</li>
                                                        <li>Respiratory</li>
                                                        <li>Rheumatology</li>
                                                        <li>Dermatology</li>
                                                        <li>Orthopaedics</li>
                                                        <li>Neurology and Neurosurgery</li>
                                                        <li>Ophthalmology</li>
                                                        <li>Nutraceuticals and Cosmetics</li>
                                                        <li>Endocrinology / Metabolism</li>
                                                        <li>Infectious Disease</li>
                                                        <li>Pulmonology</li>
                                                        <li>Nephrology</li>
                                                    </ul>
                                                </Link>        
                                            </div>
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
                                        <Link href='/'>Therapeutic Area</Link>
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