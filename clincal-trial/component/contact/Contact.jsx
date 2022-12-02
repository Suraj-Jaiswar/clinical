import React,{useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Styles from './contact.module.scss';

const Contact = (props) =>{
    const [userData, setUserData] = useState({});
    
    const handleChange=(key,value) =>{
        let info = {...contactInfo};
        info[key] = value;
        setUserData({...info});
    }

    const handleSubmit= async() =>{
        if(Object.keys(userData).length){
            let formData = {...userData};
            let res = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
        }
    }

    return (
        <section className="section-container">
            <Container >
                <Grid>
                    <div className={`section-heading text-center font-38`}>
                        <h3 className="section-title">Contact Us</h3>
                    </div>
                </Grid>
                <Grid className={`${Styles.form_holder}`} container spacing={2}>
                    <Grid className="text-center" xs={6}>
                        <div className={`card_holder`}>
                            <TextField
                                className={`${Styles.text_input}`} 
                                id="first_name" 
                                label="First Name" 
                                variant="outlined" 
                                onClick={(e)=>{handleChange('first_name', e.target.value)}}
                                />
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={6}>
                        <div className={`card_holder`}>
                            <TextField
                                className={`${Styles.text_input}`} 
                                id="last_name" 
                                label="Last Name" 
                                variant="outlined" 
                                onClick={(e)=>{handleChange('last_name', e.target.value)}}
                                />
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={6}>
                        <div className={`card_holder`}>
                            <TextField
                                className={`${Styles.text_input}`} 
                                id="email" 
                                label="Email" 
                                variant="outlined" 
                                onClick={(e)=>{handleChange('email', e.target.value)}}
                                />
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={6}>
                        <div className={`card_holder`}>
                            <TextField
                                className={`${Styles.text_input}`} 
                                id="phone" 
                                label="Mobile No." 
                                variant="outlined" 
                                onClick={(e)=>{handleChange('mobile', e.target.value)}}
                                />
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={12}>
                        <div className={`card_holder`}>
                            <TextField
                                className={`${Styles.text_input}`} 
                                id="desc" 
                                label="Description" 
                                variant="outlined" 
                                multiline
                                maxRows={4}
                                rows={4}
                                onClick={(e)=>{handleChange('desc', e.target.value)}}
                            />
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={6}>
                        <div className={`card_holder`}>
                            <Button 
                                variant="outlined"
                                className={`${Styles.text_input}`}
                                onClick={handleSubmit} 
                            >
                                Submit
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default Contact;
