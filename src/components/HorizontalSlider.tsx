import React from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/MoviesInterface';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster'

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {

  const { isLoading } = useMovies()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <View style={{ height: (!!title) ? 260 : 220 }}>
      {title && <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster movie={item} width={140} height={200} marginHorizontal={8} />
        )}
        keyExtractor={(item => item.id.toString())}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
