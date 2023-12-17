
import axios, { AxiosResponse, RawAxiosRequestHeaders } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from '../../data/protocols/http/http-client'

class AxiosError {
  response?: AxiosResponse
}

export class AxiosHttpClient<T> implements HttpClient<T> {
  async request(data: HttpRequest): Promise<HttpResponse<T>> {
    let axiosResponse: AxiosResponse | undefined
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        params: data.query,
        headers: data.headers as RawAxiosRequestHeaders,
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        axiosResponse = error.response
      }
    }

    return {
      statusCode: axiosResponse?.status || 500,
      body: axiosResponse?.data || {},
    }
  }
}
