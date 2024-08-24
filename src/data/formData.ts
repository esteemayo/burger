import { Gender, GenderType } from '@/types';

export const registerLocationInputs = [
  {
    id: 1,
    name: 'street',
    label: 'Street',
    placeholder: 'Enter your street',
  },
  {
    id: 2,
    name: 'city',
    label: 'City',
    placeholder: 'Enter your city',
  },
  {
    id: 3,
    name: 'state',
    label: 'State',
    placeholder: 'Enter your state',
  },
];

export const options: GenderType = [
  {
    value: Gender.MALE,
    label: 'Male',
  },
  {
    value: Gender.FEMALE,
    label: 'Female',
  },
  {
    value: Gender.OTHER,
    label: 'Other',
  },
];
