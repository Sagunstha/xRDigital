import React from "react";
import { Input } from "@progress/kendo-react-inputs";
import Button from "../buttons/Button";

const Form = ({ label = "Create new account:" }) => {
  return (
    <div>
      <div className="col-xs-12 col-sm-6 offset-sm-3 example-col formdiv">
        <form>
          <fieldset>
            <legend className="formlabel">{label} </legend>
            <div className="mb-3">
              <Input
                className="inputs custom-input"
                name="username"
                label="First Name"
                style={{ width: "100%" }}
                required={true}
                minLength={2}
                pattern={"[A-Za-z]+"}
              />
            </div>
            <div className="mb-3">
              <Input
                className="inputs custom-input"
                name="password"
                type="password"
                label="Password"
                style={{ width: "100%" }}
                required={true}
                minLength={6}
                maxLength={18}
              />
            </div>
            <div className="mb-3">
              <Input
                className="inputs custom-input"
                name="confirmpassword"
                type="password"
                label="Confirm Password"
                style={{ width: "100%" }}
                required={true}
                minLength={6}
                maxLength={18}
              />
            </div>
            <div className="mb-3">
              <Input
                className="inputs custom-input"
                name="email"
                type="email"
                label="Email Address"
                style={{ width: "100%" }}
                required={true}
              />
            </div>
          </fieldset>
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Form;
