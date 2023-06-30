// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * ClimbingAnchor Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const ClimbingAnchorIcon: FunctionComponent<IconParameters> = ({
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
      d="M 15.875 0 C 11.875 0 9.132813 2.414063 7.53125 5.46875 C 5.929688 8.523438 5.269531 12.25 5.0625 15.4375 C 4.703125 20.988281 5.914063 30.039063 7.59375 39.34375 C 8.480469 44.257813 10.136719 46.917969 11.8125 48.34375 C 12.652344 49.058594 13.484375 49.445313 14.15625 49.65625 C 14.828125 49.867188 15.410156 49.894531 15.53125 49.90625 C 16.433594 49.992188 18.511719 50 19.3125 50 C 19.375 49.996094 19.4375 49.984375 19.5 49.96875 C 19.53125 49.96875 19.5625 49.96875 19.59375 49.96875 C 19.605469 49.96875 19.613281 49.96875 19.625 49.96875 C 20.0625 49.941406 20.441406 49.84375 20.6875 49.75 C 25.527344 47.890625 28.933594 42.777344 30.46875 40.8125 C 32.019531 38.828125 38.910156 30.460938 41.6875 26.9375 C 46.117188 21.324219 46.386719 17.742188 45.65625 13.71875 C 44.871094 9.40625 41.882813 5.878906 35.71875 3.25 C 29.746094 0.703125 24.824219 0 20.4375 0 C 20.261719 0 20.078125 0.0234375 19.90625 0.03125 C 19.894531 0.03125 19.886719 0.03125 19.875 0.03125 C 19.84375 0.03125 19.730469 0.03125 19.6875 0.03125 C 18.851563 0.0078125 16.386719 0 15.875 0 Z M 20.4375 2 C 24.613281 2 29.207031 2.648438 34.9375 5.09375 C 40.746094 7.570313 43.023438 10.40625 43.6875 14.0625 C 44.378906 17.855469 44.347656 20.335938 40.125 25.6875 C 37.386719 29.15625 30.515625 37.496094 28.875 39.59375 C 27.222656 41.707031 23.917969 46.359375 19.96875 47.875 C 19.855469 47.917969 19.632813 47.988281 19.375 48 C 19.355469 48 19.335938 48 19.3125 48 C 19.285156 48 19.214844 48 19.1875 48 C 18.824219 47.972656 18.367188 47.820313 17.8125 47.375 C 16.703125 46.488281 15.199219 44.199219 14.125 38.9375 C 12.253906 29.765625 11.292969 20.707031 11.625 15.5625 C 11.820313 12.546875 12.488281 9.050781 13.875 6.40625 C 15.191406 3.894531 17.019531 2.199219 19.96875 2.03125 C 20.125 2.023438 20.273438 2 20.4375 2 Z M 14.71875 2.09375 C 14.730469 2.09375 14.738281 2.09375 14.75 2.09375 C 13.65625 3.023438 12.769531 4.179688 12.09375 5.46875 C 10.492188 8.523438 9.863281 12.25 9.65625 15.4375 C 9.300781 20.964844 10.261719 30.050781 12.15625 39.34375 C 13.046875 43.710938 14.234375 46.332031 15.53125 47.90625 C 15.328125 47.890625 15.097656 47.859375 14.75 47.75 C 14.300781 47.609375 13.746094 47.339844 13.125 46.8125 C 11.882813 45.753906 10.394531 43.578125 9.5625 38.96875 C 7.894531 29.726563 6.734375 20.679688 7.0625 15.5625 C 7.257813 12.546875 7.894531 9.050781 9.28125 6.40625 C 10.496094 4.089844 12.15625 2.46875 14.71875 2.09375 Z M 17.78125 10.5 C 17.644531 10.496094 17.519531 10.519531 17.375 10.5625 C 16.84375 10.714844 16.5625 11.144531 16.34375 11.5625 L 16.3125 11.53125 C 16.3125 11.53125 16.253906 11.652344 16.25 11.65625 C 16.199219 11.742188 15.824219 12.332031 15.4375 13.5625 C 15.027344 14.875 14.636719 16.871094 14.5625 19.5625 C 14.417969 25.015625 14.699219 26.558594 15.1875 29.53125 C 15.4375 31.058594 15.824219 32.878906 16.21875 34.40625 C 16.414063 35.167969 16.621094 35.863281 16.8125 36.40625 C 16.90625 36.679688 16.988281 36.910156 17.09375 37.125 C 17.199219 37.339844 17.234375 37.535156 17.625 37.8125 C 18.039063 38.105469 18.523438 38.113281 18.875 38.03125 C 19.226563 37.949219 19.519531 37.796875 19.78125 37.625 C 20.304688 37.277344 20.742188 36.828125 21.09375 36.34375 C 21.671875 35.554688 22.257813 34.671875 22.96875 33.46875 C 23.433594 32.683594 23.75 31.660156 23.9375 30.5 C 24.125 29.339844 24.195313 28.109375 23.9375 27 C 23.535156 25.273438 22.945313 21.832031 22.3125 18.75 C 21.660156 15.570313 20.617188 13.359375 19.9375 12.34375 C 19.675781 11.953125 19.382813 11.382813 18.78125 10.90625 C 18.554688 10.726563 18.1875 10.515625 17.78125 10.5 Z M 34 11 C 30.644531 11 28 13.96875 28 17.5 C 28 21.03125 30.644531 24 34 24 C 37.355469 24 40 21.03125 40 17.5 C 40 13.96875 37.355469 11 34 11 Z M 17.875 12.9375 C 18.019531 13.128906 18.121094 13.230469 18.28125 13.46875 C 18.71875 14.121094 19.773438 16.226563 20.375 19.15625 C 20.996094 22.179688 21.53125 25.554688 21.96875 27.4375 C 22.132813 28.132813 22.128906 29.179688 21.96875 30.15625 C 21.808594 31.132813 21.484375 32.074219 21.25 32.46875 C 20.566406 33.625 20.042969 34.414063 19.5 35.15625 C 19.308594 35.414063 19.003906 35.722656 18.75 35.90625 C 18.726563 35.847656 18.710938 35.820313 18.6875 35.75 C 18.527344 35.296875 18.34375 34.667969 18.15625 33.9375 C 17.78125 32.480469 17.394531 30.675781 17.15625 29.21875 C 16.664063 26.222656 16.417969 24.96875 16.5625 19.59375 C 16.628906 17.082031 17.019531 15.324219 17.375 14.1875 C 17.660156 13.28125 17.792969 13.082031 17.875 12.9375 Z M 34 13 C 36.167969 13 38 14.953125 38 17.5 C 38 20.046875 36.167969 22 34 22 C 31.832031 22 30 20.046875 30 17.5 C 30 14.953125 31.832031 13 34 13 Z" />
  </svg>
);