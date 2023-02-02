export interface FormFieldProps {
    type?: string;
    label: string;
    name: string;
    required?: boolean;
    component: React.ElementType;
    validator?: any;
    matchWith?: any;
    addon?: JSX.Element;
    disabled?: boolean;
}
