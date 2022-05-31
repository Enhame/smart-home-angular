import { BaseAction } from './base-action';
import { ActionTypes } from '@smart-home/web-api/enums';
import { DeviceTypes } from '../../enums/actions/device-types';

export class SwitchAction extends BaseAction {
  public state: boolean;

  constructor(type: ActionTypes, deviceType: DeviceTypes, state: boolean) {
    super(type, deviceType);
    this.state = state;
  }
}
