// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * LondonCab Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const LondonCabIcon: FunctionComponent<IconParameters> = ({
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
      d="M 14.984375 11.986328 A 1.0001 1.0001 0 0 0 14.839844 12 L 13.544922 12 C 9.7963285 12 6.4334117 14.330662 5.1171875 17.839844 A 1.0001 1.0001 0 0 0 5.0898438 17.923828 L 4.0605469 21.652344 C 3.2381651 22.04303 2.5044274 22.598139 1.9082031 23.308594 C 0.66643038 24.788278 0 26.863035 0 29.324219 L 0 33 A 1.0001 1.0001 0 0 0 0.8359375 33.986328 L 6.2421875 34.886719 C 6.8333299 36.68364 8.5128543 38 10.5 38 C 12.445369 38 14.096752 36.738664 14.720703 35 L 37.279297 35 C 37.903248 36.738664 39.554631 38 41.5 38 C 43.445369 38 45.096752 36.738664 45.720703 35 L 49 35 A 1.0001 1.0001 0 0 0 50 34 L 50 27 C 50 25.743378 49.106694 24.85942 48 24.416016 L 48 23.894531 C 48 22.883878 47.225723 22.017258 46.220703 21.90625 A 1.0001 1.0001 0 0 0 46.191406 21.904297 L 35.683594 21.052734 L 33.025391 14.818359 A 1.0001 1.0001 0 0 0 33 14.763672 C 32.862951 14.489775 32.696134 14.239489 32.515625 14 L 33 14 A 1.0001 1.0001 0 1 0 33 12 L 29 12 A 1.0001 1.0001 0 0 0 28.796875 12.019531 C 28.706769 12.014629 28.618257 12 28.527344 12 L 24.154297 12 A 1.0001 1.0001 0 0 0 23.984375 11.986328 A 1.0001 1.0001 0 0 0 23.839844 12 L 15.154297 12 A 1.0001 1.0001 0 0 0 14.984375 11.986328 z M 13.544922 14 L 14 14 L 14 21 L 7 21 C 6.7643555 21 6.5322465 21.014998 6.3027344 21.037109 L 6.9980469 18.53125 C 8.0273237 15.803972 10.628316 14 13.544922 14 z M 16 14 L 23 14 L 23 21 L 16 21 L 16 14 z M 25 14 L 28.527344 14 C 29.66375 14 30.696572 14.638934 31.207031 15.654297 L 33.486328 21 L 25 21 L 25 14 z M 7 23 L 14.832031 23 A 1.0001 1.0001 0 0 0 15.158203 23 L 23.832031 23 A 1.0001 1.0001 0 0 0 24.158203 23 L 34.958984 23 L 46 23.896484 L 46 25 A 1.0001 1.0001 0 0 0 46.886719 25.992188 A 1.0001 1.0001 0 0 0 46.978516 26 A 1.0001 1.0001 0 0 0 47 26 C 47.56503 26 48 26.43497 48 27 L 48 33 L 45.949219 33 C 45.695473 30.76204 43.802486 29 41.5 29 C 39.197514 29 37.304527 30.76204 37.050781 33 L 14.949219 33 C 14.695473 30.76204 12.802486 29 10.5 29 C 8.2556221 29 6.3966561 30.673096 6.0683594 32.830078 L 2 32.152344 L 2 29.324219 C 2 27.223403 2.566679 25.636066 3.4414062 24.59375 C 4.3161335 23.551434 5.4936112 23 7 23 z M 10.5 31 C 11.892557 31 13 32.107443 13 33.5 C 13 34.892557 11.892557 36 10.5 36 C 9.1074435 36 8 34.892557 8 33.5 C 8 32.107443 9.1074435 31 10.5 31 z M 41.5 31 C 42.892557 31 44 32.107443 44 33.5 C 44 34.892557 42.892557 36 41.5 36 C 40.107443 36 39 34.892557 39 33.5 C 39 32.107443 40.107443 31 41.5 31 z" />
  </svg>
);