// Packages
import { ReactElement } from 'react';

// Local Imports
import { CloudIcon } from './cloud';
import { SunIcon } from './sun';
import { PartlyCloudyDayIcon } from './partly-cloudy-day';
import weather from 'src/api/weather';
import { RainCloudIcon } from './rain-cloud';
import { HeavyRainIcon } from './heavy-rain';
import { SnowIcon } from './snow';
import { LightSnowIcon } from './light-snow';
import { CloudLightningIcon } from './cloud-lightning';
import { GaryTheSnailIcon } from './gary-the-snail';

// Local Exports
export { AscenderIcon } from './ascender';
export { BelayerIcon } from './belayer';
export { BinocularsIcon } from './binoculars';
export { BugIcon } from './bug';
export { CalendarOneIcon } from './calendar-1';
export { CalendarTwoIcon } from './calendar-2';
export { CalendarThreeIcon } from './calendar-3';
export { CalendarFourIcon } from './calendar-4';
export { CalendarFiveIcon } from './calendar-5';
export { CalendarSixIcon } from './calendar-6';
export { CalendarSevenIcon } from './calendar-7';
export { CalendarIcon } from './calendar';
export { CampingTentIcon } from './camping-tent';
export { CarabinerIcon } from './carabiner';
export { ChampagneIcon } from './champagne';
export { ClimbingAnchorIcon } from './climbing-anchor';
export { ClimbingShoesIcon } from './climbing-shoes';
export { ClimbingIcon } from './climbing';
export { CloseIcon } from './close';
export { CloudLightningIcon } from './cloud-lightning';
export { CloudIcon } from './cloud';
export { CodeIcon } from './code';
export { DataRecoveryIcon } from './data-recovery';
export { DeadliftIcon } from './deadlift';
export { DowntownIcon } from './downtown';
export { DrawstringBagIcon } from './drawstring-bag';
export { ElbowPainIcon } from './elbow-pain';
export { ForearmIcon } from './forearm';
export { ForestIcon } from './forest';
export { GaryTheSnailIcon } from './gary-the-snail';
export { HailIcon } from './hail';
export { HarnessIcon } from './harness';
export { HatchbackIcon } from './hatchback';
export { HeavyRainIcon } from './heavy-rain';
export { HygrometerIcon } from './hygrometer';
export { IdeaIcon } from './idea';
export { IllnessIcon } from './illness';
export { ImageGalleryIcon } from './image-gallery';
export { KermitTheFrogIcon } from './kermit-the-frog';
export { LeaveIcon } from './leave';
export { LightSnowIcon } from './light-snow';
export { LimeStoneIcon } from './lime-stone';
export { LondonCabIcon } from './london-cab';
export { MedalFirstPlaceIcon } from './medal-first-place';
export { MedalSecondPlaceIcon } from './medal-second-place';
export { MedalThirdPlaceIcon } from './medal-third-place';
export { MountainIcon } from './mountain';
export { MrCrabsIcon } from './mr-crabs';
export { NationalParkIcon } from './national-park';
export { OkIcon } from './ok';
export { PartlyCloudyDayIcon } from './partly-cloudy-day';
export { PictureIcon } from './picture';
export { PlaceMarkerIcon } from './place-marker';
export { QuickdrawIcon } from './quickdraw';
export { RainCloudIcon } from './rain-cloud';
export { RainIcon } from './rain';
export { RemoveDataIcon } from './remove-data';
export { RopeIcon } from './rope';
export { RunCommandIcon } from './run-command';
export { SignPostIcon } from './sign-post';
export { SleetIcon } from './sleet';
export { SnowIcon } from './snow';
export { SquidwardIcon } from './squidward';
export { StormIcon } from './storm';
export { StrengthIcon } from './strength';
export { StretchingIcon } from './stretching';
export { SunIcon } from './sun';
export { SunriseIcon } from './sunrise';
export { SunsetIcon } from './sunset';
export { ThermometerIcon } from './thermometer';
export { ThirstIcon } from './thirst';
export { TickBoxIcon } from './tick-box';
export { TodayIcon } from './today';
export { TrekkingIcon } from './trekking';
export { VideoIcon } from './video';
export { WeightliftingIcon } from './weightlifting';
export { WetIcon } from './wet';
export { WoundIcon } from './wound';

/**
 * Parameters for the function.
 */
export interface IconParameters {
  children?: React.ReactNode;
  size: string;
  color?: string;
}

/**
 * Style for Icon component.
 */
export const ICON_CSS = `
.component {
  margin: 0;
  box-sizing: border-box;
}
`;

/**
 * Resolves a weather code into an icon.
 *
 * @param {number} weatherCode WMO Weather interpretation codes (WW).
 * @param {IconParameters} params React element parameters.
 * @returns {ReactElement} React element for icon.
 */
export const resolveWeatherCode = (
  weatherCode: number,
  params: IconParameters,
): ReactElement => {
  if (weatherCode <= 1) {
    return SunIcon(params) as ReactElement;
  } else if (weatherCode == 2) {
    return PartlyCloudyDayIcon(params) as ReactElement;
  } else if ([
    3,
    45,
    48,
  ].includes(weatherCode)) {
    return CloudIcon(params) as ReactElement;
  } else if ([
    51,
    53,
    55,
    56,
    57,
    66,
  ].includes(weatherCode)) {
    return RainCloudIcon(params) as ReactElement;
  } else if ([
    61,
    63,
    65,
    67,
    80,
    81,
    82,
  ].includes(weatherCode)) {
    return HeavyRainIcon(params) as ReactElement;
  }  else if ([
    71,
    77,
    85,
  ].includes(weatherCode)) {
    return SnowIcon(params) as ReactElement;
  } else if ([
    73,
    75,
    86,
  ].includes(weatherCode)) {
    return SnowIcon(params) as ReactElement;
  } else if ([
    95,
    96,
    99,
  ].includes(weatherCode)) {
    return CloudLightningIcon(params) as ReactElement;
  }
  return GaryTheSnailIcon(params) as ReactElement;
}