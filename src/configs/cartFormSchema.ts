import * as Yup from 'yup';

export const cartSchema: Yup.AnyObjectSchema = Yup.object().shape(
  {
    name: Yup.string().max(50, 'Name should be 50 characters or less.'),
    surname: Yup.string().max(50, 'Surname should be 50 characters or less.'),
    address: Yup.string().max(100, 'Address should be 100 characters or less.'),
    phone: Yup.string().when('phone', {
      is: (val: string) => val?.length > 0,
      then: schema => schema.min(6, 'The phone number should be at least 6 numbers long.').required(),
      otherwise: schema => schema.notRequired(),
    }),
  },
  [['phone', 'phone']],
);
