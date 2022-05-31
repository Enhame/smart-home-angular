import { ActionTypes } from '../../enums';
import { RgbPinsMap } from './rgb-pins-map';
import { IRGBActionDTO } from '../../interfaces';

export class RgbAction {
  public actions: ActionTypes[];
  public red: number;
  public green: number;
  public blue: number;
  public deviceType: string;
  public pins: RgbPinsMap;
  public state: boolean;

  public static fromServer(data: IRGBActionDTO): RgbAction {
    let result: RgbAction = null;

    if (data) {
      result = new RgbAction();
      result.actions = data.actions;
      result.red = data.red;
      result.green = data.green;
      result.blue = data.blue;
      result.deviceType = data.deviceType;
      result.pins = new RgbPinsMap(data.pins.red_pin, data.pins.green_pin, data.pins.blue_pin);
      result.state = data.state;
    }

    return result;
  }
}
