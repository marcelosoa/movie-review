import { ListMovieUseCaseInterface } from "../../../domain/use-case";
import { HttpClient } from "../../protocols/http/http-client";

export class RemoteListMovieUseCase implements ListMovieUseCaseInterface {
  constructor(
    private readonly: url: string,
    private readonly httpClient: HttpClient<RemoteLi>
  )
}