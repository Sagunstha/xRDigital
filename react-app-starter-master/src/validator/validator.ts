const emailRegex = new RegExp(/\S+@\S+\.\S+/);
export const emailValidator = (value: any) => (emailRegex.test(value) ? '' : 'Please enter a valid email.');

const passwordRegex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
export const passwordValidator = (value: any) =>
    passwordRegex.test(value) ? '' : 'Passsword must include capital letter, special character and numbers ';
