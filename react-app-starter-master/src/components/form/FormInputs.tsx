import { Input } from '@progress/kendo-react-inputs';
import { Error } from '@progress/kendo-react-labels';
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const EmailInput = (fieldRenderProps: any) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
        <div>
            <div>
                <Input {...others} />
            </div>

            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};
export const PasswordInput = (fieldRenderProps: any) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const { validationMessage, visited, type, ...others } = fieldRenderProps;
    return (
        <div>
            <div className="input-password">
                <Input {...others} type={showPassword ? 'text' : 'password'} />
                <a className="toggle-icon" onClick={togglePassword}>
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </a>
            </div>
            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};

export const PasswordMatchValidator = (dataItem: any) => {
    if (dataItem.password !== dataItem.confirmPassword) {
        alert('Passwords do not match');
    } else alert(JSON.stringify(dataItem, null, 2));
};
