// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * CalendarOne Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const CalendarOneIcon: FunctionComponent<IconParameters> = ({
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
      d="M 12 0 C 10.90625 0 10 0.90625 10 2 L 10 4 L 4 4 C 3.59375 4 3.148438 4.0625 2.722656 4.359375 C 2.296875 4.65625 2 5.246094 2 5.792969 L 2 46.042969 C 2 46.542969 2.171875 47.054688 2.53125 47.425781 C 2.886719 47.800781 3.410156 48 3.917969 48 L 46.082031 48 C 46.589844 48 47.113281 47.800781 47.46875 47.425781 C 47.828125 47.054688 48 46.542969 48 46.042969 L 48 5.792969 C 48 5.246094 47.703125 4.65625 47.277344 4.359375 C 46.851563 4.0625 46.40625 4 46 4 L 40 4 L 40 2 C 40 0.90625 39.09375 0 38 0 L 36 0 C 34.90625 0 34 0.90625 34 2 L 34 4 L 16 4 L 16 2 C 16 0.90625 15.09375 0 14 0 Z M 12 2 L 14 2 L 14 8 L 12 8 Z M 36 2 L 38 2 L 38 8 L 36 8 Z M 4 6 L 10 6 L 10 8 C 10 9.09375 10.90625 10 12 10 L 14 10 C 15.09375 10 16 9.09375 16 8 L 16 6 L 34 6 L 34 8 C 34 9.09375 34.90625 10 36 10 L 38 10 C 39.09375 10 40 9.09375 40 8 L 40 6 L 46 6 L 46 13 L 4 13 Z M 4 15 L 46 15 L 46 46 L 4 46 Z M 24.625 23.425781 C 24.554688 23.808594 24.402344 24.132813 24.167969 24.398438 C 23.933594 24.664063 23.648438 24.878906 23.320313 25.046875 C 22.992188 25.214844 22.621094 25.335938 22.214844 25.40625 C 21.808594 25.476563 21.386719 25.515625 20.953125 25.515625 L 20.953125 27.136719 L 24.050781 27.136719 L 24.050781 36.027344 L 26.300781 36.027344 L 26.300781 23.425781 Z" />
  </svg>
);
