import React from 'react';
import Kendoform, { submitProps } from '../../components/form/KendoForm';
import loginFields from './loginformfield';
const LoginForm = () => {
    const handleSubmit = (dataItem: submitProps) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <div className="login-page">
            <Kendoform title="Log In" fields={loginFields} buttonLabel="Log In" handleSubmit={handleSubmit} />

            {/* <Button themeColor="error">Go To SignUp</Button> */}
        </div>
    );
};

export default LoginForm;
