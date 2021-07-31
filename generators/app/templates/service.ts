import RequestAdapterService from "./requestAdapterService";
import {AxiosResponse} from "axios";

export default class <%= name %>Service extends RequestAdapterService {
  url = `${process.env.SERVICE_URL}/<%= url %>`;

  /**
   * To send your service request to get something
   * @param email
   * @param password
   */
  async yourServiceRequest(params: Object) {
    try {
      const someRequest: AxiosResponse<{access_token: string;}> = await super.sendGetRequest(`${this.url}/request-something`, {
        params
      });

      return someRequest.data;
    } catch (e) {
      super.sendError('Error getting something', e);
    }
  }
}
