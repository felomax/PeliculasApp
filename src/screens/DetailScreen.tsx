import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
// import { Movie } from '../interfaces/MoviesInterface'
import { StackScreenProps } from '@react-navigation/stack'
import { Navigation, RootStackParams } from '../navigation/Navigation'
// import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

const screenHeight = Dimensions.get('screen').height


export const DetailScreen = ({ route, navigation }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);


  return (
    <ScrollView>
      <View style={styles.imageBorder}></View>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.posterImage} />
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? <ActivityIndicator size={30} color='grey' style={{ marginTop: 20 }} /> : <MovieDetails movieFull={movieFull!} cast={cast} />}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
        <Icon
          color="white"
          name="arrow-back-outline"
          size={60}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}


const styles = StyleSheet.create({

  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    // overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage: {
    flex: 1,
    borderRadius: 18,
  },
  marginContainer: {
    marginTop: 20,
    marginHorizontal: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.4
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 40,
    left: 5
  }


});