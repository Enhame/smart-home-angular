import { Endpoint } from "@smart-home/web-api";
import { Actions } from '@smart-home/web-api/enums';

const actionsEndpoints: Map<string, Endpoint> = new Map<string, Endpoint>();

actionsEndpoints.set(Actions.GetActions, new Endpoint(
  'actionsList',
  '',
  false
));

actionsEndpoints.set(Actions.MakeAction, new Endpoint(
  'actions',
  '',
  false
));

export const endPoints = actionsEndpoints;
