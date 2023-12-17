import { Movie } from './../../domain/models/movie';
import { ApiSuccess } from '../../types';

export type RemoteListMoviesModel = ApiSuccess<Movie[]>