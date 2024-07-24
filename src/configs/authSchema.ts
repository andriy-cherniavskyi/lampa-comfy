import * as Yup from 'yup';

const passwordShape = Yup.string()
  .required('Please fill in the password.')
  .matches(/^\S+$/, 'Password cannot contain spaces.')
  .min(6, 'Password should contain at least 6 characters');

export const loginSchema: Yup.AnyObjectSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Username should be at least 4 characters.')
    .max(16, 'Username should be 16 characters or less.')
    .required(),
  password: passwordShape,
});

export const signupSchema: Yup.AnyObjectSchema = Yup.object().shape({
  username: Yup.string().max(50, 'Name should be 50 characters or less.').required(),
  password: passwordShape,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "Passwords don't match.")
    .required("Passwords don't match."),
});
