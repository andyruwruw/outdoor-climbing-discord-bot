// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * Mountain Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const MountainIcon: FunctionComponent<IconParameters> = ({
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
      d="M 26.046875 6.921875 L 18.558594 19.859375 C 18.539063 19.886719 18.523438 19.914063 18.507813 19.945313 L 14.785156 26.371094 L 11.75 23.335938 L 1.867188 42 L 4.132813 42 L 12.25 26.664063 L 15.214844 29.625 L 19.65625 21.949219 L 22.421875 24.316406 L 25.921875 21.316406 L 29.421875 24.316406 L 31.769531 22.300781 L 39.890625 37.964844 L 41.921875 34.921875 L 45.855469 42 L 48.144531 42 L 42.078125 31.078125 L 40.109375 34.035156 L 33.089844 20.5 C 33.089844 20.496094 33.089844 20.496094 33.089844 20.496094 C 33.050781 20.316406 32.964844 20.152344 32.84375 20.019531 Z M 25.953125 11.078125 L 30.828125 20.480469 L 29.421875 21.683594 L 25.921875 18.683594 L 22.421875 21.683594 L 20.675781 20.1875 Z" />
  </svg>
);