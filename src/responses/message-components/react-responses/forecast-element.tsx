// Packages
import React, { FunctionComponent } from 'react';

/**
 * Parameters for the function.
 */
interface ForecastParameters {
  children: React.ReactNode;
  height: string;
  width: string;
}

/**
 * Style for Forecast component.
 */
export const CONVERT_SVG_CSS = `
* {
  margin: 0;
  box-sizing: border-box;
}
`;

/**
 * Most important component here. Allows us to send components as images.
 * Everything we make will be inside.
 *
 * @param {string} width Width of the component.
 * @param {string} height Height of the component.
 * @returns {React.FC} Functional React component.
 */
export const Forecast: FunctionComponent<ForecastParameters> = ({
  children,
  height,
  width,
}: ForecastParameters) => (
  <div className="component">
  </div>
);
