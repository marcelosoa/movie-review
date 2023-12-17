import { AxiosHttpClient } from "../../../infra/axios-http-client";


export function makeAxiosHttpClient<T>(): AxiosHttpClient<T> {
  return new AxiosHttpClient<T>()
}
