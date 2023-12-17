import { makeAxiosHttpClient } from '../../../data/protocols/http/axios-http-client-factory';
import { HttpClient } from './../../../data/protocols/http/http-client';
import { AuthorizeHttpClientDecorator } from './authorize-http-client-decorator';

export const makeAuthorizeHttpClientDecorator = <T>(): HttpClient<T> => 
  new AuthorizeHttpClientDecorator<T>(makeAxiosHttpClient<T>())