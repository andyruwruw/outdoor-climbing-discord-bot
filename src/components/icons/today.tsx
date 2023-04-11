// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * Today Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const TodayIcon: FunctionComponent<IconParameters> = ({
  color,
  size,
}: IconParameters) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={`${size}px`}
    height={`${size}px`}>
    <path
      fill={color && color.length ? color : '#FFFFFF'}
      d="M 12 0 C 10.90625 0 10 0.90625 10 2 L 10 4 L 4 4 C 2.929688 4 2 4.804688 2 5.957031 L 2 46.207031 C 2 46.78125 2.332031 47.335938 2.734375 47.621094 C 3.136719 47.902344 3.574219 48 4 48 L 46 48 C 46.425781 48 46.863281 47.902344 47.265625 47.621094 C 47.667969 47.335938 48 46.78125 48 46.207031 L 48 5.957031 C 48 4.910156 47.152344 4 46.082031 4 L 40 4 L 40 2 C 40 0.90625 39.09375 0 38 0 L 36 0 C 34.90625 0 34 0.90625 34 2 L 34 4 L 16 4 L 16 2 C 16 0.90625 15.09375 0 14 0 Z M 12 2 L 14 2 L 14 8 L 12 8 Z M 36 2 L 38 2 L 38 8 L 36 8 Z M 4 6 L 10 6 L 10 8 C 10 9.09375 10.90625 10 12 10 L 14 10 C 15.09375 10 16 9.09375 16 8 L 16 6 L 34 6 L 34 8 C 34 9.09375 34.90625 10 36 10 L 38 10 C 39.09375 10 40 9.09375 40 8 L 40 6 L 46 6 L 46 13 L 4 13 Z M 4 15 L 46 15 L 46 46 L 4 46 Z M 32.703125 20.617188 L 32.160156 21.457031 L 24.015625 34.09375 L 18.671875 29.257813 L 17.929688 28.589844 L 16.589844 30.070313 L 17.328125 30.742188 L 24.421875 37.15625 L 33.839844 22.542969 L 34.382813 21.703125 Z" />
  </svg>
);
