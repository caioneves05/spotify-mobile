import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import clsx from 'clsx';
import { MotiView } from 'moti';
import { twMerge } from 'tailwind-merge';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../../../tailwind.config';

import { type ButtonDefaultProps } from './types';

const fullConfig = resolveConfig(tailwindConfig);

export const ButtonDefault = ({
  title,
  className,
  icon: Icon,
  variant = 'solid',
  fullWidth = false,
  isLoading = false,
  isDisabled = false,
  alignIcon = 'right',
  hasAnimation = false,
  ...props
}: ButtonDefaultProps) => {
  const primaryColor = fullConfig.theme?.colors?.primary as string;
  const whiteColor = fullConfig.theme?.colors?.whiteText as string;

  const color = variant === 'solid' ? whiteColor : primaryColor;

  return (
    <TouchableOpacity
      className={twMerge(
        clsx('h-7 w-[75px] items-center justify-center rounded-full', {
          'w-full': fullWidth,
          'opacity-50': isDisabled,
          'bg-primary-100': variant === 'solid',
          'border-red-500 border': variant === 'delete',
          'border border-primary-500 w-44': variant === 'outline',
        }),
        className,
      )}
      activeOpacity={0.7}
      disabled={isDisabled}
      {...props}
    >
      <View
        className={clsx('items-center justify-center', {
          'flex-row': alignIcon === 'right',
          'flex-row-reverse': alignIcon === 'left',
        })}
      >
        {isLoading ? (
          <ActivityIndicator
            size={22}
            color="white"
            accessibilityLabel="loading"
          />
        ) : (
          <>
            <Text
              className={clsx('text-sm', {
                'ml-2': alignIcon === 'left',
                'mr-2': alignIcon === 'right',
                'text-black': variant === 'solid',
                'text-red-600': variant === 'delete',
                'text-primary-950': variant === 'outline',
              })}
            >
              {title}
            </Text>

            {Icon &&
              (hasAnimation ? (
                <MotiView
                  from={{
                    translateX: 6,
                  }}
                  animate={{
                    translateX: 0,
                  }}
                  transition={{
                    loop: true,
                    duration: 300,
                    type: 'timing',
                  }}
                  testID={color}
                >
                  <Icon size={22} weight="bold" color={color} />
                </MotiView>
              ) : (
                <View testID={color}>
                  <Icon size={22} weight="bold" color={color} />
                </View>
              ))}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
