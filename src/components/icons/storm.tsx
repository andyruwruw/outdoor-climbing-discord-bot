// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * Storm Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const StormIcon: FunctionComponent<IconParameters> = ({
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
      d="M 22.5 4 C 16.710938 4 12 8.710938 12 14.5 C 12 14.671875 12.023438 14.832031 12.03125 15 C 12.019531 15 12.011719 15 12 15 C 7.59375 15 4 18.59375 4 23 C 4 27.40625 7.59375 31 12 31 L 16 31 C 16.359375 31.003906 16.695313 30.816406 16.878906 30.503906 C 17.058594 30.191406 17.058594 29.808594 16.878906 29.496094 C 16.695313 29.183594 16.359375 28.996094 16 29 L 12 29 C 8.675781 29 6 26.324219 6 23 C 6 19.675781 8.675781 17 12 17 C 12.324219 17 12.632813 17.039063 12.96875 17.09375 L 14.375 17.3125 L 14.125 15.9375 C 14.042969 15.457031 14 14.976563 14 14.5 C 14 9.792969 17.792969 6 22.5 6 C 26.75 6 30.234375 9.097656 30.875 13.15625 L 31.09375 14.53125 L 32.34375 13.90625 C 33.449219 13.335938 34.675781 13 36 13 C 40.429688 13 44 16.570313 44 21 C 44 25.429688 40.429688 29 36 29 L 33 29 C 32.640625 28.996094 32.304688 29.183594 32.121094 29.496094 C 31.941406 29.808594 31.941406 30.191406 32.121094 30.503906 C 32.304688 30.816406 32.640625 31.003906 33 31 L 36 31 C 41.511719 31 46 26.511719 46 21 C 46 15.488281 41.511719 11 36 11 C 34.746094 11 33.574219 11.296875 32.46875 11.71875 C 31.230469 7.296875 27.308594 4 22.5 4 Z M 25 26 L 18 35 L 23 35 L 17.9375 43 L 29 33 L 24 33 L 31 26 Z M 11.875 34 C 11.652344 34.023438 11.441406 34.125 11.28125 34.28125 L 7.28125 38.28125 C 6.882813 38.679688 6.882813 39.320313 7.28125 39.71875 C 7.679688 40.117188 8.320313 40.117188 8.71875 39.71875 L 12.71875 35.71875 C 13.042969 35.417969 13.128906 34.941406 12.933594 34.546875 C 12.742188 34.148438 12.308594 33.929688 11.875 34 Z M 35.875 35 C 35.652344 35.023438 35.441406 35.125 35.28125 35.28125 L 31.28125 39.28125 C 30.882813 39.679688 30.882813 40.320313 31.28125 40.71875 C 31.679688 41.117188 32.320313 41.117188 32.71875 40.71875 L 36.71875 36.71875 C 37.042969 36.417969 37.128906 35.941406 36.933594 35.546875 C 36.742188 35.148438 36.308594 34.929688 35.875 35 Z" />
  </svg>
);