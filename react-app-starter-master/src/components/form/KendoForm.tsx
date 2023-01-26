import { Button } from '@progress/kendo-react-buttons';
import { Field, Form, FormElement } from '@progress/kendo-react-form';
import React from 'react';
import { Link } from 'react-router-dom';

interface FormProps {
    fields: Array<any>;
    title: string;
    buttonLabel: string;
    handleSubmit: (dataItem: submitProps) => any;
}
export interface submitProps {
    dataItem: Array<any>;
}
const Kendoform = ({ title, fields, buttonLabel, handleSubmit }: FormProps) => {
    return (
        <div className="form">
            <Form
                onSubmit={handleSubmit}
                render={() => (
                    <FormElement
                        style={{
                            width: '35%',
                            minWidth: 400,
                        }}
                    >
                        <fieldset className={'k-form-fieldset'}>
                            <legend className={'k-form-legend'}>{title} </legend>
                            {fields.map((field, index) => (
                                <div className="mb-3">
                                    <Field
                                        key={index}
                                        label={field.label}
                                        name={field.name}
                                        type={field.type}
                                        component={field.component}
                                        required={field.required}
                                        validator={field.validator}
                                    />
                                </div>
                            ))}
                        </fieldset>
                        <div className="k-form-buttons">
                            <Button
                                type={'submit'}
                                themeColor="info"
                                size="large"
                                className="buttons-container-button"
                                icon="refresh"
                            >
                                {buttonLabel}
                            </Button>
                            {title === 'Log In' ? (
                                <div className="form-buttons">
                                    Do not have an account?
                                    <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>
                                        Sign Up
                                    </Link>
                                </div>
                            ) : (
                                <div className="form-buttons">
                                    Already have an account?
                                    <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                                        Log In
                                    </Link>
                                </div>
                            )}
                        </div>
                    </FormElement>
                )}
            />
        </div>
    );
};
export default Kendoform;
