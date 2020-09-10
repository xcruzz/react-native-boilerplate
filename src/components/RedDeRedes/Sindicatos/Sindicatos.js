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

const Sindicatos = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`COLEGIACIONES Y SINDICATOS`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        Una política pública activa, que fomente y que castigue las violaciones
        a dicho derecho. Para que todos los asalariados y asalariadas incluyendo
        a las trabajadoras y trabajadores de la rama judicial y de los
        municipios se organicen para la negociación de sus condiciones de
        empleo, salario y el derecho a la huelga y penalice la contratación de
        rompehuelgas Crear centros de trabajadoras y trabajadores como espacios
        de reunión, discusión y orientación sobre derechos e iniciativas de
        trabajadoras y trabajadores no organizados. Para atender el asunto de la
        subcontratación el MVC propone: Descontinuar la subcontratación en
        aquellos servicios que los trabajadores y las trabajadoras
        gubernamentales, a través de las agencias, municipios y corporaciones
        públicas, ofrecen. Toda empresa privada que disfrute de algún beneficio,
        subsidio, incentivo o contrato del gobierno tendrá la obligación de
        mantener neutralidad. Para garantizar y fomentar los derechos laborales
        de nuestra clase trabajadora el MVC propone: Un código laboral que
        recopile y ordene toda la legislación protectora del trabajo y las
        relaciones obrero-patronales. Un salario mínimo digno y se ajusten
        periódicamente que permitan un aumento en los niveles de vida. La
        compensación por horas extras trabajadas será́ siempre a base de tiempo
        doble del salario pagado por las horas regulares y los y las que
        trabajan a tiempo parcial acumulen licencia de vacaciones y enfermedad.
        Evaluar los decretos del Departamento del Trabajo que permiten o
        fomentan excepciones a las leyes. Impulsar que los beneficiarios de
        asistencia nutricional puedan obtener empleo sin que se reduzcan sus
        beneficios en una etapa transicional. En caso del cierre de operaciones
        de alguna empresa debe reconocerse el derecho de las trabajadoras y
        trabajadores a solicitar la entrega de equipo, maquinaria y planta
        física para ser operada de forma cooperativa. Se creará una División del
        gobierno que asesore a las trabajadoras y trabajadores en cuanto a la
        viabilidad del proyecto y recomiende las formas de apoyo gubernamental
        que cada paso de empresas recuperadas amerite. Revertir la Ley de
        Despido para establecer el derecho a reposición en el empleo en caso de
        despido injustificado, así́ como el pago de los salarios dejados de
        percibir. Ampliar la licencia por maternidad de ocho (8) a doce (12)
        semanas y una licencia de paternidad de treinta (30) días, con sueldo
        completo, para las trabajadoras y los trabajadores en la empresa
        privada. Reconocer la concesión de dicha licencia a casos de adopción.
        Aprobar una ley de centros de cuidado infantil en los centros de trabajo
        o el pago de una suma para el cuido de niñas y niños hasta la edad
        escolar. Trabajar para eliminar la brecha salarial que existe entre
        mujeres y varones en nuestro país. Aprobar una licencia menstrual
        (menstrual leave). Proponemos una reducción inicial a 7 horas diarias y
        35 horas semanales sin reducción de salario. Garantizar una licencia por
        vacaciones mínima de 20 días laborables al año y 15 por enfermedad al
        año. Para proteger el servicio público proponemos: Limitar los puestos
        con carácter temporal. El reclutamiento de irregulares, transitorios o
        por contrato, no se utilizarán para evadir la creación de puestos
        regulares de necesidad permanente. No subcontratación de servicios
        públicos. Exigimos que se observe estrictamente el sistema de mérito
        para combatir la corrupción. Mantener las aportaciones patronales según
        lo negociado mediante los Convenios Colectivos y las cubiertas médicas
        negociadas mientras se aprueba y se pone en vigor el sistema de seguro
        universal con pagador único. Para proteger las pensiones, el retiro y la
        seguridad social el MVC propone: El ajuste automático al pago de
        pensiones para compensar los aumentos en el costo de la vida. Análisis
        para crear un Sistema Universal de Retiro que incluya a todos los
        trabajadores y las trabajadoras, del sector público y privado. Esto
        permitiría ampliar la base de los participantes. Analizar la
        Transformación de la Asociación de Empleados del ELA en la Asociación de
        Empleados de Puerto Rico de modo que abarque a los trabajadores y las
        trabajadoras del sector privado y familiares de los y las socios/as
        actuales. Además, se debe brindar una participación más equitativa al
        sector sindical en la composición de la Asamblea de Delegados/as y
        Comité Ejecutivo. Colegios Profesionales el MVC propone: Promover que
        los colegios profesionales tengan la oportunidad mediante un proceso
        eleccionario, que bien podía constituirse tomando en cuenta varias
        opciones: Que el 50% de sus componentes sean elegidos por los y las
        colegiados/as y el otro 50% nombrado por el gobierno. Dependiendo de qué
        tipo de organización tenga el colegio, otra opción podría ser que cada
        capítulo elija un miembro a la junta examinadora y el gobierno nombre de
        1 a 3 miembros o sea que sean 8 miembros electos democráticamente por
        los colegiados y de 1 a 3 miembros por el gobierno haciendo que las
        juntas estén compuestas entre 9 u 11 integrantes. Estas composiciones de
        las juntas le cerrarían brecha a la intención de corruptos/as y a la
        incidencia de ventas inescrupulosas de exámenes, licencias e influencias
        dentro de las mismas.{'\n'}
      </Text>
    </View>
  )
}

export default Sindicatos
