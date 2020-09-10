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

const Ecologia = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`ECOLOGÍA`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        Red de Ecología – Respeto y protección por la naturaleza bajo criterios
        de responsabilidad intergeneracional sobre la base de la conservación de
        la biodiversidad y la capacidad de carga de los ecosistemas de nuestro
        archipiélago.{'\n\n '}Propuestas: {'\n  1. '}Conservación de la
        biodiversidad y la cobertura forestal; evaluar y proteger las categorías
        de usos de suelos, cuerpos de agua y ecosistemas sensibles. Inventariar
        la biodiversidad de PR para conocer su estado actual, con énfasis en
        vertebrados, especies de uso comercial y elementos amenazados.
        Actualizar los indicadores económicos por unos indicadores basados en la
        ciencia de la sustentabilidad. {'\n  2. '} Buscar formas de mitigar y
        combatir el cambio climático. Entre otras medidas, una transición
        acelerada a energía renovable, con participación de las comunidades;
        política pública energética para la eficiencia y el ahorro energético;
        rechazo a las alternativas de combustibles fósiles y nucleares.
        Moratoria a la construcción en las costas. {'\n  3. '}. Desarrollo de la
        soberanía y seguridad alimentaria mediante la agroecología local dando
        prioridad a la alimentación saludable y la gestión sustentable de áreas
        agroecológicas. {'\n  4. '} Énfasis en la educación ambiental a todos
        los niveles con el objetivo de crear una nueva conciencia de
        sensibilidad y respeto a la naturaleza y la biodiversidad. {'\n  5. '}
        Atender con urgencia la situación de deterioro de los vertederos,
        desarrollo de nuevos mercados de reciclaje y promover el reciclaje y
        compostaje.{'\n'}
      </Text>
    </View>
  )
}

export default Ecologia
