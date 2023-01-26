import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [errorUserName, setErrorUserName] = useState ("");
    const [errorEmail, setErrorEmail] = useState ("");
    const [errorPassword, setErrorPassword] = useState ("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState ("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const handleUserName= (e) => {
        setUsername(e.target.value);
        if (e.target.value.length < 2){
            setErrorUserName("El campo debe tener almenos dos caracteres.")
        } else {
            setErrorUserName("");
        }
    }

    const handleEmail= (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5){
            setErrorEmail("El campo debe tener almenos cinco caracteres.")
        } else {
            setErrorEmail("");
        }
    }

    const handlePassword= (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8){
            setErrorPassword("El campo debe tener almenos ocho caracteres.")
        } else {
            setErrorPassword("");
        }
    }
    const handleConfirmPassword= (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === password){
            setErrorConfirmPassword("")
        } else {
            setErrorConfirmPassword("de ser igual que la contraseña");
        }
    }
    
    
    return (
        <form onSubmit={ createUser }>
        {
            hasBeenSubmitted ? 
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3> 
        }
	    <div>
                <label>Username: </label> 
                <input type="text" onChange={ handleUserName } />
                {
                    errorUserName ? <p className="error">{errorUserName}</p> : ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail} />
                {
                    errorEmail ? <p className="error">{errorEmail}</p> : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    errorPassword ? <p className="error">{errorPassword}</p> : ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirmPassword } />
                {
                    errorConfirmPassword ? <p className="error">{errorConfirmPassword}</p> : ''
                }
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );
};
    
export default UserForm;