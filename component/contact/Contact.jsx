import React,{useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Styles from './contact.module.scss';
import axios from 'axios';

const Contact = (props) =>{
    const [userData, setUserData] = useState({});
    
    const handleChange=(key,value) =>{
        let info = {...userData};
        info[key] = value;
        setUserData({...info});
    }

    const handleSubmit= async() =>{
        if(Object.keys(userData).length){
            let formData = {...userData};
            try{
                let res = await axios.post('/api/addUser', formData)
                console.log(res.data);
            }catch(err){
                console.log(err);    
            }
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
                                onChange={(e)=>{handleChange('firstName', e.target.value)}}
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
                                onChange={(e)=>{handleChange('lastName', e.target.value)}}
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
                                onChange={(e)=>{handleChange('email', e.target.value)}}
                                />
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={6}>
                        <div className={`card_holder`}>
                            <TextField
                                className={`${Styles.text_input}`} 
                                id="phone" 
                                value={userData.contactNo || ''}
                                type='number'
                                label="Mobile No."
                                inputProps={{maxLength:'10'}} 
                                variant="outlined" 
                                onChange={(e)=>{handleChange('contactNo', e.target.value)}}
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
                                onChange={(e)=>{handleChange('description', e.target.value)}}
                            />
                        </div>
                    </Grid>
                    <Grid className="text-center" xs={12}>
                            <div className={`card_holder ${Styles.submit_btn}`}>
                                <Button 
                                    variant="contained"
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
