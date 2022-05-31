import { Inject, Injectable } from '@angular/core';
import { Endpoint } from "@smart-home/web-api";
import { APP_CONFIG, IAppConfig } from '@smart-home/app-conf';


@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(@Inject(APP_CONFIG) private appConfig: IAppConfig) {
  }

  public endpoints: Map<string, Endpoint> = new Map<string, Endpoint>();

  public registerEndpoint(key: string, value: Endpoint): void {
    if (!this.endpoints.has(key)) {
      this.endpoints.set(key, value);
    }
    else throw new Error(`${ key } Endpoint is already registered`);
  }

  public registerEndpoints(endpoints: Map<string, Endpoint>) {
    endpoints.forEach((value: Endpoint, key: string) => {
      this.registerEndpoint(key, value);
    })
  }

  public getEndpoint(key: string): Endpoint {
    let result: Endpoint = null;

    if (this.endpoints.has(key)) {
      result = this.endpoints.get(key);
    }

    return result;
  }

  public getApiUrl(endpoint: Endpoint): string {
    return endpoint.isMocked ? endpoint.mockUrl : `${this.appConfig.webApiUrl}/${endpoint.apiUrl}`;
  }
}
