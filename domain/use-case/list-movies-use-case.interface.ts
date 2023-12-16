export type ListMovieUseCaseInput = {
  name: string
  date: string
}

export interface ListMovieUseCaseInterface {
  execute(input: ListMovieUseCaseInput): Promise<void>
}