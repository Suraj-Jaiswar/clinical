import Link from 'next/link';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

const Footer = () => {
    return ( 
        <section className="footer">
            <Container className="footer-container">
                <Grid container spacing={2}>
                    <Grid className="" xs={6}>
                        <div className="main-tags">
                            Contact Us
                        </div>
                        <ul className="sub-link contact_us">
                            <li>
                                <div className="footer-icon-text sub-link-height">
                                    <Link href={"tel:8097729557"} target="_blank" rel="noreferrer">
                                        <span>8779265557 / 8097729557</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="footer-icon-text sub-link-height">
                                    <span>katalystacademy555@gmail.com</span>
                                </div>
                            </li>
                            <li>
                                <div className="footer-icon-address">
                                    <span>Office No.801, D Square Bldg, Dadabhai Road, Opp. CNM School, Vile Parle (W), Mumbai-400056</span>
                                </div>
                            </li>
                        </ul>
                    </Grid>
                    <Grid className="" xs={3}>
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
                    <Grid className="" xs={3}>
                        <div className="main-tags">
                            Social Links
                        </div>
                        <ul className="sub-link sub-link-height">
                            <li>
                                <div className="social-wrapper">
                                    <div className="social-holder">
                                        Facebook
                                    </div>
                                    <div className="social-holder">
                                        <Link href="https://instagram.com/katalystacademy?utm_medium=copy_link" target="_blank" rel="noreferrer">
                                            Instagram
                                        </Link>
                                    </div>
                                    <div className="social-holder">
                                        Linkdin
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid>
                    <div className="footer-rights font-14 logo-footer">
                        @2022 katalyst Academy Pvt. Ltd.
                    </div>
                </Grid>
            </Container>
        </section>
    );
}

export default Footer;