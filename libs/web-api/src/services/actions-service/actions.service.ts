import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { endPoints } from './actions.endpoints';
import { Actions, BaseAction, Endpoint, EndpointsService, IActionListResponseDTO } from '@smart-home/web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(
    private endpointsService: EndpointsService,
    private http: HttpClient,
  ) {
    this.endpointsService.registerEndpoints(endPoints);
  }

  public getActions(): Observable<IActionListResponseDTO> {
    const endpoint: Endpoint = this.endpointsService.getEndpoint(Actions.GetActions);
    const url: string = this.endpointsService.getApiUrl(endpoint);
    return this.http.get<IActionListResponseDTO>(url);
  }

  public makeAction(action: BaseAction): Observable<void> {
    const endpoint: Endpoint = this.endpointsService.getEndpoint(Actions.MakeAction);
    const url: string = this.endpointsService.getApiUrl(endpoint);
    return this.http.post<void>(url, action);
  }

}
