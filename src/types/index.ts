import { SvgIconTypeMap } from '@mui/material';
import React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { IconType } from 'react-icons/lib';

export type FooterLinks = {
  id: number;
  url: string;
  icon?: string;
  label: string;
}[];

export type Socials = {
  id: number;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}[];

export type Menus = {
  id: number;
  url: string;
  label: string;
}[];

type Feature = {
  id: number;
  icon:
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
      })
    | IconType;
  title: string;
  desc: string;
};

export type CardMenu = {
  id: number;
  name: string;
  image: string;
  price: number;
}[];

export type FeaturesType = Feature[];

export type FeatureProps = Feature;

export interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  children?: React.ReactNode;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface ButtonProps {
  label: string;
  children?: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  className: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export interface AuthInfoProps {
  url: string;
  text: string;
  label: string;
}
