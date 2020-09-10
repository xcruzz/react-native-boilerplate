import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { images } from 'theme'

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

const Cultura = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`CULTURA`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        Proponemos que el acceso a la producción y disfrute de bienes y
        servicios culturales se establezca como un derecho de cada ciudadano(a)
        que tendrá la oportunidad de conocer, practicar y disfrutar de las artes
        en su amplia diversidad durante toda su vida y que será aspecto
        fundamental de nuestras políticas de desarrollo humano sostenible.
        Promoveremos la integración, inclusión y democratización por medio de la
        autogestión, la asociatividad y el emprendimiento de la diversidad de
        las expresiones culturales de base y reconoceremos la diversidad de la
        cultura para proteger la expresión y la divulgación de cada componente
        del conjunto, sin que medien prejuicios que coarten ningún sector de la
        producción cultural.{'\n\n'} Reforzaremos la cadena de valor de los
        diversos agentes culturales y crearemos formas de participación
        protagónica de los mismos y se asignarán los recursos económicos al
        sector cultural que correspondan con el aporte que hace tanto al
        desarrollo social como a nuestro físico. Protegeremos y fortaleceremos
        nuestras instituciones culturales con carácter de urgencia, dotándoles
        de los recursos necesarios y otorgándoles una mayor autonomía que las
        distancie de los partidos políticos y asegure la posibilidad de una
        rendición de cuentas en virtud de su razón de ser social. De igual modo
        brindaremos apoyo a las instituciones culturales autónomas y a centros y
        espacios culturales como museos y salas de teatro que serán aliados para
        la gestión cultural en todas las áreas de la actividad gubernamental.
        Fomentaremos el desarrollo de nuestra cultura insular interna y
        externamente en un amplio encuadre geográfico caribeño e internacional,
        en el que se integra a nuestra diáspora.{'\n\n'}En el marco de estos
        principios de política pública, adelantamos tres propuestas concretas:{' '}
        {'\n\n  1. '}Enseñanza de las artes en todos los semestres escolares,
        garantizando el nombramiento de maestros/as y los servicios de artistas
        y la ampliación de la oferta y diversidad curricular. {'\n\n  2. '}
        Creación de espacios culturales en escuelas u otros edificios en desuso
        para la producción y disfrute de la cultura y fomentar el intercambio
        internacional. {'\n\n  3. '}Patrocinar un proyecto de turismo cultural
        internacional y local, mensualmente se seleccionará una región, para que
        gestores, colectivos y artistas desarrollen “el festival puertorriqueño
        de las artes”.{'\n\n'}
      </Text>
    </View>
  )
}

export default Cultura
