// Packages
import React, { FunctionComponent } from 'react';

// Local Imports
import {
  CalendarOneIcon,
  CalendarTwoIcon,
  CalendarThreeIcon,
  CalendarFourIcon,
  CalendarFiveIcon,
  CalendarSixIcon,
  CalendarSevenIcon,
  resolveWeatherCode,
} from '../icons';
import { WeatherData } from '../../api/weather/weather';

// Types
import { MountainProjectItem } from 'src/types';

/**
 * Parameters for the function.
 */
interface ForecastParameters {
  area: MountainProjectItem;
  children?: React.ReactNode;
  weather: WeatherData;
}

/**
 * Style for Forecast component.
 */
export const FORECAST_CSS = `
.forecast p,
.forecast span {
  color: white;
}

.forecast {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.forecast .header {
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  background: #393c4100;
  border: 2px solid rgba(255, 255, 255, 0.235);
  border-radius: 12px;
  margin-bottom: 8px;
}

.forecast .header .title {
  font-size: 18px;
  margin: 0;
}
`;

/**
 * Forecast element.
 *
 * @returns {React.FC} Functional React component.
 */
export const ForecastComponent: FunctionComponent<ForecastParameters> = ({
  area,
  children,
  weather,
}: ForecastParameters) => {
  const days = weather.getGeneralForecast();

  return (
    <div className="forecast">
      <style>
        { FORECAST_CSS }
      </style>

      <div className="header">
        <p className="title">
          { area.name }
        </p>

        <CalendarFiveIcon
          color="#FFFFFF"
          size="24"/>
      </div>

      <div className="day-wrapper">
        {
          days.map((day) => (
            <div
              className="day">
              {
                resolveWeatherCode(
                  day.weatherCode,
                  {
                    color: '#FFFFFF',
                    size: '24',
                  })
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};
