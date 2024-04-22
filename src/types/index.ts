import { SvgIconTypeMap } from '@mui/material';
import React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { IconType } from 'react-icons/lib';

export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  ingredients?: string[];
  quantity: number;
};

export type CartType = CartItem[];

export interface CartStore {
  products: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface CartActionType {
  reset(): void;
  addToCart(product: CartItem): void;
  clearCart(): void;
  removeFromCart(payload: number): void;
  toggleQuantity(payload: { type: string; id: number }): void;
  calcTotals(): void;
}

export interface CartMenuProps {
  products: CartItem[];
  totalPrice: number;
  onIncrement(e: React.MouseEvent<HTMLButtonElement>, productId: number): void;
  onDecrement(e: React.MouseEvent<HTMLButtonElement>, productId: number): void;
  onRemove(productId: number): void;
}

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
  ingredients?: string[];
}[];

export type FeaturesType = Feature[];

export type FeatureProps = Feature;

export type RelatedProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
}[];

export type ReviewType = {
  id: number;
  desc: string;
  rating: number;
  user: {
    name: string;
    image: string;
  };
}[];

type ProfileLink = {
  id: number;
  url: string;
  icon: string;
  label: string;
}[];

export type ProfileMenu = {
  label: string;
  links: ProfileLink;
}[];

type OrderItem = {
  id: number;
  name: string;
  price: number;
  status: 'preparing' | 'on the way' | 'delivered';
  createdAt: string;
};

export type OrderType = OrderItem[];

export interface SingleOrderType {
  id: number;
  name: string;
  address: string;
  total: number;
  createdAt: string;
  deliveryAt: string;
}

type AccountCard = {
  id: number;
  count?: number;
  price?: number;
  label: string;
  icon: string;
};

export type AccountCardType = AccountCard[];

interface ProductType {
  id: number;
  name: string;
  image: string;
  price: number;
  ingredients?: string[];
  quantity?: number;
}

export interface ProductCardProps {
  product: ProductType | CartItem;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  error?: string;
  formatPrice?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  type?: 'tel' | 'number';
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  label?: string;
  error?: string;
  onChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
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

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginErrors {
  email?: string;
  password?: string;
}

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterErrors {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface UserDataErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface UserPassword {
  password: string;
  confirmPassword: string;
}

export interface UserPasswordErrors {
  password?: string;
  confirmPassword?: string;
}

export interface ProductData {
  name: string;
  desc: string;
  price: number;
}

export interface ProductErrors {
  name?: string;
  desc?: string;
  price?: string;
  ingredients?: string;
}

export interface ProductListsProps {
  products: CardMenu;
}

export interface ProductInfoProps {
  rating: number;
}

export interface ReviewProps {
  id: number;
  desc: string;
  rating: number;
  user: {
    name: string;
    image: string;
  };
}

export interface RelatedProductProps {
  product: ProductType | CartItem;
}

export interface StarRatingProps {
  name: 'read-only' | 'hover-feedback' | 'disabled' | 'no-value';
  value: number;
  readOnly?: boolean;
  onChange?:
    | ((
        event: React.SyntheticEvent<Element, Event>,
        value: number | null
      ) => void)
    | undefined;
}

export interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export type AccountCardProps = AccountCard;

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  size?: 'small' | 'full';
  disabled?: boolean;
  actionLabel?: string;
  secondaryActionLabel?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  onClose(): void;
  onSubmit(): void;
  secondaryAction?(): void;
}

export interface AccountModalStore {
  isOpen: boolean;
}

export interface AccountModalActionType {
  onOpen(): void;
  onClose(): void;
}

export interface ProductModalStore {
  isOpen: boolean;
}

export interface ProductModalActionType {
  onOpen(): void;
  onClose(): void;
}

export interface AccountMenuStore {
  isOpen: boolean;
}

export interface AccountMenuType {
  onOpen(): void;
  onClose(): void;
  toggle(): void;
}

export interface RecipientStore {
  isOpen: boolean;
}

export interface RecipientAction {
  onOpen(): void;
  onClose(): void;
}

export interface AddressStore {
  isOpen: boolean;
}

export interface AddressAction {
  onOpen(): void;
  onClose(): void;
}

export interface ProductInputsProps {
  name: string;
  desc: string;
  price: number;
  errors?: ProductErrors;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

export interface ProductImageProps {
  ingredient: string;
  ingredients?: string[];
  error?: string;
  onAdd(e: React.MouseEvent<HTMLButtonElement>): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onDelete(e: React.MouseEvent<HTMLSpanElement>, value: string): void;
  onSelect(file: File[]): void;
}

export interface DropZoneProps {
  onSelect(file: File[]): void;
}

export interface RecipientData {
  name: string;
  email: string;
  phone: string;
}

export interface RecipientErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export interface AddressData {
  state: string;
  city: string;
  street: string;
}

export interface AddressErrors {
  state?: string;
  city?: string;
  street?: string;
}

export interface ReviewData {
  desc: string;
  name: string;
  email: string;
  consent?: boolean;
}

export interface ReviewErrors {
  desc?: string;
  name?: string;
  email?: string;
  rating?: string;
}

export interface SearchProps {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

export interface OrderTableProps {
  isAdmin: boolean;
  data: OrderItem[];
}

export interface EmptyStateProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  imgSrc?: string;
  showReset?: boolean;
}

export interface SearchClientProps {
  products: CardMenu;
}
