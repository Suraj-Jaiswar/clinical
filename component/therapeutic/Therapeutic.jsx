import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import styles from "./therapeutic.module.scss";
import Image from "next/image";
import Oncology from '../../public/Oncology.jpg';
import cardiology from "../../public/cardiology.jpg";
import dermatology from "../../public/dermatology.jpg";
import pediatric from "../../public/pediatric.jpg";
import genralmedi from "../../public/genralmedi.jpg";
import nuro from "../../public/nuro.jpg";
import ortho from "../../public/ortho.jpg";
import resprotary from "../../public/resprotary.jpg";
import Hepato from "../../public/Hepato.jpg";
import kidney from "../../public/kidney.jpg";
import eye from "../../public/eye.jpg";
import immuno from "../../public/immuno.jpg";
import dental from "../../public/dental.jpg";
import gyno from "../../public/gyno.jpg";

const Therapeutic = () =>{
    return(
        <section className={styles["section-container"]}>
            <Container>
                <div className="section font-38 text-center">
                    <div className={styles['title']}>Therapeutic Areas</div>
                </div>
                <div className='font-15 text-center mgb-30'>
                    <p>We have an expanding network of dedicated experienced and quality conscious investigators and multispeciality hospitals. We also have network with many renowned CROs and Sponsors medical devices.</p>
                </div>
            </Container>
            <Container>
                <Grid container spacing={3}>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={Oncology} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Oncology
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Hemato Oncology</li>
                                <li>Medical Oncology</li>
                                <li>Surgical Oncology</li>
                                <li>Radiation Oncology</li>
                                <li>Immuno Therapy etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={cardiology} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Cardiology
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Hypertension,IHD</li>
                                <li>MI,Cardiac Arrest</li>
                                <li>Cardio surgery etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={dermatology} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Dermatology
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Skin Cancer</li>
                                <li>Eczema</li>
                                <li>Acne</li>
                                <li>Dermatitis</li>
                                <li>Psoriasis</li>
                                <li>Vitiligo etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={pediatric} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Pediatrics & Neonatology
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Bronchitis</li>
                                <li>Common Cold</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={genralmedi} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            General Medicine
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>DM Type 1&2</li>
                                <li>Hematology</li>
                                <li>Hypertension</li>
                                <li>Anaemia</li>
                                <li>Infectious Diseases etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={nuro} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Neuro-psychiatry
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Neurology</li>
                                <li>Psychiatry Disorder etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={ortho} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Orthopedic
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>RA</li>
                                <li>OA</li>
                                <li>Osteoporosis</li>
                                <li>Surgeries etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={resprotary} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Respiratory Medicine
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Asthma</li>
                                <li>COPD</li>
                                <li>Intensive Care etc</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={Hepato} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Hepato-Gastroenterology
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>IBD (Ulcerative Colitis & Chron’s)</li>
                                <li>Peptic Ulcer</li>
                                <li>Liver Disorder (Hepatitis B & C)</li>
                                <li>GERD,Gastric Ulcer</li>
                                <li>Constipation etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={kidney} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Uro-Nephrology
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Urology</li>
                                <li>Nephrology</li>
                                <li>CKD & AKD etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={eye} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Ophthalmology
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Glaucoma</li>
                                <li>Diabetic Retinopathy</li>
                                <li>Cataract etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={immuno} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Immunology & Infections Disease
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Viral Infection</li>
                                <li>HIV</li>
                                <li>Covid-19</li>
                                <li>Dengue etc</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={dental} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Dental
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>Cavities</li>
                                <li>Gingivitis (Gum Disease)</li>
                                <li>Oral Cancer</li>
                                <li>Periodontitis</li>
                                <li>Sensitivity etc</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className={styles['thera-card-holder']}>
                            <div className={styles['img-holder']}>
                                <Image width={"300px"} src={gyno} alt="img"/>
                            </div>
                        </div>
                        <div className={styles['title-holder']}>
                            Gynecology
                        </div>
                        <div className={styles['thera-list']}>
                            <ul>
                                <li>PCOD</li>
                                <li>Endometriosis</li>
                                <li>Uterine Fibroids</li>
                                <li>Vaginitis etc</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}
export default Therapeutic;