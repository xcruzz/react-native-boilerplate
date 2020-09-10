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

const LGBTTIQ = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`GÉNERO y LGBTTIQ`}</Text>
      <Image style={styles.logo} source={images.logo_arcoiris} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        Estableceremos políticas públicas para producir cambios culturales que
        erradiquen el machismo, la homofobia, la lesbofobia, la transfobia, la
        xenofobia y el racismo de nuestras prácticas sociales. Para erradicar el
        discrimen por género nos comprometemos a romper con el paradigma binario
        y heterocisnormativo. Nuestro compromiso es con la indivisibilidad de
        los derechos de todas las mujeres y de las personas LGBTTIQ+ tal como se
        establece en la normativa internacional que reconoce la garantía de los
        derechos de las personas en su integralidad. La integración de la
        perspectiva de género y derechos humanos en todas las gestiones
        públicas, en el desarrollo, implementación y evaluación de todo lo
        económico, del gasto público, presupuestos gubernamentales, reformas
        contributivas, financiamiento y políticas fiscales gubernamentales.
        Entre otras propuestas, se aprobaran leyes y normativas que tipifican el
        feminicidio, incluyendo los crímenes de odio contra las mujeres trans y
        una declaración inmediata de un estado de emergencia contra la violencia
        de género; garantizar los Derechos Sexuales y Derechos Reproductivos en
        el Código Civil; eliminar el lenguaje que pueda interpretarse como
        penalización del aborto a petición en el Código Penal; implantar una
        política pública clara y asertiva de educación en salud sexual en las
        escuelas públicas y promover legislación que respete la dignidad,
        intimidad e igualdad de todas las personas independientemente de su
        expresión de género, diversidad corporal, orientación sexual, identidad
        de género o tipos de familias.{'\n'}
      </Text>
    </View>
  )
}

export default LGBTTIQ
