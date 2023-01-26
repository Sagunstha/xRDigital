import { FormFieldProps } from 'interfaces/interface';
import { EmailInput, PasswordInput } from '../../components/form/FormInputs';
import { emailValidator, passwordValidator } from '../../validator/validator';

const loginFields: FormFieldProps[] = [
    { type: 'email', label: 'Email', name: 'email', required: true, component: EmailInput, validator: emailValidator },
    {
        type: 'password',
        label: 'Password',
        name: 'password',
        required: true,
        component: PasswordInput,
        validator: passwordValidator,
    },
];
export default loginFields;
