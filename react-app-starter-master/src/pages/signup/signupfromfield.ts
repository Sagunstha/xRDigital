import { Input } from '@progress/kendo-react-inputs';
import { FormFieldProps } from 'interfaces/interface';
import { EmailInput, PasswordInput } from '../../components/form/FormInputs';
import { emailValidator, passwordValidator } from '../../validator/validator';

const SignupFields: FormFieldProps[] = [
    { type: 'text', label: 'Name', name: 'name', component: Input, required: true },
    { type: 'email', label: 'Email', name: 'email', component: EmailInput, validator: emailValidator, required: true },
    {
        label: 'Password',
        name: 'password',
        component: PasswordInput,
        validator: passwordValidator,
        required: true,
    },
    {
        type: 'password',
        label: 'Confirm Password',
        name: 'confirmPassword',
        component: PasswordInput,
        validator: passwordValidator,
        required: true,
    },
];
export default SignupFields;
