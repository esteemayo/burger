import { IconType } from 'react-icons/lib';
import React from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { User } from 'next-auth';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type AuthLinkType = {
  id: number;
  url: string;
  icon: string;
  label: string;
  urlName: string;
  imgName: string;
}[];

export type UserLinkType = {
  id: number;
  url: string;
  icon: string;
  label: string;
}[];

export type SidebarMenuType = {
  id: number;
  url: string;
  icon: string;
  label: string;
}[];

export const enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export type GenderType = {
  value: Gender;
  label: string;
}[];

export type CartItem = {
  id: string;
  createdAt: string;
  name: string;
  desc: string;
  image: string;
  price: number;
  ingredients?: string[];
  likes: string[];
  isFeatured: boolean;
  ratingsAverage: number;
  ratingsQuantity: number;
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
  removeFromCart(payload: string): void;
  toggleQuantity(payload: { type: string; id: string }): void;
  calcTotals(): void;
}

export interface AvatarProps {
  imgSrc: string;
  desc?: string;
}

export interface UserMenuProps {
  currentUser: CurrentUserType | undefined;
}

export interface CartMenuProps {
  products: CartItem[];
  totalPrice: number;
  onIncrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onDecrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onRemove(productId: string): void;
}

export interface CartMenuItemsProps {
  products: CartItem[];
  totalPrice: number;
  onIncrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onDecrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onRemove(productId: string): void;
}

export interface CartMenuItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onIncrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onDecrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onRemove(productId: string): void;
}

export interface CartItemsProps {
  products: CartItem[];
  cardClasses: 'cardItems hide' | 'cardItems';
  onIncrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onDecrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onRemove(productId: string): void;
}

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onIncrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onDecrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onRemove(productId: string): void;
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
  desc: string;
  image: string;
  price: number;
  ingredients?: string[];
}[];

export type FeaturesType = Feature[];

export type FeatureProps = Feature;

export type RelatedProductType = {
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  ingredients?: string[];
}[];

export type ReviewsType = {
  id: number;
  desc: string;
  rating: number;
  user: {
    name: string;
    image: string;
  };
}[];

export type ReviewType = {
  id: number;
  desc: string;
  rating: number;
  productId: string;
  userId: string;
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

export type StatusType = 'not paid' | 'preparing' | 'on the way' | 'delivered';

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  products: ProductType[];
  userId: string;
  status: StatusType;
  createdAt: string;
};

export type OrderType = OrderItem[];

export interface SingleOrderType {
  id: number;
  name: string;
  address: string;
  total: number;
  createdAt: string;
  deliveryDate: string;
}

export interface OrderStatusProps {
  createdAt: string;
  status: StatusType;
}

type AccountCard = {
  id: number;
  count?: number;
  price?: number;
  label: string;
  icon: string;
};

export type AccountCardType = AccountCard[];

export type ProductType = {
  id: string;
  createdAt: string;
  name: string;
  desc: string;
  image: string;
  price: number;
  ingredients?: string[];
  likes: string[];
  isFeatured: boolean;
  ratingsAverage: number;
  ratingsQuantity: number;
  quantity: number;
};

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

export interface GenderSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  error?: string;
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
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

export interface SlideButtonsProps {
  onPrev(e: React.MouseEvent<HTMLButtonElement>): void;
  onNext(e: React.MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
  prevBtnClasses: 'btnPrev show' | 'btnPrev';
  nextBtnClasses: 'btnPrev show' | 'btnPrev';
}

export interface SlideButtonProps {
  label: string;
  disabled?: boolean;
  className?: string;
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
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
  username: string;
  password: string;
}

export interface LoginErrors {
  username?: string;
  password?: string;
}

export interface RegisterData {
  name: string;
  username: string;
  email: string;
  image?: string;
  street: string;
  city: string;
  state: string;
  phone: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterErrors {
  name?: string;
  username?: string;
  email?: string;
  street?: string;
  city?: string;
  state?: string;
  phone?: string;
  gender?: string;
  password?: string;
  confirmPassword?: string;
}

export interface RegisterInfoProps {
  name: string;
  username: string;
  email: string;
  errors: RegisterErrors;
  onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void;
}

export interface RegisterLocationProps {
  street: string;
  city: string;
  state: string;
  errors: RegisterErrors;
  onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void;
}

export interface RegisterCredentialsProps {
  phone: string;
  password: string;
  confirmPassword: string;
  errors: RegisterErrors;
  passwordIcon: 'icon show' | 'icon';
  confirmIcon: 'icon show' | 'icon';
  isPassword: boolean;
  isConfirmPassword: boolean;
  onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void;
  onTogglePassword(e: React.MouseEvent<HTMLSpanElement>): void;
  onToggleConfirm(e: React.MouseEvent<HTMLSpanElement>): void;
}

export interface RegisterAvatarProps {
  gender: string;
  error?: string;
  onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void;
  onSelect(file: File[]): void;
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
  image?: string;
  address: string;
}

export interface UserDataErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface AccountAvatarProps {
  file: File | undefined;
  avatar: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface AccountDataFormProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  errors: UserDataErrors;
  loading: boolean;
  currentUser: CurrentUserType | undefined;
  onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
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
  data: ProductType[];
  loading: boolean;
  productToShow?: number;
  type?: 'products' | 'search';
}

export type SingleProductType = {
  id: string;
  createdAt: string;
  name: string;
  desc: string;
  image: string;
  price: number;
  ingredients?: string[];
  likes: string[];
  isFeatured: boolean;
  ratingsAverage: number;
  ratingsQuantity: number;
  reviews: ReviewType;
  quantity: number;
};

export interface ProductClientProps {
  productId: string;
}

export interface HeroProps {
  name: string;
  image: string;
}

export interface ProductInfoProps {
  product: SingleProductType | CartItem;
  currentUser: CurrentUserType | undefined;
  onUpdate: React.Dispatch<React.SetStateAction<SingleProductType | null>>;
}

export interface ProductReviewProps {
  actionId: string;
  currentUser: CurrentUserType;
  productReviews: ReviewType;
}

export interface ReviewsProps {
  actionId: string;
  loading?: boolean;
  reviews: ReviewType;
  productReviews: ReviewType;
}

export interface ReviewProps {
  id: number;
  desc: string;
  rating: number;
  userId: string;
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

export interface SidebarStore {
  isOpen: boolean;
}

export interface SidebarActionType {
  onOpen(): void;
  onClose(): void;
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

export interface StatusStore {
  order: OrderItem | null;
  isOpen: boolean;
}

export interface StatusAction {
  onOpen(): void;
  onClose(): void;
  onSelect(value: OrderItem): void;
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
  loading?: boolean;
  error?: string;
  onAdd(e: React.MouseEvent<HTMLButtonElement>): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onDelete(e: React.MouseEvent<HTMLSpanElement>, value: string): void;
  onSelect(file: File[]): void;
}

export interface IngredientInputProps {
  ingredient: string;
  ingredients?: string[];
  loading?: boolean;
  error?: string;
  onAdd(e: React.MouseEvent<HTMLButtonElement>): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onDelete(e: React.MouseEvent<HTMLSpanElement>, value: string): void;
}

export interface IngredientsProps {
  ingredients?: string[];
  loading?: boolean;
  disabled?: boolean;
  onAdd(e: React.MouseEvent<HTMLButtonElement>): void;
  onDelete(e: React.MouseEvent<HTMLSpanElement>, value: string): void;
}

export interface IngredientProps {
  ingredient: string;
  onDelete(e: React.MouseEvent<HTMLSpanElement>, value: string): void;
}

export interface DropZoneProps {
  id?: string;
  label?: string;
  small?: boolean;
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

export interface RecipientInputsProps {
  name: string;
  email: string;
  phone: string;
  errors: RecipientErrors;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
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

export interface AddressInputsPropa {
  city: string;
  state: string;
  street: string;
  errors: AddressErrors;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface ReviewData {
  desc: string;
  consent?: boolean;
}

export interface ReviewErrors {
  desc?: string;
  rating?: string;
}

export interface SearchProps {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

export interface OrderTableProps {
  isAdmin: Boolean | undefined;
  data: OrderItem[];
}

export interface TableProps {
  data: OrderItem[];
  columns: ColumnType;
  isAdmin: Boolean | undefined;
  dimension: number;
  orderStatus(status: StatusType): string;
  onClick(e: React.MouseEvent<HTMLButtonElement>, order: OrderItem): void;
}

export interface TableHeadProps {
  columns: ColumnType;
}

export interface TableBodyProps {
  data: OrderItem[];
  isAdmin: Boolean | undefined;
  dimension: number;
  orderStatus(status: StatusType): string;
  onClick(e: React.MouseEvent<HTMLButtonElement>, order: OrderItem): void;
}

export interface StatusFormProps {
  actionId: string;
  status: string;
}

export type ColumnType = {
  path: string;
  label: string;
}[];

export interface EmptyStateProps {
  url?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  imgSrc?: string;
  label?: string;
  showReset?: boolean;
}

export interface OrderDetailProps {
  order: {
    id: string;
    name: string;
    price: number;
    createdAt: string;
    userId: string;
    status: StatusType;
  };
}

export type CurrentUserType = User & {
  id: string;
  phone: string;
  city: string;
  state: string;
  street: string;
  address: string;
  gender: Gender;
  isAdmin: Boolean;
};

export type UserType = {
  id: string;
  image: string;
  name: string;
  email: string;
  username: string;
  address: string;
  city: string;
  gender: Gender;
  isAdmin: Boolean;
  phone: string;
  state: string;
  street: string;
  confirmPassword: null;
  emailVerified: null;
  createdAt: string;
  updatedAt: string;
};

export interface IFavorite {
  (
    actionId: string,
    currentUser: CurrentUserType | undefined,
    likes: string[],
    onUpdate: React.Dispatch<React.SetStateAction<SingleProductType | null>>
  ): {
    hasFavorited: boolean;
    toggleFavorite: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  };
}

export interface HeartButtonProps {
  actionId: string;
  likes: string[];
  currentUser: CurrentUserType | undefined;
  onUpdate: React.Dispatch<React.SetStateAction<SingleProductType | null>>;
}

export interface CheckoutProductsProps {
  products: CartItem[];
  totalPrice: number;
  onIncrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onDecrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onRemove(payload: string): void;
}

export interface CheckoutProductProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onIncrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onDecrement(e: React.MouseEvent<HTMLButtonElement>, productId: string): void;
  onRemove(payload: string): void;
}

export interface PaginationProps {
  query: string;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
}

export interface RelatedProductsProps {
  productId: string;
  ingredients?: string[];
}

export type ContactDetailType = {
  id: number;
  icon: string;
  label: string;
  address?: string;
  email?: string;
  phone?: string;
}[];

export type SummaryType = {
  id: number;
  label: string;
}[];

export interface SpinnerProps {
  size?: number;
  color?: string;
}
