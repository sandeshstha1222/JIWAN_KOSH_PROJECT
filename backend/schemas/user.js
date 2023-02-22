import * as yup from "yup";

const userSchema = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6, 'Password must be minimum 6 characters.').max(18,'Password must be less than 18 characters.'),
    cpassword: yup.string().required(),
    role: yup.string().required(),
});

export default userSchema;