// Packages
import React, { FunctionComponent } from 'react';

// Local Imports
import { Weather } from '../../api/weather/weather';

// Types
import { MountainProjectItem } from 'src/types';

/**
 * Parameters for the function.
 */
interface ForecastParameters {
  area: MountainProjectItem;
  children: React.ReactNode;
  weather: Weather;
}

/**
 * Style for Forecast component.
 */
export const FORECAST_CSS = `
.component {
  margin: 0;
  box-sizing: border-box;
}
`;

/**
 * Forecast element.
 *
 * @returns {React.FC} Functional React component.
 */
export const Forecast: FunctionComponent<ForecastParameters> = ({
  area,
  children,
  weather,
}: ForecastParameters) => (
  <div className="component">
  </div>
);
