import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { MovieFull } from '../interfaces/MoviesInterface'
import { Cast } from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {

  return (
    <>
      {/* detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color='grey' size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>- {
            movieFull.genres.map(genre => genre.name).join(', ')
          }</Text>
        </View>

        {/* Hitoria */}
        <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 20 }}>Historia</Text>
        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
        <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 20 }}>Presupuesto</Text>
        <Text style={{ fontSize: 16 }}>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>


        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, }}>Reparto</Text>
          <FlatList
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, height: 85 }}
          />
        </View>
      </View>
    </>
  )
}
