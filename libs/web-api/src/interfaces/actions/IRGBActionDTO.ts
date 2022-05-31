import { ActionTypes } from '../../enums';

export interface IRGBActionDTO {
    actions: ActionTypes[];
    blue: number;
    deviceType: string;
    green: number;
    pins: {
      red_pin: number;
      green_pin: number;
      blue_pin: number;
    }
    red: number;
    state: boolean
}
