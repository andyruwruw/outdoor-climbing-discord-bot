// Packages
import React, { FunctionComponent } from 'react';

interface ConvertSvgParameters {
  children: React.ReactNode;
  height: string;
  width: string;
}

/**
 * Style for ConvertSVG component.
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
export const ConvertSVG: FunctionComponent<ConvertSvgParameters> = ({
  children,
  height,
  width,
}: ConvertSvgParameters) => (
  <svg
    height={height}
    width={width}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <foreignObject
      width={width}
      height={height}>
      <div {...{ xmlns: "http://www.w3.org/1999/xhtml" }}>
        <style>
          { CONVERT_SVG_CSS }
        </style>
        { children }
      </div>
    </foreignObject>
  </svg>
);
