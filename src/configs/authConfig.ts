export const loginFormFields = [
  {
    label: 'Username',
    fieldName: 'username',
    isRequired: true,
    type: 'text',
  },
  {
    label: 'Password',
    fieldName: 'password',
    isRequired: true,
    type: 'text',
  },
] as const;

export const signupFormFields = [
  {
    label: 'Username',
    fieldName: 'username',
    isRequired: true,
    type: 'text',
  },
  {
    label: 'Password',
    fieldName: 'password',
    isRequired: true,
    type: 'text',
  },
  {
    label: 'Confirm Password',
    fieldName: 'confirmPassword',
    isRequired: true,
    type: 'text',
  },
] as const;
