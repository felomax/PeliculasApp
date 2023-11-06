import React from 'react'
import { Cast } from '../interfaces/CreditsInterface'
import { act } from 'react-test-renderer'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
  actor: Cast
}

export const CastItem = ({ actor }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`

  return (
    <>
      <View style={styles.container}>
        {
          actor.profile_path && (
            <Image source={{ uri }}
              style={{ width: 50, height: 50, borderRadius: 10, margin: 9 }} />
          )
        }
        <View style={styles.actorInfo}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
          <Text style={{ fontSize: 16, opacity: 0.6 }}>{actor.character}</Text>
          <Text>{actor.name}</Text>
        </View>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    marginLeft: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginTop: 4,
    marginLeft: 10
  }
});
