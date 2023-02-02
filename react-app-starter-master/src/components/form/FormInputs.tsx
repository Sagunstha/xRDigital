import { Editor, EditorTools } from '@progress/kendo-react-editor';
import { FieldRenderProps } from '@progress/kendo-react-form';
import { Input } from '@progress/kendo-react-inputs';
import { Error, Label } from '@progress/kendo-react-labels';
import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
const { Bold, Italic, Underline, AlignLeft, AlignRight, AlignCenter, Indent, Outdent, OrderedList, UnorderedList } =
    EditorTools;

export const FormEditor = ({ validationMessage, visited, onChange, disabled, ...others }: FieldRenderProps) => {
    console.log(disabled);
    const handleChange = (event: any) => {
        onChange({ value: event.html });
    };

    return (
        <div>
            <Label style={{ fontSize: 15, fontWeight: 500 }}>Description</Label>
            {disabled ? (
                <Editor
                    tools={[
                        [Bold, Italic, Underline],
                        [AlignLeft, AlignRight, AlignCenter],

                        [OrderedList, UnorderedList, Indent, Outdent],
                    ]}
                    value=""
                    contentStyle={{ height: 160, cursor: 'not-allowed ' }}
                />
            ) : (
                <Editor
                    onChange={handleChange}
                    tools={[
                        [Bold, Italic, Underline],
                        [AlignLeft, AlignRight, AlignCenter],
                        [OrderedList, UnorderedList, Indent, Outdent],
                    ]}
                    contentStyle={{ height: 160 }}
                />
            )}
        </div>
    );
};

export const EmailInput = ({ validationMessage, visited, ...others }: FieldRenderProps) => {
    return (
        <div>
            <div>
                <Input {...others} />
            </div>

            {visited && validationMessage && <Error>{validationMessage}</Error>}
        </div>
    );
};
export const NameInput = ({ validationMessage, visited, ...others }: FieldRenderProps) => {
    return (
        <div>
            <div>
                <Input {...others} />
            </div>
        </div>
    );
};
export const PasswordInput = ({ validationMessage, visited, ...others }: FieldRenderProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="input-password">
                <Input {...others} type={showPassword ? 'text' : 'password'} />
                <a className="toggle-icon" onClick={togglePassword}>
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </a>
            </div>
            {visited && validationMessage && <Error>{validationMessage}</Error>}
            {/* <div className="form-buttons">
                Do not have an account?
                <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>
                    Sign Up
                </Link>
            </div> */}
        </div>
    );
};

export const PasswordMatchValidator = (dataItem: any) => {
    if (dataItem.password !== dataItem.confirmPassword) {
        alert('Passwords do not match');
    } else alert(JSON.stringify(dataItem, null, 2));
};
