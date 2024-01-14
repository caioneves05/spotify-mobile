import { Svg, Path } from 'react-native-svg';

import { type LibraryIconProps } from './types';

export const LibraryIcon = ({ size, color, fillIcon }: LibraryIconProps) => (
  <Svg width={size} height={size} fill={fillIcon} viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      d="M1 1.5V23M8.33333 1.5V23M23 5.86605V22C23 22.5523 22.5523 23 22 23H16.6667C16.1144 23 15.6667 22.5523 15.6667 22V2.74409C15.6667 1.97163 16.5052 1.49085 17.1718 1.88108L22.5052 5.00303C22.8117 5.18243 23 5.51092 23 5.86605Z"
    />
  </Svg>
);
