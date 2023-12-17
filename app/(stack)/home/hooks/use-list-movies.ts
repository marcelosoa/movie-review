import { useQuery } from "react-query";
import { useInjectable } from "../../../../context/injectable/injectable.context";
import { ListMovieUseCaseInterface } from "../../../../domain/use-case";
import { useState } from "react";
import { UnexpectedError } from "../../../../domain/errors";
import { Alert } from "react-native";

export function useListMovies () {
  const listMoviesUseCase = useInjectable<ListMovieUseCaseInterface>('listPopularMovies')
  const [currentPage, setCurrentPage] = useState(1)

  const { data: movieList } = useQuery({
    queryKey: ['popular'],
    queryFn: async () => await listMoviesUseCase.execute({ currentPage }),
    onError: (error) => {
      if (error instanceof UnexpectedError) {
        Alert.alert(error.message)
      }
    }
  })

  return { movieList }
}