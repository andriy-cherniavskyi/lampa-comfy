import { cartSchema } from './configs/cartFormSchema';
import { ReactNode } from 'react';

export type TLayoutProps = {
  children: ReactNode;
};

export type TCartFormData = {
  name: string;
  surname: string;
  address: string;
  phone: string;
};

export type TLoginFormData = {
  username: string;
  password: string;
};

export type TSignupFormData = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type TUser = {
  username: string;
  id: number;
  firstName?: string;
  lastName?: string;
};

export type TSchemaKey = keyof typeof cartSchema;

export type TCartFormDataKeys = keyof TCartFormData;
