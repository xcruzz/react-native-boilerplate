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

const Desigualdad = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`DESIGUALDAD Y COMUNIDAD`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        El problema de pobreza es multidimensional. El MVC trabajará con cuatro
        componentes para atender el problema de la pobreza: económico,
        educativo, autogestión Comunitaria y acción interagencial y vivienda
        Datos medulares sobre pobreza y desigualdad en Puerto Rico que todos los
        candidatos/as deben conocer: En el 2018 la tasa de pobreza se situaba en
        el 43% El índice de desigualdad Gini en el 2017 fue de 0.55, el más alto
        del continente americano y el tercero en el mundo de acuerdo a los datos
        recogidos entre 101 países por el Banco Mundial. Solo el 54% de los
        hogares informaron tener ingresos. Promedio de ingreso anual por Seguro
        Social: $12,700. Promedio de ingreso anual por retiro $17,147. El 29% de
        los hogares recibían $10 mil o menos al año. El 41% $15 mil dólares o
        menos. En 2012 el ingreso del 10% más rico había aumentado 33 veces. En
        2012 los sectores más pobres perdieron el 30% del valor real de sus
        ingresos. El 0.8% tenía ingresos mayores a los $200,000. (Encuesta de la
        Comunidad, Censo de Estados Unidos, 2017). El 1.4% de $150,000 o más.
        (Encuesta de la Comunidad, Censo de Estados Unidos, 2017). Sólo el 23%
        de las personas pobres trabajan y generan ingreso. Cerca del 25% de la
        población de 25 años o mas no ha concluido la escuela superior.
        ***Fuentes: Estadísticas del Centro Censal UPR Cayey, Encuesta de la
        Comunidad del Censo 2017, Índice GINI del Banco Mundial. PROPUESTAS DEL
        MVC Que las empresas con altas ganancias empleen los y las
        trabajadores/as a tiempo completo y con beneficios marginales. Elevar el
        salario mínimo Uso adecuado de los recursos dirigidos al adiestramiento
        de personas bajo el nivel de pobreza para que se inserten al mundo del
        trabajo. Atender con premura el problema de la pobreza infantil.
        Enfocarse en los jóvenes varones desertores escolares, mujeres con hijos
        dependientes y en los municipios con altas tasas de pobreza. Componente
        educativo: Deserción escolar 0 – desarrollar métodos efectivos para
        erradicar la deserción, proveyendo a los jóvenes de adiestramiento para
        que terminen el grado de escuela superior a la vez que desarrollan
        oficios y se insertan en la fuerza laboral (nuevas escuelas vocacionales
        y educación alternativa). Integrar y potenciar a las Organizaciones No
        Gubernamentales ( ONG’s) que trabajan con propuestas educativas para
        sectores de bajo nivel de pobreza. Fomentar la pluralidad de expresiones
        culturales y deportivas mediante el apoyo al talento de los y las
        jóvenes. Rescatar la historia de los y las héroes, hombres y mujeres,
        actuales, del siglo XX y anteriores. Currículo educativo con perspectiva
        de género. Componente de autogestión comunitaria y acción interagencial:
        Plan de acción social comunitaria que promueva la creación de capital
        social, la participación ciudadana, y la capacitación para la
        autogestión. Capacitación y talleres de empoderamiento para la mujer y
        personas de la comunidad LGBTTQIA+ Garantizar el principio de igual paga
        por igual trabajo para reducir efectivamente la desigualdad salarial por
        género. Reorganizar los recursos de las diversas agencias y fondos
        federales destinados a los sectores pobres. Potenciar y otorgar recursos
        para la organización de las comunidades y las organizaciones sin fines
        de lucro. Reestructurar los fondos federales asignados a las agencias
        para combatir la pobreza de forma que se utilicen de manera eficiente y
        libre de corrupción. Crear cursos de capacitación a través de los
        recintos universitarios de la UPR para líderes comunitarios y empleados
        gubernamentales que trabajen en las comunidades brindando apoyo técnico
        en áreas como organización y desarrollo económico comunitario/solidario,
        componente cultural, entre otras. Capacitación de liderato comunitario y
        formación de redes sociales necesarias para fortalecer la organización
        comunitaria Promover y financiar proyectos económicos cooperativos en
        áreas tales como: agricultura, urbana y rural, reciclaje, energía
        alternativa, pesca, producción de bienes de consumo, cuido de adultos/as
        mayores, ecoturismo, etc.). Desarrollar proyectos de microredes
        energéticas para comunidades autosustentables. Desarrollar planes y
        proyectos comunitarios para hacer frente a los huracanes, deslaves y
        terremotos Componente Vivienda: Atender los problemas de infraestructura
        existentes en comunidades tales como residenciales y barriadas. Atender
        el problema de la falta de títulos de propiedad con formas novedosas de
        acción. (Ej. Fideicomiso de tierra.). Atender la necesidad de viviendas
        de las víctimas de los huracanes y terremotos evitando la corrupción y
        el favoritismo por parte de empresarios y agencias gubernamentales.
        Reusar viviendas y solares abandonados para las personas que carecen de
        viviendas. Reestructurar el Departamento de Vivienda y sus diversos
        programas a fin de que los recursos disponibles sean utilizados de forma
        eficiente. Crear legislación que proteja a las comunidades asediadas por
        las acciones de gentrificación y sus consecuentes desplazamientos.
        Impulsar la aplicación de la legislación existente para facilitar el uso
        de los edificios abandonados por los grupos o comunidades interesadas.
        Atender el deterioro de las zonas más densamente urbanizadas en cada uno
        de los 78 municipios como alternativa al vigente modelo de uso de suelo
        que ha favorecido y fomentado la vivienda de baja
        densidad/suburbana/unifamiliar privada, la privatización, el
        encarecimiento de costo de vida, un sistema monomodal de transporte.
        Fomentar los valores y derechos humanos que contribuyan a la convivencia
        solidaria y al bienestar en todos los órdenes de la vida. Acceso a
        internet y tecnología como derecho humano.
      </Text>
    </View>
  )
}

export default Desigualdad
