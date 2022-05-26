import { Component, OnInit } from '@angular/core';
import { Action } from "@smart-home/web-api";

@Component({
  selector: 'smart-home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web-client';

  public ngOnInit(): void {
    this.logAction();
  }

  public logAction(): void {
    console.log(Action);
  }

}
