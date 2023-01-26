import React from 'react';
import { PasswordMatchValidator } from '../../components/form/FormInputs';
import Kendoform, { submitProps } from '../../components/form/KendoForm';
import SignupFields from './signupfromfield';

function Signup() {
    const handleSubmit = (dataItem: submitProps) => {
        console.log(dataItem);
        return PasswordMatchValidator(dataItem);
    };

    return <Kendoform title="Sign Up" fields={SignupFields} buttonLabel="Sign Up" handleSubmit={handleSubmit} />;
}

export default Signup;
