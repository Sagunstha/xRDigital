import { Button } from '@progress/kendo-react-buttons';
import React, { useState } from 'react';
import Kendoform, { submitProps } from '../../components/form/KendoForm';
import feedbackFormField from './feedbackFormField';

const FeedbackForm = () => {
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = (dataItem: submitProps) => {
        alert(JSON.stringify(dataItem, null, 2));
    };
    return (
        <div>
            <Kendoform
                title="Feedback"
                fields={feedbackFormField}
                buttonLabel="Submit"
                handleSubmit={handleSubmit}
                disabled={disabled}
            />
            <Button onClick={() => setDisabled(!disabled)}>{disabled ? 'Enable Editor' : 'Disable Editor'}</Button>
        </div>
    );
};

export default FeedbackForm;
