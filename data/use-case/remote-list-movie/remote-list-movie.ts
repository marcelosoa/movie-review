import { ListMovieUseCaseInput } from './../../../domain/use-case/list-movies-use-case.interface';
import { ListMovieUseCaseInterface } from "../../../domain/use-case";
import { RemoteListMoviesModel } from "../../models";
import { HttpClient } from "../../protocols/http/http-client";
import { isSuccessStatusCodeUtil } from '../../../util/is-success-status-code.util'
import { Either, left, right } from '../../../util';
import { UnexpectedError } from '../../../domain/errors';
import { Movie } from '../../../domain/models';

export class RemoteListMovieUseCase implements ListMovieUseCaseInterface {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteListMoviesModel>
  ) {}

  public async execute(input: ListMovieUseCaseInput): Promise<Either<UnexpectedError, Movie[]>> {
    const response = await this.httpClient.request({
      url: this.url,
      method: 'get',
      query: {
        skip: (input.currentPage -1),
        take: 10 
      }
    })

    if (!isSuccessStatusCodeUtil(response.statusCode)) return left(new UnexpectedError())

    return right((response.body as RemoteListMoviesModel).success)
  }

  
}