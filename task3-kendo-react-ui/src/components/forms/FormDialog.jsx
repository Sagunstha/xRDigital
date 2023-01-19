import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import Button from "../buttons/Button";
import { useState } from "react";

const FormDialog = ({ openDialog, setOpenDialog }) => {
  const onCancelEdit = () => {
    setOpenDialog(false);
  };
  return (
    <div>
      {openDialog && (
        <Dialog>
          <Form
            render={(formRenderProps) => (
              <FormElement
                style={{
                  maxWidth: 650,
                }}
              >
                <fieldset className={"k-form-fieldset"}>
                  <div className="mb-3">
                    <Field
                      name={"ProductName"}
                      component={Input}
                      label={"Product Name"}
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      name={"Category"}
                      component={DropDownList}
                      textField={"CategoryName"}
                      label={"Category"}
                    />
                  </div>
                </fieldset>
                <div className="k-form-buttons">
                  <Button label="Update" />
                  <Button label="Cancel" onClick={onCancelEdit} />
                </div>
              </FormElement>
            )}
          />
        </Dialog>
      )}
    </div>
  );
};

export default FormDialog;
