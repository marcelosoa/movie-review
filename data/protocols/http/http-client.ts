export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: unknown
  headers?: unknown
  params?: unknown
  query?: unknown
}

export interface HttpClient<R = unknown, E = unknown> {
  request: (data: HttpRequest) => Promise<HttpResponse<R, E>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch'

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  unprocessableEntity = 422,
  tooManyRequests = 429,
  serverError = 500,
}

export type HttpResponse<R = unknown, E = unknown> =
  | {
      statusCode: HttpStatusCode.ok | HttpStatusCode.created
      body: R
    }
  | {
      statusCode: Exclude<HttpStatusCode, HttpStatusCode.ok | HttpStatusCode.created>
      body: E | Record<string, unknown> | undefined
    }
