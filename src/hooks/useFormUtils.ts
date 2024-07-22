import { cartSchema } from '../configs/cartFormSchema';
import { TCartFormData, TSchemaKey } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { DeepPartial, useForm } from 'react-hook-form';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

/**
 * Custom hook that sets up a form using react-hook-form and Yup validation for a cart form.
 *
 * @template T - The type of the form data.
 *
 * @param {TSchemaKey} fieldKey - The key for the specific schema validation.
 *
 * @returns {UseFormReturn<T>} - The form object returned by useForm.
 */
export const useCartForm = <T extends DeepPartial<TCartFormData>>(fieldKey: TSchemaKey): UseFormReturn<T> => {
  return useForm<T>({
    resolver: yupResolver(cartSchema[fieldKey] as never) as never,
    mode: 'onBlur',
  });
};
