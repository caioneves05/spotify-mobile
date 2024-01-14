import { type ElementType } from 'react';
import { type TouchableOpacityProps } from 'react-native';

export type ButtonDefaultProps = {
  title: string;
  icon?: ElementType;
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  hasAnimation?: boolean;
  alignIcon?: 'left' | 'right';
  variant?: 'solid' | 'delete' | 'outline' | 'delete-fill';
} & TouchableOpacityProps;
