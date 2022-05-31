import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActionsService, ActionTypes, IActionListResponseDTO, RgbAction } from '@smart-home/web-api';
import { SwitchAction } from '../../../../libs/web-api/src/entities/actions/switch-action';
import { DeviceTypes } from '../../../../libs/web-api/src/enums/actions/device-types';

@Component({
  selector: 'smart-home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public title = 'web-client';
  public sideNavOpened: boolean = false;

  constructor(public actionsService: ActionsService) {
  }

  public ngOnInit(): void {
    this.getActions();
  }

  public getActions(): void {
    this.actionsService.getActions().subscribe((data: IActionListResponseDTO) => {
      console.log(RgbAction.fromServer(data.rgb));
    });
  }

  public makeAction() {
    this.actionsService.makeAction(new SwitchAction(
      ActionTypes.Switch,
      DeviceTypes.RGB,
      false
    )).subscribe((response) => {
      console.log(response);
    })
  }

  public openSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }

}
