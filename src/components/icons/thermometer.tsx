// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * Thermometer Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const ThermometerIcon: FunctionComponent<IconParameters> = ({
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
      d="M 25 0 A 1.0001 1.0001 0 0 0 24.880859 0.005859375 C 23.383101 0.02215038 21.973315 0.33839138 20.865234 1.1386719 C 19.727347 1.9604791 19 3.3380952 19 5 L 19 9.8320312 A 1.0001 1.0001 0 0 0 19 10.158203 L 19 27.685547 C 15.402868 29.750635 13 33.568826 13 38 C 13 44.599907 18.308312 49.936985 24.894531 49.994141 A 1.0001 1.0001 0 0 0 25 50 A 1.0001 1.0001 0 0 0 25.113281 49.994141 C 31.695856 49.932797 37 44.597276 37 38 C 37 33.568826 34.597132 29.750635 31 27.685547 L 31 10.167969 A 1.0001 1.0001 0 0 0 31 9.8417969 L 31 5 C 31 3.3380952 30.272653 1.9604791 29.134766 1.1386719 C 28.02571 0.33768748 26.614469 0.021627571 25.115234 0.005859375 A 1.0001 1.0001 0 0 0 25 0 z M 25 2 C 26.257143 2 27.302731 2.2815729 27.964844 2.7597656 C 28.626957 3.2379584 29 3.8619048 29 5 L 29 9 L 21 9 L 21 5 C 21 3.8619048 21.373043 3.2379584 22.035156 2.7597656 C 22.697269 2.2815729 23.742857 2 25 2 z M 21 11 L 29 11 L 29 13 L 25 13 L 25 15 L 29 15 L 29 17 L 27 17 L 27 19 L 29 19 L 29 21 L 25 21 L 25 23 L 29 23 L 29 28.199219 A 1.0001 1.0001 0 0 0 29.552734 29.09375 C 32.821465 30.728115 35 34.072093 35 38 C 35 43.564481 30.564481 48 25 48 C 19.435519 48 15 43.564481 15 38 C 15 34.072093 17.178535 30.728115 20.447266 29.09375 A 1.0001 1.0001 0 0 0 21 28.199219 L 21 11 z" />
  </svg>
);