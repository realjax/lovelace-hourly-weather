import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'hourly-weather-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export type WindType = 'true' | 'false' | 'speed' | 'direction' | 'barb';

export interface HourlyWeatherCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  /** @deprecated Use num_segments instead */
  num_hours?: string; // number
  num_segments?: string; // number
  name?: string;
  icons?: boolean;
  offset?: string; // number
  colors?: ColorConfig;
  hide_hours?: boolean;
  hide_temperatures?: boolean;
  show_wind?: WindType; // 'true' | 'false' | 'speed' | 'direction' | 'barb'
  show_precipitation_amounts?: boolean;
  label_spacing?: string; // number
  test_gui?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  language?: string;
}

export interface ColorObject {
  foreground?: string;
  background?: string;
}

export type ColorDefinition = string | ColorObject;

export interface ColorConfig {
  'clear-night'?: ColorDefinition;
  'cloudy'?: ColorDefinition;
  'fog'?: ColorDefinition;
  'hail'?: ColorDefinition;
  'lightning'?: ColorDefinition;
  'lightning-rainy'?: ColorDefinition;
  'partlycloudy'?: ColorDefinition;
  'pouring'?: ColorDefinition;
  'rainy'?: ColorDefinition;
  'snowy'?: ColorDefinition;
  'snowy-rainy'?: ColorDefinition;
  'sunny'?: ColorDefinition;
  'windy'?: ColorDefinition;
  'windy-variant'?: ColorDefinition;
  'exceptional'?: ColorDefinition;
}

export interface ForecastSegment {
  clouds: number; // 100
  condition: string; // "cloudy"
  datetime: string; // "2022-06-03T22:00:00+00:00"
  precipitation: number; // 0
  precipitation_probability: number; // 85
  pressure: number; // 1007
  temperature: number; // 61
  wind_bearing: number; // 153
  wind_speed: number; // 3.06
}

export type ConditionSpan = [
  condition: string,
  span: number
]

export interface SegmentTemperature {
  hour: string,
  temperature: string
}

export interface SegmentWind {
  hour: string,
  windSpeed: string,
  windSpeedRawMS: number,
  windDirection: string,
  windDirectionRaw: number
}

export interface SegmentPrecipitation {
  hour: string,
  precipitationAmount: string
}

export type ColorMap = Map<keyof ColorConfig, ColorObject>

export interface ColorSettings {
  validColors?: ColorMap,
  warnings: string[]
}

export interface RenderTemplateResult {
  result: string
}

export interface LocalizerLastSettings {
  configuredLanguage: string | undefined,
  haServerLanguage: string | undefined
}
