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

const Gobierno = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verb} />
      <Text style={styles.title}>{`GOBIERNO Y ADMINISTRACIÓN PÚBLICA`}</Text>
      <Image style={styles.logo} source={images.logo_negro} />
      <Text style={styles.verb} />
      <Text style={styles.title}>MOVIMIENTO VICTORIA CIUDADANA</Text>
      <Text style={styles.verb}>
        Regenerar la Confianza en la Gestión Pública: UN DESAFÍO URGENTE{'\n\n'}
        El colapso de la confianza ciudadana en el gobierno debe atenderse con
        urgencia porque ha minado la capacidad de gestión, profundizado las
        desigualdades de acceso a servicios, deteriorado la democracia,
        comprometiendo seriamente el desarrollo económico y social. Las
        propuestas más importantes para regenerar la confianza se organizan en
        cinco ámbitos, a saber:{'\n\n 1. '}Prevención, detección y penalización
        de delitos de corrupción.{'\n  ✔️ '}Nueva ley anticorrupción, con
        entidad al más alto nivel del Ejecutivo.{'\n  ✔️ '}Reclutamiento sobre
        base de mérito, con convocatorias y concursos abiertos.{'\n  ✔️ '}
        Limitación de cargos de confianza a no más del 3% del total de
        funcionarios.{'\n  ✔️ '}Ley anti-puertas giratorias y revisión de la Ley
        de Cabildeo.{'\n  ✔️ '} Tope salarial para todos los funcionarios
        públicos y contratos de confianza.{'\n  ✔️ '}Vasto programa de
        reconversión, recalificación y especialización laboral para mejorar las
        capacidades de los empleados de carrera y generar mejores servicios.
        {'\n\n 2. '}Regionalización y descentralización; gobierno paritario.
        {'\n  ✔️ '} Regionalización basada en distritos senatoriales y
        descentralización de ámbitos de gestión hacia éstos y los municipios.
        {'\n  ✔️ '} Se busca lograr i) mayor eficacia y transparencia en
        servicios brindados por vía digital; ii) transferir recursos del nivel
        central al local, según necesidades y planes locales formales; iii)
        apuntalar desarrollo económico local; iv) reducir éxodo poblacional; v)
        asegurar la participación ciudadana en todos los niveles de toma de
        decisiones y vi) instaurar sistemas estadísticos para el monitoreo de
        gastos y evaluación de resultados.{'\n  ✔️ '} Se promoverá que más
        mujeres, personas con diversidad funcional, e integrantes de comunidades
        LGBTTQI+ integren el servicio público sobre la base a sus méritos,
        descartando toda forma de discriminación.{'\n\n 3. '}Asegurar que Fondos
        Federales atiendan las prioridades de desarrollo de Puerto Rico y se
        usen bien.{'\n  ✔️ '}Generaremos inventario de todos los fondos
        federales previstos para 2021-2024 a fin de asociarlos a las prioridades
        de desarrollo de Puerto Rico, negociando cambios de orientación con el
        gobierno federal, si fuera necesario.
        {'\n  ✔️ '}Instalar mecanismos de monitoreo y evaluación de progreso,
        impacto y resultados de cada programa federal, como sustento de las
        negociaciones con el gobierno de EEUU.
        {'\n  ✔️ '}Profesionalizar la gestión de dichos recursos, reclutando por
        mérito su personal.{'\n\n 4. '}Puerto Rico Digital.
        {'\n  ✔️ '} Estrategia de corto y mediano plazo para enlazar toda la
        gestión pública en forma eficiente y transparente.
        {'\n  ✔️ '}Objetivo: que Puerto Rico pueda entrar en la era digital con
        peso y talentos propios.{'\n  ✔️ '}PREPANET como puntal del desarrollo y
        proveedor de Internet a familias, gobierno, escuelas y plazas públicas.
        {'\n  ✔️ '}Internet considerado un derecho humano.
        {'\n  ✔️ '}Identificación digital para toda la población y poder ofrecer
        en línea la mayor cantidad de servicios gubernamentales.
        {'\n  ✔️ '}Ofrecer programas de formación digital ciudadana para
        distintos grupos etarios.{'\n  ✔️ '}Comité Científico Asesor.
        {'\n\n 5. '}Presupuesto transparente para necesidades reales.{'\n  ✔️ '}
        Buscará conciliar las aspiraciones colectivas que encarna el MVC y la
        realidad macroeconómica y financiera de Puerto Rico hoy.
        {'\n  ✔️ '}Establecerá prioridades en función de reducción de la
        pobreza, corrección de las desigualdades más severas (especialmente de
        género, generaciones y población LGBTTQI+), así como de procesos para
        estimular la economía social solidaria, la cultura y la ciencia.
        {'\n  ✔️ '}Incorporará la participación ciudadana en su preparación,
        monitoreo y evaluación de resultados.{'\n\n'}La otra tarea urgente
        requiere atender la situación de salud mental y el problema del uso
        problemático de sustancias y alcohol. Un enfoque salubrista parte de la
        premisa de que la dependencia al consumo de drogas es una enfermedad
        tratable y prevenible, por lo cual resulta contraproducente tratar este
        uso problemático como un delito. Entre las medidas concretas para
        adoptar, están las siguientes:{'\n  ✔️ '}Un acercamiento diferenciado
        según la sustancia.{'\n  ✔️ '}Descriminalizar el consumo y posesión de
        drogas.{'\n  ✔️ '}Reasignar recursos fiscales al tratamiento.{'\n  ✔️ '}
        Asegurar el tratamiento adecuado.{'\n'}
      </Text>
    </View>
  )
}

export default Gobierno
