import { HttpClient, HttpRequest, HttpResponse } from "../../../data/protocols/http/http-client";

export class AuthorizeHttpClientDecorator<T> implements HttpClient<T> {
  constructor(
    private readonly httpClient: HttpClient<T>
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse<T>> {
    const httpResponse = await this.httpClient.request(data)
    return httpResponse
  }

}