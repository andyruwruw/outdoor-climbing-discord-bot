// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * GaryTheSnail Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const GaryTheSnailIcon: FunctionComponent<IconParameters> = ({
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
      d="M 16.5 5 C 7.8583836 5 1 13.150035 1 23 C 1 27.255849 2.3234081 31.126918 4.4667969 34.222656 C 3.1076152 34.506229 2 35.562214 2 37 L 2 38.416016 C 0.89330558 38.85942 0 39.743378 0 41 L 0 42.744141 C 0 44.813775 2.1654419 46.149468 4.1777344 45.626953 C 5.3749799 45.316357 5.9927197 45 8.0058594 45 C 9.6622028 45 10.356821 45.210943 11.232422 45.460938 C 12.108023 45.710931 13.163582 46 15.009766 46 C 16.855004 46 17.910156 45.710937 18.785156 45.460938 C 19.660156 45.210938 20.355004 45 22.009766 45 C 23.662946 45 24.358172 45.210937 25.232422 45.460938 C 26.106672 45.710938 27.160086 46 29.003906 46 C 30.848672 46 31.902594 45.710938 32.777344 45.460938 C 33.652094 45.210938 34.347718 45 36.001953 45 C 38.010134 45 38.624652 45.314486 39.818359 45.625 C 41.832451 46.150235 44 44.81299 44 42.742188 L 44 41 C 44 39.678149 43.119172 38.556854 41.921875 38.162109 C 41.869698 36.740413 41.90987 35.331208 41.988281 33.927734 C 42.083281 32.155734 42.268094 30.395578 42.496094 28.642578 C 42.719094 26.888578 43.038828 25.148969 43.423828 23.417969 C 43.78303 21.849635 44.213389 20.291318 44.802734 18.755859 C 47.787733 17.956101 50 15.230588 50 12 C 50 8.1458524 46.854151 5 43 5 C 40.454754 5 38.225411 6.3760884 37 8.4179688 C 35.774589 6.3760884 33.545246 5 31 5 C 28.588644 5 26.455185 6.231802 25.195312 8.0976562 C 22.726417 6.1543375 19.726509 5 16.5 5 z M 16.5 7 C 19.405868 7 22.088463 8.0910364 24.306641 9.9628906 C 24.109447 10.607963 24 11.292019 24 12 C 24 15.230588 26.212267 17.956101 29.197266 18.755859 C 29.398935 19.213302 29.586104 19.67392 29.759766 20.136719 C 29.902675 21.068138 30 22.019044 30 23 C 30 27.440735 28.469997 31.444699 26.03125 34.326172 A 1.0001 1.0001 0 0 0 26.794922 35.972656 L 26.986328 35.972656 L 27.972656 36 A 1.0001 1.0001 0 0 0 28 36 C 28.56503 36 29 36.43497 29 37 L 29 38 L 18.222656 38 C 18.691761 35.480841 18.995679 32.921078 18.880859 30.289062 C 18.810859 28.709062 18.609141 27.119063 18.119141 25.539062 C 17.629141 23.979062 16.900781 22.379844 15.550781 21.089844 C 14.880781 20.459844 14.039062 19.910391 13.039062 19.650391 C 12.059062 19.370391 10.920938 19.429141 9.9609375 19.869141 C 9.0009375 20.289141 8.2495313 21.039609 7.7695312 21.849609 C 7.2795312 22.669609 7.030625 23.540625 6.890625 24.390625 C 6.760625 25.250625 6.760625 26.040703 6.890625 26.970703 C 7.040625 27.860703 7.4400781 28.870313 8.3300781 29.570312 C 8.7600781 29.930312 9.3399219 30.140937 9.9199219 30.210938 C 10.519922 30.270938 11.130625 30.110781 11.640625 29.800781 C 12.670625 29.120781 13.04 27.92 13 27 C 12.98 26.5 12.590078 26.090781 12.080078 26.050781 C 11.520078 26.010781 11.04 26.420703 11 26.970703 L 11 27 C 10.92 28.08 10.25 28.280313 9.75 27.820312 C 9.17 27.380312 9.0996094 26.030313 9.3496094 24.820312 C 9.5896094 23.640312 10.239297 22.650391 11.029297 22.400391 C 11.799297 22.120391 12.699453 22.430469 13.439453 23.230469 C 14.189453 24.010469 14.690234 25.189922 14.990234 26.419922 C 15.300234 27.659922 15.400859 28.999609 15.380859 30.349609 C 15.352743 32.88943 14.859399 35.471128 14.189453 38 L 4 38 L 4 37 C 4 36.43497 4.4349698 36 5 36 L 5.9980469 36 L 6.2265625 36.001953 A 1.0001 1.0001 0 0 0 6.9921875 34.353516 C 4.5404043 31.469294 3 27.453997 3 23 C 3 14.071965 9.1256164 7 16.5 7 z M 31 7 C 33.773271 7 36 9.2267307 36 12 C 36 14.773269 33.773271 17 31 17 C 28.226729 17 26 14.773269 26 12 C 26 9.2267307 28.226729 7 31 7 z M 43 7 C 45.773271 7 48 9.2267307 48 12 C 48 14.773269 45.773271 17 43 17 C 40.226729 17 38 14.773269 38 12 C 38 9.2267307 40.226729 7 43 7 z M 31 9 A 3 3 0 0 0 31 15 A 3 3 0 0 0 31 9 z M 43 9 A 3 3 0 0 0 43 15 A 3 3 0 0 0 43 9 z M 11.564453 11.441406 A 2.396 1.502 12.921 0 0 9.6660156 12.462891 A 2.396 1.502 12.921 1 0 14.335938 13.535156 A 2.396 1.502 12.921 0 0 11.564453 11.441406 z M 17.623047 13.912109 A 2.25 1.5 51.114 0 0 16.820312 14.148438 A 2.25 1.5 51.114 1 0 19.644531 17.650391 A 2.25 1.5 51.114 0 0 17.623047 13.912109 z M 37 15.582031 C 37.907891 17.094833 39.365441 18.236678 41.097656 18.728516 C 41.189588 20.194266 41.160774 21.643312 41.076172 23.083984 C 40.961172 24.852984 40.779906 26.613375 40.503906 28.359375 C 40.231906 30.106375 39.916719 31.846219 39.511719 33.574219 C 39.167115 35.059196 38.774286 36.53742 38.269531 38 L 36.714844 38 C 36.124832 36.523373 35.651719 35.023561 35.228516 33.515625 C 34.741516 31.794625 34.343281 30.0585 33.988281 28.3125 C 33.629281 26.5675 33.363062 24.803344 33.164062 23.027344 C 33.013662 21.605744 32.916314 20.174815 32.933594 18.720703 C 34.652317 18.224078 36.097507 17.085839 37 15.582031 z M 21.964844 20.074219 A 2.5 1.5 72.669 0 0 21.755859 20.113281 A 2.5 1.5 72.669 1 0 23.244141 24.886719 A 2.5 1.5 72.669 0 0 21.964844 20.074219 z M 31.628906 26.789062 C 31.76385 27.420559 31.900467 28.051514 32.011719 28.6875 C 32.322719 30.4415 32.589531 32.205375 32.769531 33.984375 C 32.907067 35.314132 33.016025 36.649327 33.041016 38 L 31 38 L 31 37 C 31 35.562214 29.892385 34.506229 28.533203 34.222656 C 30.019724 32.0763 31.099115 29.551132 31.628906 26.789062 z M 3 40 L 41 40 C 41.56503 40 42 40.43497 42 41 L 42 42.742188 C 42 43.353383 41.232127 43.926218 40.324219 43.689453 A 1.0001 1.0001 0 0 0 40.322266 43.689453 C 39.29402 43.421967 38.241772 43 36.001953 43 C 34.157188 43 33.103266 43.289062 32.228516 43.539062 C 31.353766 43.789062 30.658141 44 29.003906 44 C 27.350726 44 26.6555 43.789063 25.78125 43.539062 C 24.907 43.289062 23.853585 43 22.009766 43 C 20.164528 43 19.109375 43.289063 18.234375 43.539062 C 17.359375 43.789062 16.664528 44 15.009766 44 C 13.353949 44 12.658852 43.789069 11.783203 43.539062 C 10.907554 43.289057 9.8525159 43 8.0058594 43 C 5.760999 43 4.7065359 43.424002 3.6757812 43.691406 C 2.7686279 43.927515 2 43.355834 2 42.744141 L 2 41 C 2 40.43497 2.4349698 40 3 40 z" />
  </svg>
);