import { View, Text, FlatList } from "react-native";
import { useListMovies } from "./hooks/use-list-movies";
import { useEffect } from "react";

export default function Home () {

  const { movieList } = useListMovies()

  useEffect(() => {
    movieList
  })

  console.log(movieList, 'MOVIE LIST')

  return (
    <View>
      <Text>Filmes</Text>
      <View>
        {movieList?.isRight() ? movieList.value.map((movie) => (
          <Text>{movie.name}</Text>
        )): undefined}
      </View>
    </View>
  )
}