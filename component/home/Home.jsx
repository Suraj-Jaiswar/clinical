import React from 'react';
import styles from "./home.module.scss";
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
const Home = (props) =>{

    return (
        <section className="section-container">
            <Container >
                <Grid>
                    <div className={`section-heading text-center font-38`}>
                        <h3 className="section-title">Why Choose CTRS</h3>
                    </div>
                </Grid>
                <Grid container spacing={2}>
                    <Grid className="text-center" xs={3}>
                        <div className={`${styles.card_holder}`}>
                            <div className={`${styles.card_title} font-30`}>
                                <div className={styles.card_title_text}>C</div>
                            </div>
                            <div className={styles.card_list}>
                                <ul className="text-white font-16">
                                    <li className={`${styles.card_li}`}>Credible </li> 
                                    <li className={`${styles.card_li}`}>comprehensive</li> 
                                    <li className={`${styles.card_li}`}>committed</li>
                                    <li className={`${styles.card_li}`}>Capacious</li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={3}>
                        <div className={`${styles.card_holder}`}>
                            <div className={`${styles.card_title} font-30`}>
                                <div className={styles.card_title_text}>T</div>
                            </div>
                            <div className={styles.card_list}>
                                <ul className="text-white font-16">
                                    <li className={`${styles.card_li}`}>Trustworthy</li> 
                                    <li className={`${styles.card_li}`}>Time-honoured</li> 
                                    <li className={`${styles.card_li}`}>Transparent</li>
                                    <li className={`${styles.card_li}`}>Take Charge</li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={3}>
                        <div className={`${styles.card_holder}`}>
                            <div className={`${styles.card_title} font-30`}>
                                <div className={styles.card_title_text}>R</div>
                            </div>
                            <div className={styles.card_list}>
                                <ul className="text-white font-16">
                                    <li className={`${styles.card_li}`}>Reliable</li> 
                                    <li className={`${styles.card_li}`}>Responsible</li> 
                                    <li className={`${styles.card_li}`}>Reputable</li>
                                    <li className={`${styles.card_li}`}>Rational</li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={3}>
                        <div className={`${styles.card_holder}`}>
                            <div className={`${styles.card_title} font-30`}>
                                <div className={styles.card_title_text}>S</div>
                            </div>
                            <div className={styles.card_list}>
                                <ul className="text-white font-16">
                                    <li className={`${styles.card_li}`}>Scientific</li> 
                                    <li className={`${styles.card_li}`}>Skilled</li> 
                                    <li className={`${styles.card_li}`}>Sincere</li>
                                    <li className={`${styles.card_li}`}>Supportive</li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default Home;
