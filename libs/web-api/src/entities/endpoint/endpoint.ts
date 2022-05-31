export class Endpoint {
  public apiUrl: string;
  public mockUrl: string;
  public isMocked: boolean;

  constructor(apiUrl: string, mockUrl: string, isMocked: boolean) {
    this.apiUrl = apiUrl;
    this.mockUrl = mockUrl;
    this.isMocked = isMocked;
  }
}
