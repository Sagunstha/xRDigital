import { FormFieldProps } from 'interfaces/interface';
import { EmailInput, FormEditor, NameInput } from '../../components/form/FormInputs';
import { emailValidator } from '../../validator/validator';

const feedbackFormField: FormFieldProps[] = [
    { type: 'text', label: 'Name', name: 'name', required: true, component: NameInput },
    { type: 'email', label: 'Email', name: 'email', required: true, component: EmailInput, validator: emailValidator },
    { type: 'text', label: 'Description', name: 'description', required: true, component: FormEditor },
];
export default feedbackFormField;
