import React, {useState, useEffect} from "react";
import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import {BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill, BsInstagram, BsFacebook, BsLinkedin} from 'react-icons/bs';
import { isMobile } from 'react-device-detect';

const Footer = () => {
    const [loaded, setLoad] = useState(false);

    useEffect(()=>{
        setLoad(true);
    },[])
    return ( 
        <>
            {loaded ? 
                <section className="footer">
                    <Container className="footer-container">
                        <Grid container spacing={2}>
                            <Grid className="" xs={isMobile ? 12 : 6}>
                                <div className="main-tags">
                                    Contact Us
                                </div>
                                <ul className="sub-link contact_us">
                                    <li>
                                        <div className="footer-icon-text sub-link-height">
                                            <span><BsTelephoneFill/></span>
                                            <span>
                                                <Link href={"tel:8108982906"} target="_blank"  className="" rel="noreferrer">
                                                    8108982906
                                                </Link>
                                            </span> 
                                            <span>
                                                <Link href={"tel:9867372672"} target="_blank"  className="" rel="noreferrer">
                                                    9867372672
                                                </Link>
                                            </span>
                                            <span>
                                                <Link href={"tel:9958845036"} target="_blank"  className="" rel="noreferrer">
                                                    9958845036
                                                </Link>
                                            </span>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <div className="footer-icon-text sub-link-height">
                                            <span></span>
                                        </div>
                                    </li> */}
                                    <li>
                                        <div className="footer-icon-address">
                                            <div className="mgt-5"><BsGeoAltFill size='20px'/></div><div className="mgl-5 footer-add">G-1,Ganesh Wadi, CHS Ltd, BLDG-5 Marol, MIDC, Andheri East, Mumbai-400093</div>
                                        </div>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid className="" xs={isMobile ? 6 : 3}>
                                <div className={`card_holder`}>
                                    <div className="main-tags">
                                        Quick Links
                                    </div>
                                    <ul className="sub-link sub-link-height">
                                        <li>
                                            <Link href="/">
                                                <b>Home</b>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <b>About Us</b>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <b>Contact Us</b>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid className="" xs={isMobile ? 6 : 3}>
                                <div className="main-tags">
                                    Social Links
                                </div>
                                <ul className="sub-link sub-link-height">
                                    <li>
                                        <div className="social-wrapper">
                                            {/* <div className="social-holder mgtb-10">
                                                Facebook
                                            </div> */}
                                            <div className="social-holder mgtb-10">
                                                <Link href="https://www.instagram.com/ctr_services/" target="_blank" rel="noreferrer">
                                                    Instagram
                                                </Link>
                                            </div>
                                            <div className="social-holder mgtb-10">
                                                <Link href="https://www.linkedin.com/company/clinical-trial-research-services/" target="_blank" rel="noreferrer">
                                                    LinkedIn
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                        <Grid>
                            <div className="footer-rights font-14 logo-footer">
                                @2023 CTRServices.com
                            </div>
                        </Grid>
                    </Container>
                </section>
                :null
            }
        </>
    );
}

export default Footer;