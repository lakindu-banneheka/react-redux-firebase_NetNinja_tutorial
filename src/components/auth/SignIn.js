import React, { useState } from 'react';

const SignIn = () => {
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');


    const handleChangeEmail = (e) => {
        setemail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setpassword(e.target.value);
    }

    const onsubmit = (e) => {
        e.preventDefault();
        console.log(email , password , 'state');
    }


    return (
        <div className='container' >
            <form className='white' onSubmit={onsubmit} >
                <h5 className='grey-text text-darken-3'>Sign In</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={handleChangeEmail} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={handleChangePassword} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;