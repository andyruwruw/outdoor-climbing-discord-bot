// Packages
import React, { FunctionComponent } from 'react';

// Types
import { IconParameters } from '.';

/**
 * Illness Icon.
 *
 * @returns {React.FC} Functional React component.
 */
export const IllnessIcon: FunctionComponent<IconParameters> = ({
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
      d="M 23 2 C 20.999674 1.9983166 19.341692 3.4981442 19.058594 5.4238281 C 14.84128 6.0615476 11.870285 7.4067564 9.9257812 9.2265625 C 7.8524505 11.166934 7 13.625785 7 16 C 7 18.089721 8.0105886 19.65507 9.4042969 20.734375 C 9.7075313 22.346991 10.111467 23.938906 10.585938 25.509766 C 9.5199562 26.486914 8.8463421 27.826794 9.0117188 29.294922 C 9.1698263 31.502202 10.506123 33.37204 12.40625 34.457031 C 12.676803 36.138908 13.551891 38.238435 14.984375 40.375 C 16.509632 42.649938 18.606105 44.855457 21.177734 46.070312 C 23.144457 48.50016 26.835111 48.503604 28.8125 46.087891 C 29.935385 45.535879 30.971688 44.825233 31.896484 43.984375 L 37 43.957031 C 38.583333 43.957031 39.898108 43.327276 40.748047 42.371094 C 41.597986 41.414912 42 40.179253 42 38.957031 C 42 37.734809 41.597986 36.499151 40.748047 35.542969 C 40.110964 34.82625 39.213473 34.292486 38.136719 34.070312 C 39.722563 32.974405 40.821043 31.2967 40.958984 29.332031 C 41.118045 27.84922 40.434841 26.49707 39.357422 25.511719 C 39.82039 24.026269 40.219229 22.521517 40.505859 20.992188 C 42.086508 19.902809 43.104675 18.045519 42.992188 15.972656 C 42.982687 13.552615 41.761465 11.189388 39.564453 9.3222656 C 39.258064 9.061882 38.927798 8.8139936 38.583984 8.5722656 A 1.0001 1.0001 0 0 0 38.322266 8.4003906 C 36.400399 7.1100549 33.930382 6.1162365 30.953125 5.5488281 C 30.722341 3.5654161 29.043318 2.0030687 27.001953 2 A 1.0001 1.0001 0 0 0 27 2 L 23.001953 2 L 23 2 z M 22.998047 4 A 1.0001 1.0001 0 0 0 23 4 L 27 4 C 28.115514 4.00271 28.998323 4.8861649 29 6.0019531 A 1.0001 1.0001 0 0 0 29 6.015625 C 29.000742 6.0613249 28.99625 6.1076939 28.986328 6.1523438 A 1.0001 1.0001 0 0 0 28.986328 6.1542969 C 28.986328 6.1542969 28.986328 6.15625 28.986328 6.15625 A 1.0001 1.0001 0 0 0 28.978516 6.1875 C 28.885327 6.6637946 28.481415 6.9981381 27.996094 7 L 22 7 A 1.0001 1.0001 0 0 0 21.994141 7 C 21.734493 7.00137 21.487937 6.8968145 21.306641 6.7109375 A 1.0001 1.0001 0 0 0 21.283203 6.6894531 C 21.134493 6.5462174 21.038017 6.3569059 21.009766 6.1523438 C 21.003874 6.1010259 21.001084 6.0497697 21 5.9980469 L 21 5.9960938 C 20.999553 4.8806372 21.882319 3.9985094 22.998047 4 z M 19.539062 7.4296875 C 19.670061 7.6536186 19.698782 7.9297346 19.886719 8.1132812 C 20.445569 8.6809968 21.208872 9.0042006 22.005859 9 L 28 9 A 1.0001 1.0001 0 0 0 28.003906 9 C 29.03918 8.99603 29.833066 8.3560864 30.373047 7.5253906 C 33.261389 8.059227 35.611896 8.9858347 37.330078 10.144531 A 1.0001 1.0001 0 0 0 37.449219 10.224609 C 37.740208 10.426076 38.017248 10.631301 38.269531 10.845703 C 40.126454 12.423796 41 14.239924 41 16 A 1.0001 1.0001 0 0 0 41.001953 16.060547 C 41.137646 18.307788 39.307788 20.137646 37.060547 20.001953 A 1.0001 1.0001 0 0 0 37.003906 20 C 34.303134 19.9881 31.696947 19.011028 29.654297 17.244141 A 1.0001 1.0001 0 0 0 28.400391 17.199219 C 26.645724 18.515217 21.305556 21 18 21 C 16.213889 21 13.81124 20.741465 11.990234 19.957031 C 11.618479 19.79689 11.281775 19.619148 10.96875 19.427734 A 1.0001 1.0001 0 0 0 10.689453 19.251953 C 9.6335401 18.521278 9 17.529712 9 16 C 9 14.084215 9.6237994 12.247675 11.292969 10.685547 C 12.869658 9.2099682 15.555562 8.0199413 19.539062 7.4296875 z M 28.982422 19.132812 C 31.281324 20.905342 34.049003 21.974228 36.964844 21.994141 C 37.409157 22.018898 37.842318 21.989385 38.261719 21.916016 C 37.998348 23.100405 37.697722 24.276344 37.320312 25.429688 A 1.0001 1.0001 0 0 0 37.742188 26.589844 C 38.610735 27.128561 39.090094 28.113178 38.976562 29.128906 A 1.0001 1.0001 0 0 0 38.972656 29.173828 C 38.862088 30.860055 37.821303 32.340137 36.271484 33.013672 A 1.0001 1.0001 0 0 0 35.677734 33.814453 C 35.672322 33.86074 35.656992 33.905108 35.650391 33.951172 C 34.965133 33.946866 34.522912 33.942279 33.326172 33.941406 C 32.378334 33.940717 31.403124 33.944505 30.605469 33.953125 C 29.807814 33.961825 29.265941 33.963749 28.888672 34.005859 A 1.0001 1.0001 0 0 0 28.292969 34.292969 L 25.548828 37.037109 A 2 2 0 0 0 25 36.957031 A 2 2 0 0 0 23 38.957031 A 2 2 0 0 0 25.482422 40.896484 L 28.292969 43.707031 A 1.0001 1.0001 0 0 0 28.625 43.925781 C 28.385225 44.065164 28.142471 44.198749 27.892578 44.320312 A 1.0001 1.0001 0 0 0 27.498047 44.666016 C 26.292805 46.474824 23.716961 46.474824 22.511719 44.666016 A 1.0001 1.0001 0 0 0 22.097656 44.3125 C 19.981934 43.337389 18.047909 41.351959 16.646484 39.261719 C 15.24506 37.171479 14.387875 34.92582 14.275391 33.828125 A 1.0001 1.0001 0 0 0 13.693359 33.019531 C 12.145996 32.318979 11.111699 30.827566 10.998047 29.132812 A 1.0001 1.0001 0 0 0 10.992188 29.083984 C 10.874939 28.087534 11.344176 27.117951 12.197266 26.589844 A 1.0001 1.0001 0 0 0 12.623047 25.439453 C 12.264929 24.304102 11.972899 23.151028 11.710938 21.990234 C 13.828425 22.785278 16.183538 23 18 23 C 21.939141 23 26.554014 20.797783 28.982422 19.132812 z M 19.5 27 A 1.5 1.5 0 1 0 21 28.5 A 1.5 1.5 0 0 0 19.5 27 z M 30.5 27 A 1.5 1.5 0 0 0 30.5 30 A 1.5 1.5 0 0 0 30.5 27 z M 33.324219 35.941406 C 35.211292 35.942806 36.992188 35.957031 36.992188 35.957031 A 1.0001 1.0001 0 0 0 37 35.957031 C 38.083333 35.957031 38.768559 36.327276 39.251953 36.871094 C 39.735406 37.414907 40 38.179253 40 38.957031 C 40 39.734809 39.735347 40.499151 39.251953 41.042969 C 38.768559 41.586787 38.083333 41.957031 37 41.957031 A 1.0001 1.0001 0 0 0 36.994141 41.957031 L 31.630859 41.986328 A 1.0001 1.0001 0 0 0 31.40625 41.986328 L 29.412109 41.998047 L 27.371094 39.957031 L 37 39.957031 A 1.0001 1.0001 0 1 0 37 37.957031 L 27.457031 37.957031 L 29.427734 35.986328 C 29.659673 35.975908 30.00676 35.959855 30.626953 35.953125 C 31.410767 35.944625 32.380682 35.940716 33.324219 35.941406 z" />
  </svg>
);
