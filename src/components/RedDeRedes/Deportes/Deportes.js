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

const Deportes = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`RECREACIÓN Y DEPORTES`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        De más está mencionar que el deporte, la actividad física, la recreación
        y la educación física cumplen una función primordial y holística en la
        formación de todas las personas, que se traduce en el bienestar común de
        la sociedad en diferentes aspectos. La salud física, mental, emocional,
        la prevención de enfermedades, el esparcimiento, cohesión, liderazgo,
        logro de objetivos propuestos, desarrollo de valores económico, la
        valentía y mejorar el autoestima son solo algunos de los beneficios
        ofrecidos por los conceptos arriba mencionados. Según la Organización de
        las Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO)
        la educación física, la actividad física y el deporte pertenece al
        patrimonio inmaterial de la humanidad y comprende el juego físico, el
        esparcimiento, la danza, así como los deportes y juegos organizados,
        informales, competitivos, tradicionales e indígenas. Ante lo arriba
        expuesto presentamos estos conceptos: o Elevar a rango constitucional el
        deporte, la recreación, la actividad física y la educación física o
        Deporte como herramienta multisectorial , cultural y multifuncional para
        el beneficio de la sociedad, respetando y asegurando su autonomía
        deportiva. DEPORTE 100×35 o Convertir la Educación Física en una de las
        materias rectoras del DE, incentivando y estimulando a los y las
        estudiantes de todos los grados a desarrollarse con los atributos y
        beneficios que la clase ofrece. ESCUELAS EN ACCIÓN o Desarrollar un país
        físicamente activo pensando en la gente como centro y reconstruyendo
        ciudades para hacerlas físicamente activas en infraestructura y
        mentalidad. ACTIVE TOWN / CIUDADES ACTIVAS o Implementar y desarrollar
        el concepto de la recreación en todas las etapas de la vida del ser
        humano. RECREACIÓN 360 Para poder lograr maximizar estas importantes y
        fundamentales herramientas se propone la realización de Foros Nacionales
        de actividad física, educación física, recreación y deporte para así
        poder tener el insumo y recomendaciones de todos los sectores. Las
        consultas a los diferentes vinculantes nos brindarán una mayor y más
        amplia visión de cómo pudiéramos ofrecer los conceptos arriba
        mencionados Debido que la actividad física, educación física, recreación
        y deporte son conceptos que aportan a diferentes renglones de la
        sociedad, sería importante que agencias y organizaciones afines pudieran
        ser parte del desarrollo de los mismos. Estos serían, sin limitarse;
        Departamento de Educación, Departamento de Salud, Instituto de Cultura,
        Turismo, Banco de Desarrollo Económico, Centro de Diabetes, Compañía de
        Turismo y Exportación de PR, Fomento Industrial, Parques Nacionales,
        Consejo de Educación de PR, Agricultura, Fomento Económico, Junta de
        Planificación, entre otras agencias y organizaciones que pudieran ser
        enlace para la construcción y desarrollo de los conceptos.{'\n'}
      </Text>
    </View>
  )
}

export default Deportes
