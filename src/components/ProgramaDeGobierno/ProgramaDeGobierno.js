import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { fonts, images } from 'theme'
import MVCChapter from './MVCChapter'

const styles = StyleSheet.create({
  holder: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: fonts.NeuePlak.Bold,
    textAlign: 'center',
    fontSize: 22,
    paddingHorizontal: 10,
  },
  centerVerb: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.NeuePlak.Regular,
  },
  logo: {
    width: 154,
    height: 174,
    marginBottom: 10,
  },
})
const chapters = [
  { title: 'Corrupción', chapterKey: 'C1' },
  { title: 'Economía', chapterKey: 'C2' },
  { title: 'Pobreza', chapterKey: 'C3' },
  { title: 'Diversidad', chapterKey: 'C4' },
  { title: 'Racismo / Xenofobia', chapterKey: 'C5' },
  { title: 'Trabajo', chapterKey: 'C6' },
  { title: 'Salud', chapterKey: 'C7' },
  { title: 'Educación', chapterKey: 'C8' },
  { title: 'Cultura', chapterKey: 'C9' },
  { title: 'Justicia', chapterKey: 'C10' },
  { title: 'Rehabilitación', chapterKey: 'C11' },
  { title: 'Vivienda', chapterKey: 'C12' },
  { title: 'Recreación y Deportes', chapterKey: 'C13' },
  { title: 'Juventud', chapterKey: 'C14' },
  { title: 'Comunicación', chapterKey: 'C15' },
  { title: 'Ecología', chapterKey: 'C16' },
  { title: 'Descolonización', chapterKey: 'C17' },
  { title: 'Diáspora', chapterKey: 'C18' },
]

export default class ProgramaDeGobierno extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.holder}>
          <Image style={styles.logo} source={images.logo_negro} />
          <Text style={styles.header}>PROGRAMA DE GOBIERNO</Text>
          <Text style={styles.header} />
          <Text style={styles.header}>EL CAMBIO VA!</Text>
          <Text style={styles.header} />
          <Text style={styles.centerVerb}>
            Documento síntesis de los insumos analíticos y de propuestas
            generadas por las redes de talentos y saberes del MVC
          </Text>
          <Text style={styles.header} />
          <Text style={styles.centerVerb}>
            Aprobado en Asamblea el 4 de Octubre de 2020
          </Text>
          <Text />
        </View>
        <View>
          <MVCChapter shortTitle={'Introducción'} chapterKey="C0" />
          {chapters.map((ch, i) => {
            if (i < chapters.length - 1 && i % 2 == 0)
              return (
                <View key={`V${i}`} style={{ flexDirection: 'row' }}>
                  <MVCChapter
                    key={`mvcCh_${i}`}
                    chapterKey={chapters[i].chapterKey}
                    shortTitle={chapters[i].title}
                  />
                  <MVCChapter
                    key={`mvcCh_${i + 1}`}
                    chapterKey={chapters[i + 1].chapterKey}
                    shortTitle={chapters[i + 1].title}
                  />
                </View>
              )
          })}
        </View>
        <Text />
      </View>
    )
  }
}
