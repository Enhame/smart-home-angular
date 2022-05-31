import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  webApiUrl: string;
}

export const APP_CONFIG = new InjectionToken('Application config');
