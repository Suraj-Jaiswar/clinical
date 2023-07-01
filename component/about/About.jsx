import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import styles from "./about.module.scss";
import Image from "next/image";
import Ravi from '../../public/IMG_2178.JPG';

const About = () =>{
    return(
        <section className="section-container">
            <Container>
                <div className="section font-38">
                    <h3>About Us</h3>
                </div>
            </Container>
            <Container>
                <div className={styles.about_holder}>
                    <div className={`${styles.about_dis} font-16`}>
                        <p>
                            Clinical Trial Research Services (CTRS) is a India Based SMO offers cutting-edge, specialised clinical trial and research-related services. Above our name, expresses our enthusiasm for conducting clinical trials, doing research, and providing the globe with the best services and treatment solutions. We provide exceptional site management and project management and monitoring of phase II, III and IV clinical trials involving pharmaceutical, biological and medical device products to its clients. We maintain High retention of our clients due to our commitment, responsiveness, flexibility, performance, cost effectiveness and unmatched quality. We complement each client's working culture and management style and are flexible to their requirements.
                        </p>
                    </div> 
                    <div className={styles.about_title}>
                        <h2>Mission</h2>
                        <ul>
                            <li>
                                To make the world a better place for innovation, creation, protection, and advancement 
                            </li>
                            <li>
                                To inspire our team to pursue greatness by fostering a positive workplace culture.
                            </li>
                            <li>
                                To retain our clients by offering them high-quality services, completing their tasks by the deadlines they have set, and acting ethically.
                            </li>
                            <li>
                                To focus on contributing to society by offering top-notch clinical and biopharmaceutical services within the context of sound clinical standards.
                            </li>
                        </ul>
                    </div>
                    <div className={styles.about_title}>
                        <h2>Vision</h2>
                        <ul>
                            <li>
                                Our vision is to sustain the quality and well-being of society while offering the best healthcare and research-related services and data.
                            </li>
                            <li>
                                To ensure that CTRS is the most comfortable workplace for our employees and a one-stop shop for all of our clients' needs in order to be at the top of the list of biopharma service providers globally.
                            </li>
                        </ul>
                    </div>   
                    <div className={styles.about_title}>
                        <h2>Values</h2>
                        <ul>
                            <li>
                                C- Credible, Comprehensive, Committed, Capacious
                            </li>
                            <li>
                                T-  Trustworthy, Time-honoured, Transparent, Take Charge
                            </li>
                            <li>R- Reliable, Responsible, Reputable, Rational</li>
                            <li>S- Scientific, Skilled, Sincere, Supportive</li>
                        </ul>
                    </div> 
                    <div className='team-management'>
                        <div className='mgtb-30 font-30 fs-b'>
                            Team Management
                        </div>
                        <Grid container spacing={2}>
                            <Grid xs={12}>
                                <div className={`team_title text-center mgb-40`}>
                                    <div className={styles['founder-img']}>
                                        <Image src={Ravi} alt="img"/>
                                    </div>
                                    <div>
                                        <strong className={`font-24`}>Ravi Gupta</strong>
                                        <div className="mgt-5">Founder</div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <div className={styles['team-arrow']}>
                            <div className={`${styles["arrow-line"]} ${styles["left"]}`}></div>
                            <div className={`${styles["arrow-line"]} ${styles["right"]}`}></div>
                        </div>
                        <Grid container spacing={2}>
                            <Grid xs={6}>
                                <div className={`team_title text-center mgt-40`}>
                                    <strong className={`font-24`}>Safiq Shah</strong>
                                    <div className="mgt-5">Co-Founder</div>
                                </div>
                            </Grid>
                            <Grid xs={6}>
                                <div className={`team_title text-center mgt-40`}>
                                    <strong className={`font-24`}>Sunny Goel</strong>
                                    <div className="mgt-5">Co-Founder</div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>  
                </div>
            </Container>
        </section>
    )
}
export default About;