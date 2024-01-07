import { Svg, Path } from 'react-native-svg';

import { type SearchIconProps } from './types';

export const SearchIcon = ({ size, color }: SearchIconProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      d="M17.8666 17.7619C19.504 15.9817 20.507 13.5865 20.507 10.9524C20.507 5.45583 16.1402 1 10.7535 1C5.36678 1 1 5.45583 1 10.9524C1 16.4489 5.36678 20.9048 10.7535 20.9048C13.5587 20.9048 16.0873 19.6964 17.8666 17.7619ZM17.8666 17.7619L23 23"
    />
  </Svg>
);
