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

const Juventud = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`JUVENTUD`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        La Jota fue fundada poco después del lanzamiento del MVC en el Teatro
        Tapia. La Jota busca organizar a los/las jóvenes de 13 a 30 años que
        simpaticen con la Agenda Urgente del MVC y buscan involucrarse
        directamente en el ambiente político. Los y las jóvenes somos el
        presente y el futuro del país y no nos podemos dar el lujo de que se
        queden los mismos tomando las decisiones por nosotros. Por eso La Jota
        sometió propuestas para que los y las jóvenes se queden en PR, para
        proteger la educación pública y promover una educación en gobierno y
        política para que los y las jóvenes sepan bien cómo funciona la toma de
        decisiones en el gobierno local y federal. Si queremos descolonizar a
        Puerto Rico y convertirlo en el paraíso que nos merecemos, todos, todas
        y todes tenemos que poner de nuestra parte.{'\n'}
      </Text>
    </View>
  )
}

export default Juventud
