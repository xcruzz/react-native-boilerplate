import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native'
import { images, colors } from 'theme'

const list = [
  {
    id: 1,
    title: 'POR EL RESCATE DE LAS INSTITUCIONES PÚBLICAS',
    content: `Combatir la corrupción\n\n  1. Procesamiento oportuno y contundente de actos de corrupción\n  2. Ley Anti-Puertas Giratorias\n  3. Financiamiento público de campañas que elimine el inversionismo político
\nCambio del sistema electoral\n\n  1. Representación proporcional\n  2. Segunda vuelta\n  3. Iniciativa ciudadana\n  4. Referéndum revocatorio\n  5. Candidaturas coaligadas\n`,
  },
  {
    id: 2,
    title: 'POR LA RECONSTRUCCIÓN SOCIAL, ECONÓMICA Y FISCAL',
    content: `Derechos\n\n  1. Restituir y ampliar los derechos laborales recortados por pasados gobiernos.\n  2. Reconocer el derecho al trabajo en condiciones dignas (salario, jornada, licencias).\n  3. Un salario mínimo que permita vivir por encima del nivel de pobreza.\n  4. Cumplimiento y ampliación de las políticas contra el discrimen y hostigamiento.\n  5. Salario base mayor al mínimo en industrias cuya capacidad económica lo permita.
   \nOrganización\n\n  1. Incentivar la organización sindical de personas que trabajan, públicos y privados.\n  2. Eliminar trabas, incluyendo las existentes en la Rama Judicial y los municipios.\n  3. Promover la organización comunitaria, estudiantil, gremial y profesional, como aspecto esencial de una sociedad democrática.
   \nDefensa de bienes y servicios públicos\n\n  1. Rechazamos las políticas de privatización de servicios esenciales y bienes públicos, que los someten a la lógica de la competencia y el lucro privado.\n  2. Reforma gubernamental con participación laboral y ciudadana, para alcanzar mejores servicios y eficiencia.
   \nEducación pública\n\n  1. Revertir la privatización y los recortes y proveer el presupuesto adecuado a la educación pública.\n  2. Reforma educativa desde la comunidad escolar.\n  3. Educación con perspectiva de género y la educación en derechos humanos.\n  4. Fomentar las artes y los deportes, parte vital de nuestro desarrollo cultural.\n  5. Respetar la fórmula del presupuesto de la Universidad de Puerto Rico.\n  6. Reforma universitaria que garantice la autonomía y democratización de la UPR.
   \nPensiones\n\n  1. Reconocer la pensión como un derecho adquirido.\n  2. Anteponer el pago de pensiones a otros desembolsos de fondos públicos.
   \nSalud\n\n  1. Seguro universal que permita acceso a los servicios de salud a todos y todas.\n  2. Acercamiento salubrista a la adicción.
   \nSistema contributivo\n\n  1. Conforme al principio de quien más tenga, más aporte.
   \nDesarrollo económico\n\n  1. Implantar políticas energéticas, urbanas, de transportación y de infraestructura dirigidas a proteger el ambiente.\n  2. Protección de cuencas hidrográficas, terrenos agrícolas y costas.\n  3. Transición acelerada a la energía renovable y cierre de plantas de carbón.\m  4. Política basura cero bajo el principo de reducción, reuso y reciclaje.
   \nAmbiente\n\n  1. Concebimos la protección del ambiente como aspecto central de todo proyecto económico, urbano, industrial o agrícola o de infraestructura.\n  2. Implantar políticas energéticas, urbanas, de transportación y de infraestructura dirigidas a proteger el ambiente.\n  3.  Protección de cuencas hidrográficas, terrenos agrícolas y costas.\n  4. Transición acelerada a la energía renovable y cierre de plantas de carbón.\n  5. Política basura cero bajo el principo de reducción, reuso y reciclaje.
   \nEl Pueblo antes que la deuda\n\n  1. Definir constitucionalmente los servicios esenciales y garantías sociales y anteponerlas al pago de la deuda.\n  2. Auditoría ciudadana y moratoria al pago hasta que se complete auditoria.\n  3. Cancelación de la deuda ilegal o ilegítima.\n  4. Renegociación priorizando servicios esenciales y garantías sociales.
   \nLa Junta de Control Fiscal\n\n  1. Rechazamos a la JCF y sus políticas de austeridad, que atentan contra nuestras necesidades sociales y de recuperación económica.\n  2. Detendremos el desembolso de fondos del pueblo para la operación de la JCF.`,
  },
  {
    id: 3,
    title: 'POR LA DESCOLONIZACIÓN',
    content: `  1. Proponemos un proceso que garantice la participación equitativa de opciones descolonizadoras, entiéndase: estadidad, independencia y libre asociación.\n  2. Asamblea Constitucional de Estatus como medio para lograr tal proceso.\n`,
  },
]

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
  textH: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'left',
  },
  verb: {
    fontSize: 18,
    marginBottom: 20,
  },
  logo: {
    width: 108,
    height: 120,
  },
  collapse: {
    //backgroundColor: '#FFFFff',
    paddingLeft: 4,
  },
  collapseH: {
    flexDirection: 'row',
    padding: 0,
    //backgroundColor: colors.doradoVictoria,
  },
  collapseB: { backgroundColor: colors.lightGray },
})

const AgendaUrgente = ({}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.verb} />
        <Text style={styles.title}>{`AGENDA URGENTE`}</Text>

        <Image style={styles.logo} source={images.logo_negro} />
        <Text style={styles.verb} />
        <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
        <Text style={styles.verb}>
          Victoria Ciudadana nace para atender tres deberes urgentes de nuestro
          tiempo: el rescate de las instituciones públicas; la reconstrucción
          social, económica, ambiental y fiscal; y la descolonización.{'\n'}
          {'\n'}Somos un movimiento de la ciudadanía con personas de distintas
          experiencias, agrupaciones y trasfondos. Celebramos la diversidad y
          pluralidad de posiciones.{'\n'}
          {'\n'}Toda persona que se comprometa con la agenda urgente y con los
          principios éticos del movimiento puede participar de Victoria
          Ciudadana.
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
      <View style={styles.collapse}>
        {list.map((i) => {
          return (
            <Collapse style={styles.collapse}>
              <CollapseHeader style={styles.collapseH}>
                <Text style={styles.textH}>{i.title + ' >>'}</Text>
              </CollapseHeader>
              <CollapseBody style={styles.collapseB}>
                <Text>{i.content}</Text>
              </CollapseBody>
            </Collapse>
          )
        })}
      </View>
    </View>
  )
}

export default AgendaUrgente
