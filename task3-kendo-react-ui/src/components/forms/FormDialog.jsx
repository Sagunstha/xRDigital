import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import Button from "../buttons/Button";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import categories from "../category/category.json";

const FormDialog = ({ submitHandler, editedHandler }) => {
  const { openDialog, setOpenDialog } = useContext(DataContext);

  return (
    <div>
      {openDialog.isOpen && (
        <Dialog>
          <Form
            onSubmit={
              openDialog.dataItem.dataItem ? editedHandler : submitHandler
            }
            key={Math.random()}
            initialValues={openDialog.dataItem.dataItem}
            render={() => (
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
                      label={"ProductName"}
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      name={"Category"}
                      data={categories}
                      component={DropDownList}
                      textField={"CategoryName"}
                      label={"Category"}
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      name={"UnitPrice"}
                      component={NumericTextBox}
                      textField={NumericTextBox}
                      label={"Price"}
                    />
                  </div>
                  <div className="mb-3">
                    <Field
                      name={"UnitsInStock"}
                      component={NumericTextBox}
                      label={"In stock"}
                    />
                  </div>
                </fieldset>
                <div className="k-form-buttons">
                  <Button
                    type="sumbit"
                    label={openDialog.dataItem.dataItem ? "Update" : "Add"}
                  />
                  <Button
                    label="Cancel"
                    onClick={() =>
                      setOpenDialog({ isOpen: false, dataItem: {} })
                    }
                  />
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
