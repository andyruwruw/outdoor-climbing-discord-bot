// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * Squidward Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const SquidwardIcon: FunctionComponent<IconParameters> = ({
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
      d="M 25 3 C 19.027292 3 13.604252 4.5451646 9.609375 7.1132812 C 5.6144976 9.681398 3 13.351667 3 17.5 C 3 23.275573 7.9831269 28.051619 14.919922 30.398438 C 15.24176 30.840072 15.604118 31.237997 16 31.585938 L 16 35.179688 C 14.605904 35.446402 13.213095 35.739232 11.839844 36.130859 C 9.3329908 36.846258 7.5773258 39.327876 8.0957031 41.955078 C 8.6680484 44.850253 11.619027 46.608628 14.398438 45.798828 C 16.395902 45.219032 18.428576 44.815855 20.472656 44.570312 C 21.460782 46.021651 23.059817 47 25 47 C 26.939752 47 28.537212 46.021118 29.525391 44.570312 C 31.570201 44.815823 33.603392 45.220782 35.601562 45.800781 C 36.064184 45.934731 36.534353 46 36.998047 46 C 39.412964 46 41.611622 44.215674 41.957031 41.638672 A 1.0001 1.0001 0 0 0 41.957031 41.636719 C 42.295762 39.10513 40.567443 36.820154 38.181641 36.138672 C 36.801497 35.744223 35.402183 35.449908 34 35.181641 L 34 31.585938 C 34.395882 31.237997 34.75824 30.840072 35.080078 30.398438 C 42.016874 28.051619 47 23.275573 47 17.5 C 47 13.351667 44.385502 9.6813979 40.390625 7.1132812 C 36.395748 4.5451646 30.972708 3 25 3 z M 25 5 C 30.625292 5 35.702971 6.4770386 39.308594 8.7949219 C 42.914216 11.112805 45 14.192333 45 17.5 C 45 21.614169 41.698717 25.428152 36.414062 27.744141 C 36.790076 26.597788 37 25.334045 37 24 C 37 21.605245 36.342665 19.420781 35.212891 17.777344 C 34.083116 16.133907 32.412022 15 30.5 15 C 28.587978 15 26.916884 16.133907 25.787109 17.777344 C 25.449885 18.26789 25.24807 18.888566 25 19.466797 C 24.75193 18.888566 24.550115 18.26789 24.212891 17.777344 C 23.083116 16.133907 21.412022 15 19.5 15 C 17.587978 15 15.916884 16.133907 14.787109 17.777344 C 13.657335 19.420781 13 21.605245 13 24 C 13 25.334045 13.209924 26.597788 13.585938 27.744141 C 8.3012826 25.428152 5 21.614169 5 17.5 C 5 14.192333 7.0857839 11.112805 10.691406 8.7949219 C 14.297029 6.4770386 19.374708 5 25 5 z M 25 9.5039062 C 21.888397 9.5039062 18.776663 10.019586 15.683594 11.050781 A 1.0001 1.0001 0 1 0 16.316406 12.947266 C 22.122268 11.011656 27.877732 11.011656 33.683594 12.947266 A 1.0001 1.0001 0 1 0 34.316406 11.050781 C 31.223337 10.019586 28.111603 9.5039062 25 9.5039062 z M 19.5 17 C 20.625978 17 21.703727 17.658093 22.564453 18.910156 C 23.273332 19.941334 23.701873 21.403308 23.861328 23 L 15.138672 23 C 15.298127 21.403308 15.726668 19.941334 16.435547 18.910156 C 17.296273 17.658093 18.374022 17 19.5 17 z M 30.5 17 C 31.625978 17 32.703727 17.658093 33.564453 18.910156 C 34.273332 19.941334 34.701873 21.403308 34.861328 23 L 26.138672 23 C 26.298127 21.403308 26.726668 19.941334 27.435547 18.910156 C 28.296273 17.658093 29.374022 17 30.5 17 z M 15.138672 25 L 18 25 L 18 26.5 C 18 27.328 18.672 28 19.5 28 C 20.328 28 21 27.328 21 26.5 L 21 25 L 23.804688 25 C 23.711569 25.904836 23.607875 26.813935 23.337891 27.578125 C 22.874322 27.917907 22.47517 28.373645 22.132812 28.865234 C 21.805467 29.33527 21.512117 29.864842 21.244141 30.425781 C 20.687981 30.801045 20.110139 31 19.5 31 C 18.374022 31 17.296273 30.341907 16.435547 29.089844 C 15.726668 28.058666 15.298127 26.596692 15.138672 25 z M 26.195312 25 L 29 25 L 29 26.5 C 29 27.328 29.672 28 30.5 28 C 31.328 28 32 27.328 32 26.5 L 32 25 L 34.861328 25 C 34.701873 26.596692 34.273332 28.058666 33.564453 29.089844 C 32.703727 30.341907 31.625978 31 30.5 31 C 29.891034 31 29.311898 30.801937 28.755859 30.427734 C 28.48768 29.866199 28.194843 29.335714 27.867188 28.865234 C 27.52483 28.373645 27.125678 27.917907 26.662109 27.578125 C 26.391831 26.814143 26.288464 25.905127 26.195312 25 z M 25 29 C 25.25 29 25.703908 29.259287 26.226562 30.009766 C 26.749218 30.760244 27.262289 31.881931 27.681641 33.080078 C 28.520344 35.476373 29 38.333333 29 39 C 29 39.116617 28.983875 39.223224 28.980469 39.337891 A 1.0001894 1.0001894 0 0 0 28.958984 39.712891 C 28.865032 41.197435 28.501271 42.499522 27.908203 43.398438 C 27.220482 44.440818 26.341772 45 25 45 C 23.658228 45 22.779518 44.440818 22.091797 43.398438 C 21.483162 42.475926 21.114042 41.129552 21.033203 39.595703 A 1.0003596 1.0003596 0 0 0 21.025391 39.451172 C 21.019339 39.299 21 39.155701 21 39 C 21 38.333333 21.479656 35.476373 22.318359 33.080078 C 22.737711 31.881931 23.250782 30.760244 23.773438 30.009766 C 24.296091 29.259287 24.75 29 25 29 z M 18 32.753906 C 18.478707 32.909353 18.97953 33 19.5 33 C 19.761768 33 20.018049 32.971043 20.271484 32.929688 C 19.517957 35.212204 19.073498 37.421638 19.021484 38.71875 C 17.000785 39.018593 14.51047 39.565934 12.744141 40.033203 A 1.0001 1.0001 0 1 0 13.255859 41.966797 C 14.891438 41.534118 17.256501 41.016701 19.119141 40.726562 C 19.207957 41.405011 19.342561 42.060035 19.546875 42.671875 C 17.627247 42.936283 15.720031 43.33372 13.841797 43.878906 A 1.0001 1.0001 0 0 0 13.839844 43.878906 C 12.157823 44.369716 10.410115 43.346507 10.058594 41.568359 C 9.7550897 40.030164 10.812445 38.501982 12.388672 38.052734 C 13.967439 37.602497 15.563797 37.238902 17.169922 36.960938 A 1.0001 1.0001 0 0 0 18 35.976562 L 18 32.753906 z M 32 32.753906 L 32 35.976562 A 1.0001 1.0001 0 0 0 32.830078 36.962891 C 34.443529 37.241747 36.046886 37.607285 37.632812 38.060547 A 1.0001 1.0001 0 0 0 37.632812 38.0625 C 39.13301 38.491017 40.171878 39.898683 39.974609 41.373047 C 39.760019 42.973998 38.44113 44 36.998047 44 C 36.721741 44 36.441582 43.96096 36.158203 43.878906 C 34.279969 43.33372 32.372753 42.936283 30.453125 42.671875 C 30.657439 42.060035 30.792043 41.405011 30.880859 40.726562 C 32.743499 41.016701 35.108562 41.534118 36.744141 41.966797 A 1.0001 1.0001 0 1 0 37.255859 40.033203 C 35.489489 39.565923 32.999239 39.016635 30.978516 38.716797 C 30.926183 37.419755 30.481345 35.212509 29.728516 32.931641 C 29.981527 32.97289 30.238554 33 30.5 33 C 31.02047 33 31.521293 32.909353 32 32.753906 z" />
  </svg>
);