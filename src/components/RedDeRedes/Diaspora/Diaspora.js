import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { images, colors } from 'theme'

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

const AgendaUrgente = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`DÍASPORA`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        Al presente, la mayoría de los y las puertorriqueños/as viven fuera del
        país. En los Estados Unidos, la población puertorriqueña ha
        incrementado, creciendo de 3.4 millones en el año 2000 a 5.6 millones en
        el 2017. Nuestro gobierno debe reconocer nuestra condición transnacional
        que se desprende del hecho de que somos una nación cuya mayoría vive en
        el exilio.{'\n\n'}
        {'✔️'}El MVC afirma el derecho de la diáspora de participar activamente
        en la construcción de nuestro presente y futuro. La diáspora será una
        fuerza en el proceso de descolonización y la reconstrucción del país.
        {'\n'}
        {'✔️'}El MVC está determinado en el fomento de estructuras organizativas
        y políticas públicas que tomen en cuenta las necesidades de la diáspora.
        {'\n'}
        {'✔️'}El gobierno de Puerto Rico reconocerá el derecho y el deber de los
        y las puertorriqueños/as en la diáspora a participar en las decisiones
        que afectan el presente y futuro de Puerto Rico.{'\n'}
        {'✔️'}Apoyará mediante oficinas de gobierno ya existentes y acuerdos con
        personas y colectividades, los reclamos de la diáspora en el campo de la
        salud, educación, cultural, justicia social, ambiente, derechos y la
        afirmación puertorriqueña.{'\n'}
        {'✔️'}Reconocer y facilitar el ejercicio del derecho incuestionable de
        los y las puertorriqueños/as a regresar a su patria y ser tratados/as
        con igualdad y respeto.{'\n'}
      </Text>
    </View>
  )
}

export default AgendaUrgente
