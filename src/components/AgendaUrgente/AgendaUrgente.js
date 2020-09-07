import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { images } from 'theme'

const AgendaUrgente = ({}) => {
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

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>

      <Text adjustsFontSizeToFit allowFontScaling style={styles.verb}>
        Victoria Ciudadana nace para atender tres deberes urgentes de nuestro
        tiempo: el rescate de las instituciones públicas; la reconstrucción
        social, económica, ambiental y fiscal; y la descolonización.{'\n'}
        {'\n'}Somos un movimiento de la ciudadanía con personas de distintas
        experiencias, agrupaciones y trasfondos. Celebramos la diversidad y
        pluralidad de posiciones.{'\n'}
        {'\n'}Toda persona que se comprometa con la agenda urgente y con los
        principios éticos del movimiento puede participar de Victoria Ciudadana.
        {'\n'}
        {'\n'}No hay requisito de lealtad ciega o de jurar bandera a partido
        alguno. Las personas que componen la diáspora puertorriqueña también
        podrán participar del movimiento.{'\n'}
        {'\n'}Los principios y objetivos incluidos en la agenda urgente serán
        los puntos de consenso para aquellas personas que formen parte del
        movimiento y sobre los cuales hay un compromiso inquebrantable ante el
        País.
      </Text>
    </View>
  )
}

export default AgendaUrgente
