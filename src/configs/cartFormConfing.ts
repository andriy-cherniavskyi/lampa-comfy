export const cartFormFields = [
  {
    label: 'Name',
    fieldName: 'name',
    isRequired: true,
    type: 'text',
  },
  {
    label: 'Surname',
    fieldName: 'surname',
    isRequired: true,
    type: 'text',
  },
  {
    label: 'Address',
    fieldName: 'address',
    isRequired: true,
    type: 'text',
  },
  {
    label: 'Phone',
    fieldName: 'phone',
    isRequired: true,
    type: 'phone',
  },
] as const;
