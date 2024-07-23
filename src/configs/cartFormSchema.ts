import * as Yup from 'yup';

const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const cartSchema: Yup.AnyObjectSchema = Yup.object().shape(
  {
    name: Yup.string().max(50, 'Name should be 50 characters or less.').required(),
    surname: Yup.string().max(50, 'Surname should be 50 characters or less.').required(),
    address: Yup.string().max(100, 'Address should be 100 characters or less.').required(),
    phone: Yup.string().min(16).max(17).matches(phoneRegex).required(),
  },
  [['phone', 'phone']],
);
