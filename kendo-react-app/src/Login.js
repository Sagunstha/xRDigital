import { Input } from "@progress/kendo-react-inputs";
import { useState } from "react";
import "./App.scss";
const Login = () => {
  // const formRef = useRef(null);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);
  const usernameValidationMessage =
    "Your username should contain only letters!";
  const passwordValidationMessage =
    "Please enter password between 6 and 16 characters!";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    // formRef.current.reset();
    setFormData({
      username: "",
      password: "",
      confirmpassword: "",
      email: "",
    });
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="">
      <div className="col-xs-12 col-sm-6 offset-sm-3 example-col formdiv">
        <form className="k-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend className="formlabel"> Create new account:</legend>
            <div className="mb-3">
              <Input
                className="inputs custom-input"
                name="username"
                label="First Name"
                style={{ width: "100%" }}
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required={true}
                minLength={2}
                pattern={"[A-Za-z]+"}
                validationMessage={usernameValidationMessage}
              />
            </div>
            <div className="mb-3">
              <Input
                className="inputs custom-input"
                name="password"
                type="password"
                label="Password"
                style={{ width: "100%" }}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required={true}
                minLength={6}
                maxLength={18}
                validationMessage={passwordValidationMessage}
              />
            </div>
            <div className="mb-3">
              <Input
                className="inputs custom-input"
                name="confirmpassword"
                type="password"
                label="Confirm Password"
                value={formData.confirmpassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmpassword: e.target.value })
                }
                style={{ width: "100%" }}
                required={true}
                minLength={6}
                maxLength={18}
                validationMessage={passwordValidationMessage}
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </fieldset>
          <input
            type="submit"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            value="Search"
          />
        </form>
      </div>
      {success && (
        <div
          className="alert alert-success"
          style={{ position: "absolute", top: "2px" }}
        >
          Form Submitted
        </div>
      )}
    </div>
  );
};

export default Login;
