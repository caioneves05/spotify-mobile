import { Svg, Path } from 'react-native-svg';

import { type HomeIconProps } from './types';

export const HomeIcon = ({ size, color, fillIcon }: HomeIconProps) => (
  <Svg fill="none" width={size} height={size} viewBox="0 0 24 38">
    <Path
      stroke={color}
      fill={fillIcon}
      strokeWidth="2"
      strokeLinejoin="round"
      d="M11.5294 1.25098L1.52941 6.58431C1.20355 6.75811 1 7.09735 1 7.46667V22C1 22.5523 1.44772 23 2 23H7.90476C8.45705 23 8.90476 22.5523 8.90476 22V16.6667C8.90476 16.1144 9.35248 15.6667 9.90476 15.6667H14.0952C14.6475 15.6667 15.0952 16.1144 15.0952 16.6667V22C15.0952 22.5523 15.543 23 16.0952 23H22C22.5523 23 23 22.5523 23 22V7.46667C23 7.09735 22.7965 6.75811 22.4706 6.58431L12.4706 1.25098C12.1765 1.09412 11.8235 1.09412 11.5294 1.25098Z"
    />
  </Svg>
);
