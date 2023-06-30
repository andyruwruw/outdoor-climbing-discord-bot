// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * Rain Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const RainIcon: FunctionComponent<IconParameters> = ({
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
      d="M 22.5 5 C 16.710938 5 12 9.710938 12 15.5 C 12 15.671875 12.023438 15.832031 12.03125 16 C 12.019531 16 12.011719 16 12 16 C 7.59375 16 4 19.59375 4 24 C 4 28.40625 7.59375 32 12 32 L 36 32 C 41.511719 32 46 27.511719 46 22 C 46 16.488281 41.511719 12 36 12 C 34.746094 12 33.574219 12.296875 32.46875 12.71875 C 31.230469 8.296875 27.308594 5 22.5 5 Z M 22.5 7 C 26.75 7 30.234375 10.097656 30.875 14.15625 L 31.09375 15.53125 L 32.34375 14.90625 C 33.449219 14.335938 34.675781 14 36 14 C 40.429688 14 44 17.570313 44 22 C 44 26.429688 40.429688 30 36 30 L 12 30 C 8.675781 30 6 27.324219 6 24 C 6 20.675781 8.675781 18 12 18 C 12.324219 18 12.632813 18.039063 12.96875 18.09375 L 14.375 18.3125 L 14.125 16.9375 C 14.042969 16.457031 14 15.976563 14 15.5 C 14 10.792969 17.792969 7 22.5 7 Z M 24.875 34 C 24.652344 34.023438 24.441406 34.125 24.28125 34.28125 L 22.28125 36.28125 C 21.882813 36.679688 21.882813 37.320313 22.28125 37.71875 C 22.679688 38.117188 23.320313 38.117188 23.71875 37.71875 L 25.71875 35.71875 C 26.042969 35.417969 26.128906 34.941406 25.933594 34.546875 C 25.742188 34.148438 25.308594 33.929688 24.875 34 Z M 13.875 35 C 13.652344 35.023438 13.441406 35.125 13.28125 35.28125 L 11.28125 37.28125 C 10.882813 37.679688 10.882813 38.320313 11.28125 38.71875 C 11.679688 39.117188 12.320313 39.117188 12.71875 38.71875 L 14.71875 36.71875 C 15.042969 36.417969 15.128906 35.941406 14.933594 35.546875 C 14.742188 35.148438 14.308594 34.929688 13.875 35 Z M 33.875 35 C 33.652344 35.023438 33.441406 35.125 33.28125 35.28125 L 31.28125 37.28125 C 30.882813 37.679688 30.882813 38.320313 31.28125 38.71875 C 31.679688 39.117188 32.320313 39.117188 32.71875 38.71875 L 34.71875 36.71875 C 35.042969 36.417969 35.128906 35.941406 34.933594 35.546875 C 34.742188 35.148438 34.308594 34.929688 33.875 35 Z M 19.875 39 C 19.652344 39.023438 19.441406 39.125 19.28125 39.28125 L 17.28125 41.28125 C 16.882813 41.679688 16.882813 42.320313 17.28125 42.71875 C 17.679688 43.117188 18.320313 43.117188 18.71875 42.71875 L 20.71875 40.71875 C 21.042969 40.417969 21.128906 39.941406 20.933594 39.546875 C 20.742188 39.148438 20.308594 38.929688 19.875 39 Z M 8.875 40 C 8.652344 40.023438 8.441406 40.125 8.28125 40.28125 L 6.28125 42.28125 C 5.882813 42.679688 5.882813 43.320313 6.28125 43.71875 C 6.679688 44.117188 7.320313 44.117188 7.71875 43.71875 L 9.71875 41.71875 C 10.042969 41.417969 10.128906 40.941406 9.933594 40.546875 C 9.742188 40.148438 9.308594 39.929688 8.875 40 Z M 28.875 40 C 28.652344 40.023438 28.441406 40.125 28.28125 40.28125 L 26.28125 42.28125 C 25.882813 42.679688 25.882813 43.320313 26.28125 43.71875 C 26.679688 44.117188 27.320313 44.117188 27.71875 43.71875 L 29.71875 41.71875 C 30.042969 41.417969 30.128906 40.941406 29.933594 40.546875 C 29.742188 40.148438 29.308594 39.929688 28.875 40 Z" />
  </svg>
);