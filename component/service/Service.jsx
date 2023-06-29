import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import styles from "./service.module.scss";

const About = () =>{
    return(
        <section className="section-container">
            <Container>
                <div className="section font-38">
                    <h3>Services</h3>
                </div>
            </Container>
            <Container>
                <div className='mgb-15'>
                    <div className='service-title mgb-10 font-20 fs-b pdl-20'>
                        Site Management
                    </div>
                    <div className={`${styles['service-desc']} pdl-20`}>
                        <ul>
                            <li>Site identification and feasibility</li>
                            <li>Reviewing the inclusion-exclusion criteria and appropriate consenting of all the subjects involved</li>
                            <li>Site selection and qualification visits</li>
                            <li>Assistance to obtain the approval of the Ethics Committees and Review Boards</li>
                            <li>Managing subject recruitment and upskilling</li>
                            <li>Reviewing the quality systems at the site</li>
                            <li>Initiation, interim monitoring, and study closure visits</li>
                            <li>Essential document collection, review and processing</li>
                            <li>Good Clinical Practice monitoring, including motivational and training visits</li>
                            <li>Ongoing plan review and implementation</li>
                            <li>Source documentation review, CRF review and query resolution</li>
                            <li>Accountability for all study documents and materials</li>
                            <li>Communication with sites</li>
                            <li>Audit and inspection readiness</li>
                            <li>Study-specific training to site personnel</li>
                            <li>Review of Investigational Product accountability and storage</li>
                            <li>Review of safety information of all subjects</li>
                            <li>Logging and correcting protocol deviations</li>
                            <li>Monitoring study progress</li>
                            <li>Safety reporting</li>
                            <li>Database lock and study close-out</li>
                            <li>Sending mailings and newsletters to sites</li>
                            <li>Site close-out</li>
                            <li>Data archiving</li>
                        </ul>
                    </div>
                </div>
                <div className='mgb-15'>
                    <div className='service-title mgb-10 font-20 fs-b pdl-20'>
                        Ethics Committee
                    </div>
                    <div className='service-sub pdl-20 mgb-15'>
                        The Ethics Committee (EC) is an independent body in a Member State, consisting of healthcare professionals and non-medical members, whose responsibility is to protect the rights, safety, and wellbeing of human subjects involved in a trial.
                    </div>
                    <div className={`${styles['service-desc']} pdl-20`}>
                        <ul>
                            <li>EC Registration</li>
                            <li>EC submission & Approvals - Assistance to obtain the approval of the Ethics Committees and Review Boards. Depending on the site location, our team can prepare submission packages for Central Ethics Committee (CEC), Local Ethics Committee (LEC), or both. According to local requirements and local laws, our Start-Up team offers to prepare and submit initial submission packages to start a clinical trial. </li>
                            <li>SUGAM Portal formation</li>
                            <li>IEC Re-registration</li>
                            <li>NATIC Portal formation and Registration</li>
                            <li>NABH Accreditation for IEC</li>
                            <li>ICH-GCP training programs for IEC Members.</li>
                        </ul>
                    </div>
                </div>
                <div className='mgb-15'>
                    <div className='service-title mgb-10 font-20 fs-b pdl-20'>
                        Regulatory Affairs
                    </div>
                    <div className='service-sub pdl-20 mgb-15'>
                        Regulatory affairs play a leadership role in life sciences product development and lifecycle management, informing all functional groups involved in the process. A solid regulatory affairs team is paramount to understanding the dynamic regulatory environment, ensuring compliance, and advising on opportunities created by new and revised regulations.
                    </div>
                    <div className={`${styles['service-desc']} pdl-20`}>
                        <ul>
                            <li>DCGI registration- Our team are experienced regulatory and safety professionals with the regional knowledge (including local language and culture) and contacts needed to communicate effectively with the appropriate regulatory agencies.</li>
                            <li>eCTD Regulatory Dossier Preparation, Publishing and Submission</li>
                            <li>Global Regulatory and Scientific Advice strategies preparation, meeting and execution at all stages of development</li>
                            <li>Program review (including pre-clinical, pharmacology, CMC and clinical elements)</li>
                            <li>Regulatory management through full product life cycle</li>
                            <li>Regulatory strategy and agency communication to obtain first-cycle approvals</li>
                            <li>Consulting: Planning and strategy are key to success and CTRS regulatory personnel are experienced in providing customer/product specific regulatory solutions which will meet Sponsor expectations in terms of cost, time and quality.</li>
                            <li>Local Applicant Support: CTRS provides local regulatory support in key geographies. To conduct a clinical trial, Sponsors have to collaborate with a legal, registered entity in that geography. This is not just an administrative support and entails responsibilities and accountabilities. We as a team are fully prepared to take these responsibilities and accountabilities.</li>
                            <li>Filling Regulatory Applications: Quality output is only possible with a quality input. CTRS understands and applies this concept in every aspect of its process driven services.</li>
                            <li>CTRS has trained and experienced team who supports in compiling the technical dossier, conduct quality check and submits to the regulatory agency. Liaising with regulatory agency post submission to expedite review and approval process is key. A combination team including medical and regulatory experts supports Regulatory Meetings.</li>
                            <li>Country specific Registration: CTRS supports registration to the country specific national website, such as clinicatrials.gov,</li>
                            <li>Post-Approval Maintenance: It involves various submissions like protocol amendments (substantial & non-substantial), IB amendments, Change of site/PI, DSUR & PSUR submission, registration and license renewal etc. </li>
                            <li>Safety Reporting: Safety Reporting (Expedited, Periodic reporting, ) is undertaken in key geographies in the world.</li>
                            <li>Eudravigilance</li>
                            <li>MHRA</li>
                            <li>FDA</li>
                            <li>TGA</li>
                        </ul>
                    </div>
                </div>
                <div className='mgb-15'>
                    <div className='service-title mgb-10 font-20 fs-b pdl-20'>
                        Clinical Trial Registry India
                    </div>
                    <div className='service-sub pdl-20 mgb-15'>
                        All clinical trials conducted in India should be registered before the enrollment of the first participant from India. Trial registration in the CTRI has been made mandatory by the Central Licensing Authority of India.
                    </div>
                    <div className={`${styles['service-desc']} pdl-20`}>
                        <div className='font-16 mgb-10 fs-b'>
                            The Clinical Trials Registry of India Data Set
                        </div>
                        <div className='font-14'>
                            For a trial to be fully registered, the minimum amount of information to be entered in the register is provided under the trial registration data set. The CTRI data set which needs to be submitted are mentioned below:
                        </div>
                        <ul>
                            <li>Public title of study – Study title in simple language intended for the lay public</li>
                            <li>Scientific title of the study (Acronym, if any) as it appears in the study protocol</li>
                            <li>Secondary IDs (if any) - Secondary ID includes any Protocol Number or any other Trial Registry Number, registered in a registry other than the CTRI (for example ClinicalTrials.gov).</li>
                            <li>Principal Investigator’s name, official address, affiliation and designation, contact telephone and fax numbers and email ID. In case of multi-centre study (for trials being conducted in India), information of the designated contact (lead Principal Investigator or overall Trial Coordinator) from India should be included.</li>
                            <li>Contact person scientific query and contact person for public query (who will respond to general queries such as current recruitment status)</li>
                            <li>Source/s of monetary or material support</li>
                            <li>Primary sponsor and secondary Sponsor</li>
                            <li>Countries of recruitment</li>
                            <li>Site/s of study</li>
                            <li>Name of Ethics Committee and approval status</li>
                            <li>Regulatory clearance obtained from CLA</li>
                            <li>Health condition/problem studied</li>
                            <li>Study type - Whether the trial is an Interventional trial, Observational trial or Post marketing surveillance. Trial part of post-graduation thesis should be mentioned accordingly</li>
                            <li>Intervention and comparator agent - The International Non-Proprietary Name should be used if possible (not brand/trade names). For an unregistered drug, the generic name, chemical name, or company serial number may be used.</li>
                            <li>Inclusion and exclusion criteria for participant selection, including age and sex</li>
                            <li>Method of generating randomization sequence</li>
                            <li>Method of allocation concealment</li>
                            <li>Blinding/masking</li>
                            <li>Primary and secondary outcome/s</li>
                            <li>Target sample size</li>
                            <li>Phase of trial</li>
                            <li>Date of first enrolment</li>
                            <li>Estimated duration of trial</li>
                            <li>Recruitment status of trial</li>
                            <li>Brief Summary – The summary may include the primary purpose of the protocol, including a brief statement of the study hypothesis. Links to publication/s details may be included if required.</li>
                        </ul>
                    </div>
                </div>
                <div className='mgb-15'>
                    <div className='service-title mgb-10 font-20 fs-b pdl-20'>
                        Training
                    </div>
                    <div className={`${styles['service-desc']} pdl-20`}>
                        <ul>
                            <li>ICH-GCP training</li>
                            <li>Training on local country specific regulations</li>
                            <li>Standard Operating Procedures (SOP) development</li>
                            <li>Therapeutic area training (Conducted by clinical experts)</li>
                            <li>Clinical Research Coordinator training</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default About;