import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Movie } from '../interfaces/MoviesInterface'
import { useNavigation } from '@react-navigation/native';
import { DetailScreen } from '../screens/DetailScreen';

const screenHeight = Dimensions.get('screen').height

interface Props {
  movie: Movie;
  height?: number,
  width?: number,
  marginHorizontal?: number,
}

export const MoviePoster = ({ movie, height = 420, width = 300, marginHorizontal }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7
      }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 9,
  },
});