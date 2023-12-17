import { Either } from "../../util"
import { UnexpectedError } from "../errors"
import { Movie } from "../models"

export type ListMovieUseCaseInput = {
  currentPage: number
}

export interface ListMovieUseCaseInterface {
  execute(input: ListMovieUseCaseInput): Promise<Either<UnexpectedError, Movie[]>>
}