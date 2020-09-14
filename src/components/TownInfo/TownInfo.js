import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { images } from 'theme'
import prtowns from '../SVGMap/PRTowns.json'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: '#fff',
    paddingLeft: 6,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  verb: {
    fontSize: 18,
    marginBottom: 20,
  },
  logo: {
    width: 108,
    height: 120,
  },
})

const TownInfo = ({ townKey }) => {
  console.log(townKey)

  let town = prtowns.find((x) => {
    return x.key == townKey
  })
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{townKey.toUpperCase()}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>CANDIDATOS</Text>
      <Text style={styles.verb}>{town.candidatos.alcaldia.nombre}</Text>
    </View>
  )
}

export default TownInfo
