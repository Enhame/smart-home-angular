import { ActionTypes } from '@smart-home/web-api/enums';
import { DeviceTypes } from '../../enums/actions/device-types';

export abstract class BaseAction {
  public type: ActionTypes;
  public deviceType: DeviceTypes;

  constructor(type: ActionTypes, deviceType: DeviceTypes) {
    this.type = type;
    this.deviceType = deviceType;
  }
}
