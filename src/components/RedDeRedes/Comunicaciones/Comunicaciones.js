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

const Comunicaciones = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`COMUNICACIONES`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        Economía: La gente primero{'\n\n'}El Movimiento Victoria Ciudadana busca
        transformar profundamente las bases de la economía de Puerto Rico,
        llevándola a una economía integrada, incluyente y sinérgica, sustentada
        en los principios del Desarrollo Humano Sostenible. Los pilares de
        nuestro modelo económico son: i) diversificación y expansión de la
        producción; ii) impulso a la exportación; iii) mejora sostenida de la
        productividad; iv) atención a la distribución del bienestar; y v)
        equilibrios sectoriales, territoriales y con la naturaleza. Los
        instrumentos fundamentales para lograrlo son el cooperativismo, el
        desarrollo económico comunitario, el empresarismo social, un estímulo
        decidido a PyMes y la atracción de capitales foráneos en sectores clave
        para nuestro futuro.{'\n\n'}Buscamos un Puerto Rico solidario donde se
        respeten plenamente los derechos económicos y sociales de las personas.
        Nos proponemos erradicar la pobreza en quince años y corregir
        progresivamente las desigualdades de ingresos, de género, generaciones,
        étnicas y raciales. Para ello utilizaremos políticas de acción
        afirmativa hacia los y las desfavorecidos/as, focalizando en las mayores
        urgencias y lo haremos en consulta con la ciudadanía.{'\n\n'}
        Rediseñaremos el sistema de salud para asegurar buenos servicios a toda
        la población e innovaremos en mecanismos financieros para asegurarlo. La
        educación será también prioridad presupuestaria, porque sin ella no es
        posible erradicar la pobreza. El gobierno estimulará la creación de
        puestos de trabajo y todos los programas de incentivos tendrán que
        cumplir con este objetivo. Pondremos énfasis en atajar la alta evasión
        contributiva, revisaremos las leyes de contribuciones sobre ingresos,
        las de herencia, de bienes de capital, los catastros, los subsidios
        empresariales, así como todos los instrumentos que tiene un gobierno
        para generar y distribuir ingresos.{'\n\n'}Seremos un gobierno
        emprendedor, en permanente diálogo con los sectores de investigación y
        desarrollo, innovación y empresarismo. Visualizamos alianzas fuertes con
        el sector universitario, especialmente con la UPR por su carácter de
        bien público, así como con el movimiento cooperativista, las
        asociaciones profesionales, empresariales y gremiales, para llevar
        adelante un esfuerzo gigante de transformación económica revitalizadora,
        que permita engranar ecosistemas innovadores a nivel central, regional y
        municipal.{'\n\n'}Cuidaremos a nuestra gente, al medioambiente, y la
        reputación global de nuestra isla.{'\n'}
      </Text>
    </View>
  )
}

export default Comunicaciones
