// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * RainCloud Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const RainCloudIcon: FunctionComponent<IconParameters> = ({
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
      d="M 16.90625 1.96875 C 16.863281 1.976563 16.820313 1.988281 16.78125 2 C 16.316406 2.105469 15.988281 2.523438 16 3 L 16 8 C 15.996094 8.359375 16.183594 8.695313 16.496094 8.878906 C 16.808594 9.058594 17.191406 9.058594 17.503906 8.878906 C 17.816406 8.695313 18.003906 8.359375 18 8 L 18 3 C 18.011719 2.710938 17.894531 2.433594 17.6875 2.238281 C 17.476563 2.039063 17.191406 1.941406 16.90625 1.96875 Z M 5.59375 6.65625 C 5.550781 6.664063 5.507813 6.675781 5.46875 6.6875 C 5.09375 6.753906 4.792969 7.027344 4.6875 7.390625 C 4.582031 7.757813 4.691406 8.148438 4.96875 8.40625 L 8.53125 11.9375 C 8.929688 12.324219 9.566406 12.320313 9.953125 11.921875 C 10.339844 11.523438 10.335938 10.886719 9.9375 10.5 L 6.40625 6.96875 C 6.199219 6.746094 5.898438 6.632813 5.59375 6.65625 Z M 28.21875 6.65625 C 28.175781 6.664063 28.132813 6.675781 28.09375 6.6875 C 27.902344 6.730469 27.730469 6.828125 27.59375 6.96875 L 24.0625 10.5 C 23.664063 10.898438 23.664063 11.539063 24.0625 11.9375 C 24.460938 12.335938 25.101563 12.335938 25.5 11.9375 L 29.03125 8.40625 C 29.375 8.117188 29.484375 7.628906 29.292969 7.222656 C 29.101563 6.8125 28.664063 6.582031 28.21875 6.65625 Z M 16.90625 11 C 16.875 11.007813 16.84375 11.019531 16.8125 11.03125 C 16.75 11.035156 16.6875 11.046875 16.625 11.0625 C 16.613281 11.074219 16.605469 11.082031 16.59375 11.09375 C 12.390625 11.320313 9 14.746094 9 19 C 9 21.964844 10.617188 24.558594 13.03125 25.9375 C 13.339844 26.164063 13.75 26.195313 14.089844 26.019531 C 14.429688 25.839844 14.636719 25.484375 14.625 25.101563 C 14.613281 24.714844 14.382813 24.375 14.03125 24.21875 C 12.222656 23.183594 11 21.234375 11 19 C 11 15.707031 13.652344 13.035156 16.9375 13 C 16.957031 13 16.980469 13 17 13 C 17.03125 13 17.0625 13 17.09375 13 C 18.542969 13.023438 19.847656 13.5625 20.875 14.4375 C 21.296875 14.800781 21.933594 14.75 22.296875 14.328125 C 22.660156 13.90625 22.609375 13.269531 22.1875 12.90625 C 20.90625 11.8125 19.25 11.203125 17.46875 11.09375 C 17.4375 11.082031 17.40625 11.070313 17.375 11.0625 C 17.273438 11.023438 17.167969 11.003906 17.0625 11 C 17.042969 11 17.019531 11 17 11 C 16.96875 11 16.9375 11 16.90625 11 Z M 29 14 C 23.488281 14 19 18.488281 19 24 C 19 24.40625 19.074219 24.792969 19.125 25.1875 C 15.703125 25.640625 13 28.457031 13 32 C 13 35.855469 16.144531 39 20 39 L 41 39 C 45.957031 39 50 34.957031 50 30 C 50 25.042969 45.957031 21 41 21 C 40.125 21 39.332031 21.265625 38.53125 21.5 C 37.402344 17.214844 33.632813 14 29 14 Z M 29 16 C 33.015625 16 36.316406 18.941406 36.90625 22.78125 L 37.09375 24.0625 L 38.28125 23.5625 C 39.117188 23.207031 40.03125 23 41 23 C 44.878906 23 48 26.121094 48 30 C 48 33.878906 44.878906 37 41 37 L 20 37 C 17.226563 37 15 34.773438 15 32 C 15 29.226563 17.226563 27 20 27 C 20.003906 27 20.058594 26.996094 20.1875 27 L 21.5 27.0625 L 21.21875 25.78125 C 21.085938 25.199219 21 24.609375 21 24 C 21 19.570313 24.570313 16 29 16 Z M 0.71875 18 C 0.167969 18.078125 -0.21875 18.589844 -0.140625 19.140625 C -0.0625 19.691406 0.449219 20.078125 1 20 L 6 20 C 6.359375 20.003906 6.695313 19.816406 6.878906 19.503906 C 7.058594 19.191406 7.058594 18.808594 6.878906 18.496094 C 6.695313 18.183594 6.359375 17.996094 6 18 L 1 18 C 0.96875 18 0.9375 18 0.90625 18 C 0.875 18 0.84375 18 0.8125 18 C 0.78125 18 0.75 18 0.71875 18 Z M 9.125 25.75 C 9.082031 25.757813 9.039063 25.769531 9 25.78125 C 8.820313 25.828125 8.660156 25.925781 8.53125 26.0625 L 4.96875 29.59375 C 4.570313 29.992188 4.570313 30.632813 4.96875 31.03125 C 5.367188 31.429688 6.007813 31.429688 6.40625 31.03125 L 9.9375 27.46875 C 10.25 27.171875 10.339844 26.707031 10.15625 26.316406 C 9.96875 25.921875 9.554688 25.695313 9.125 25.75 Z M 21.875 41 C 21.652344 41.023438 21.441406 41.125 21.28125 41.28125 L 19.28125 43.28125 C 18.882813 43.679688 18.882813 44.320313 19.28125 44.71875 C 19.679688 45.117188 20.320313 45.117188 20.71875 44.71875 L 22.71875 42.71875 C 23.042969 42.417969 23.128906 41.941406 22.933594 41.546875 C 22.742188 41.148438 22.308594 40.929688 21.875 41 Z M 40.875 41 C 40.652344 41.023438 40.441406 41.125 40.28125 41.28125 L 38.28125 43.28125 C 37.882813 43.679688 37.882813 44.320313 38.28125 44.71875 C 38.679688 45.117188 39.320313 45.117188 39.71875 44.71875 L 41.71875 42.71875 C 42.042969 42.417969 42.128906 41.941406 41.933594 41.546875 C 41.742188 41.148438 41.308594 40.929688 40.875 41 Z M 30.875 45 C 30.652344 45.023438 30.441406 45.125 30.28125 45.28125 L 28.28125 47.28125 C 27.882813 47.679688 27.882813 48.320313 28.28125 48.71875 C 28.679688 49.117188 29.320313 49.117188 29.71875 48.71875 L 31.71875 46.71875 C 32.042969 46.417969 32.128906 45.941406 31.933594 45.546875 C 31.742188 45.148438 31.308594 44.929688 30.875 45 Z" />
  </svg>
);
