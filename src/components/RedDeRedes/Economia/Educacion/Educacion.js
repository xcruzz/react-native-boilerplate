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

const Educacion = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`EDUCACIÓN`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        MVC se solidariza con la defensa de nuestra educación pública y pretende
        legislar para hacer realidad su aspiración de que todo ser humano pueda
        tener las oportunidades, las condiciones y la cultura y capacidades para
        procurarse una vida personal y ciudadana plenamente digna. El sistema
        educativo debe ser la base para el desarrollo de seres humanos
        comprometidos con mejorar la calidad de vida, de cómo nos relacionamos
        con la naturaleza, con los otros seres humanos y con uno/a mismo/a.
        Daremos para ello, en el marco del paradigma del desarrollo humano
        sostenible, particular énfasis al desarrollo de competencias, las
        cuales, en tanto formas de conciencia, posibiliten que todos/as
        contribuyamos responsablemente a la construcción del país. Nuestro plan
        estratégico, que será expresión de las necesidades e intereses de los
        diversos actores educativos, dará prioridad a las siguientes medidas: 1.
        Revertir los recortes presupuestarios en la educación pública elemental,
        secundaria y superior, y establecer un presupuesto adecuado para el
        logro de los objetivos educativos y el desarrollo de las condiciones y
        actividades que ello requiere. Establecer controles efectivos sobre los
        recursos presupuestarios. 2. Descentralizar el sistema y democratizarlo
        con la participación protagónica de los actores escolares (ver Propuesta
        1). 3. El distrito escolar será la principal unidad administrativa para
        el diseño, ejecución y evaluación de los planes de trabajo que elaboran
        las escuelas comprendidas en la región para lograr los objetivos
        generales trazados por el Departamento de Educación (ver Propuesta 1).
        4. Rechazar el énfasis en las pruebas estandarizadas y desarrollar un
        sistema de modos y criterios alternativos de evaluación
        educativo-docente y de rendición de cuentas (ver Propuesta 3). 5.
        Derogar la ley 85 para dejar sin efecto la privatización de la escuela
        pública como las escuelas alianza y los vales educativos (ver Propuesta
        1). 6. Instituir una diversidad de modelos de currículo y de
        organización escolar disponibles para que las escuelas puedan disfrutar
        de adoptar, en virtud del uso de la autonomía que se les garantiza y de
        su naturaleza como instituciones de y para la comunidad (ver Propuesta
        2). 7. Establecer dos programas, en alianza con la Universidad de Puerto
        Rico, para fomentar el desarrollo temprano de estudiantes, (i) en las
        áreas académicas y (ii) en liderato social, cuyo alto potencial ha sido
        identificado (ver Propuesta 4) 8. Garantizar que la educación sea
        vehículo social para el bien común por medio del cual se reduzcan
        significativamente la desigualdad social y la pobreza. Transformar el
        currículo y transformar la convivencia escolar, conforme a las
        Propuestas 2 y 3. 9. Atender a la formación docente en función de las
        transformaciones programáticas señaladas en la medida 8 (ver Propuestas
        3 y 4). 10. Reorganizar el gobierno y la administración de la educación
        especial de modo que el Departamento de Educación dirija y gestione sus
        procesos a cabalidad (ver Propuesta 3). 11. Aumentar el sueldo de los
        maestros y mejorar sus condiciones de trabajo.{'\n'}
      </Text>
    </View>
  )
}

export default Educacion
