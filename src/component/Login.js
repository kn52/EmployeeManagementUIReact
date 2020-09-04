import React, {useState} from 'react';
import '../css/Login.css';
import DisplayAppBar from '../util/DisplayAppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

export default function Login () {

    const history = useHistory();

    const initialState = { 
        email:'',
        password:'',
    }

    const [{email,password},setValues]=useState(initialState);

    const handleValues = (event) => {
        event.persist();
        setValues(values=>({...values,[event.target.name]: event.target.value}));
    }

    const handleSave = () => {
        setValues({ ...initialState });
        history.push({
            pathname:'/'
        })
    }

    const handleCancel = () => { setValues({ ...initialState }); }
    
    return (
        <>
            <div className="login_container">
                <div className="login_title_container">
                    <DisplayAppBar title='Greeting App'/>
                </div>
                <div className="login_space"></div>
                <div className="login_child">
                    <div className="login_content">
                        <h1><span className="login_title">Login</span></h1>
                    </div>

                    <form id="baseForm" onSubmit={handleSave} onReset={handleCancel}>
                        <div className="login_content">
                            <TextField name="email" label="Email" variant="outlined" value={email}
                                onChange={handleValues} size="small" required />
                        </div>

                        <div className="login_bar_space"></div>

                        <div className="login_content">
                            <TextField name="password" label="Password" variant="outlined" value={password}
                                onChange={handleValues} size="small" required />
                        </div>

                        <div className="login_space"></div>
                            
                        <div className="login_content">
                            <Button type="submit" className="login_button" >
                                Login
                            </Button>
                        </div>     
                    </form>
                </div>
            </div>
        </>
    );
}