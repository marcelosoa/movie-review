import { RemoteListMovieUseCase } from "../../../../data";
import { makeApiUrl } from "../../../../data/protocols/http/api-url-factory";
import { ListMovieUseCaseInterface } from "../../../../domain/use-case";
import { makeAuthorizeHttpClientDecorator } from "../../decorators/make-authorize-http-client-decorator";


export const makeListMovieUseCase = (): ListMovieUseCaseInterface =>
  new RemoteListMovieUseCase(makeApiUrl('/popular/'), makeAuthorizeHttpClientDecorator())