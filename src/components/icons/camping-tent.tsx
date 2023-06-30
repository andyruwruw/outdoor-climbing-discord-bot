// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * CampingTent Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const CampingTentIcon: FunctionComponent<IconParameters> = ({
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
      d="M 14.023438 5.992188 C 13.574219 5.988281 13.175781 6.285156 13.050781 6.71875 C 13.050781 6.71875 13.050781 6.71875 13.046875 6.71875 L 0.101563 33.382813 C -0.0273438 33.644531 -0.0351563 33.953125 0.0820313 34.21875 C 0.199219 34.488281 0.429688 34.691406 0.710938 34.777344 C 0.710938 34.777344 6.480469 36.53125 7.84375 36.972656 C 8.296875 37.117188 8.785156 36.929688 9.023438 36.515625 C 10.835938 33.316406 12.078125 29.785156 12.941406 27.046875 C 13.742188 30.382813 15.066406 35.335938 17.417969 39.949219 C 17.535156 40.183594 17.742188 40.363281 17.996094 40.445313 C 19.570313 40.960938 28.113281 43.761719 28.46875 43.878906 C 28.710938 44.015625 29 44.046875 29.265625 43.964844 C 29.273438 43.964844 29.277344 43.960938 29.28125 43.960938 C 29.292969 43.957031 29.304688 43.953125 29.316406 43.949219 C 29.320313 43.949219 29.324219 43.945313 29.328125 43.941406 L 29.375 43.925781 L 49.328125 36.941406 C 49.589844 36.851563 49.800781 36.660156 49.914063 36.40625 C 50.023438 36.15625 50.027344 35.871094 49.921875 35.617188 L 37.921875 6.617188 C 37.820313 6.367188 37.621094 6.171875 37.367188 6.070313 C 37.117188 5.972656 36.835938 5.976563 36.589844 6.085938 C 36.164063 6.277344 34.820313 6.628906 33.109375 6.898438 C 31.398438 7.164063 29.265625 7.386719 27.011719 7.488281 C 22.503906 7.691406 17.472656 7.359375 14.410156 6.078125 C 14.40625 6.074219 14.398438 6.074219 14.390625 6.070313 C 14.367188 6.058594 14.34375 6.050781 14.316406 6.042969 C 14.3125 6.039063 14.304688 6.039063 14.296875 6.039063 C 14.292969 6.035156 14.289063 6.035156 14.28125 6.03125 C 14.199219 6.007813 14.113281 5.996094 14.023438 5.992188 Z M 36.394531 8.15625 L 47.671875 35.40625 L 29.5625 41.746094 L 15.78125 8.621094 C 19.15625 9.507813 23.292969 9.65625 27.101563 9.484375 C 29.429688 9.382813 31.625 9.152344 33.417969 8.875 C 34.753906 8.664063 35.574219 8.414063 36.394531 8.15625 Z M 13.953125 9.433594 L 27.238281 41.371094 C 25.015625 40.640625 20.71875 39.234375 19.046875 38.6875 C 15.949219 32.40625 14.035156 23.070313 14.035156 23.070313 C 13.945313 22.613281 13.550781 22.28125 13.085938 22.265625 C 12.621094 22.253906 12.207031 22.558594 12.089844 23.011719 C 12.089844 23.011719 10.140625 29.972656 7.589844 34.800781 C 5.894531 34.273438 3.523438 33.546875 2.410156 33.207031 Z" />
  </svg>
);