import { Gender, GenderType, RegisterInputType } from '@/types';

export const registerInfoInputs: RegisterInputType = [
  {
    id: 1,
    name: 'name',
    label: 'Name',
    placeholder: 'Enter your name',
  },
  {
    id: 2,
    name: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
  },
  {
    id: 3,
    name: 'email',
    type: 'email',
    label: 'email',
    placeholder: 'Enter your email address',
  },
];

export const registerLocationInputs: RegisterInputType = [
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

export const genderOptions: GenderType = [
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
