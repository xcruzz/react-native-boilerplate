import React from 'react'
import AButton from '../ALugaroButton'
import { colors, fonts } from 'theme'

import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native'
import C0 from './C0.json'
import C1 from './C1.json'
import C2 from './C2.json'
import C3 from './C3.json'
import C4 from './C4.json'
import C5 from './C5.json'
import C6 from './C6.json'
import C7 from './C7.json'
import C8 from './C8.json'
import C9 from './C9.json'
import C10 from './C10.json'
import C11 from './C11.json'
import C12 from './C12.json'
import C13 from './C13.json'
import C14 from './C14.json'
import C15 from './C15.json'
import C16 from './C16.json'
import C17 from './C17.json'
import C18 from './C18.json'

const chaptersFiles = [
  { content: C0, chapterKey: 'C0' },
  { content: C1, chapterKey: 'C1' },
  { content: C2, chapterKey: 'C2' },
  { content: C3, chapterKey: 'C3' },
  { content: C4, chapterKey: 'C4' },
  { content: C5, chapterKey: 'C5' },
  { content: C6, chapterKey: 'C6' },
  { content: C7, chapterKey: 'C7' },
  { content: C8, chapterKey: 'C8' },
  { content: C9, chapterKey: 'C9' },
  { content: C10, chapterKey: 'C10' },
  { content: C11, chapterKey: 'C11' },
  { content: C12, chapterKey: 'C12' },
  { content: C13, chapterKey: 'C13' },
  { content: C14, chapterKey: 'C14' },
  { content: C15, chapterKey: 'C15' },
  { content: C16, chapterKey: 'C16' },
  { content: C17, chapterKey: 'C17' },
  { content: C18, chapterKey: 'C18' },
]
const deviceSize = Dimensions.get('window')
const styles = StyleSheet.create({
  holder: {
    flex: 1,
  },
  bholder: {
    backgroundColor: colors.black,
    height: Platform.OS === 'ios' ? 50 : 40,
    marginBottom: Platform.OS === 'ios' ? 20 : 5,
  },
  chapTitleModal: {
    fontSize: 23,
    paddingTop: Platform.OS === 'ios' && deviceSize.height > 800 ? 25 : 0,
    paddingVertical: 5,
    textAlign: 'center',
    fontFamily: fonts.NeuePlak.Black,
  },
  chaptVerb: {
    fontSize: 20,
    marginLeft: 5,
    paddingRight: 10,
    paddingTop: 10,
    fontFamily: fonts.NeuePlak.Regular,
  },
  verbView: {
    paddingHorizontal: 10,
  },
  listView: {
    paddingLeft: 20,
    paddingHorizontal: 10,
  },
  headerView: {
    paddingHorizontal: 10,
  },
  chaptList: {
    fontSize: 20,
    fontFamily: fonts.NeuePlak.Regular,
  },
  chaptHeader: {
    fontSize: 21,
    marginTop: 18,
    marginBottom: 10,
    fontFamily: fonts.NeuePlak.Bold,
  },
  modalView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  space: { height: 20, backgroundColor: colors.black },
})

export default class MVCChapter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chapterKey: props.chapterKey,
      isModalBackButtonActive: false,
      isModalActive: false,
      shortTitle: props.shortTitle,
      chapter: chaptersFiles.find((f) => {
        return f.chapterKey == props.chapterKey
      }).content,
    }
  }

  render() {
    return (
      <View style={styles.holder}>
        <AButton
          isDark={true}
          title={this.state.shortTitle}
          onPress={() => {
            this.setState({
              ...this.state,
              isModalActive: true,
            })
          }}
        />
        <Modal
          fullScreen={true}
          animationType="fade"
          transparent={false}
          visible={this.state.isModalActive}
        >
          <View style={styles.holder}>
            {Platform.OS === 'ios' && deviceSize.height < 800 && (
              <View style={styles.space} />
            )}
            <Text style={styles.chapTitleModal}>
              {this.state.chapter.titulo}
            </Text>
            <ScrollView
              scrollEventThrottle={32}
              onScroll={() => {
                this.setState({
                  ...this.state,
                  isModalBackButtonActive: true,
                })
              }}
            >
              <View style={styles.holder}>
                {this.state.chapter.contenido.map((element, i) => {
                  if (element.verbs)
                    return element.verbs.map((e, i) => {
                      return (
                        <View style={styles.verbView} key={`V_${i}`}>
                          <Text
                            style={styles.chaptVerb}
                            key={`v${i}`}
                          >{`${e}\n`}</Text>
                        </View>
                      )
                    })
                  else if (element.numberedList)
                    return element.numberedList.map((e, i) => {
                      return (
                        <View style={styles.listView} key={`Vn_${i}`}>
                          <Text style={styles.chaptList} key={`nL${i}`}>{`${
                            i + 1
                          }.  ${e}\n`}</Text>
                        </View>
                      )
                    })
                  else if (element.numberedTitle)
                    return (
                      <View style={styles.headerView} key={`V_${i}`}>
                        <Text style={styles.chaptHeader} key={`nT${i}`}>
                          {`${element.numberedTitle.i}. ${element.numberedTitle.verb}`}
                        </Text>
                      </View>
                    )
                  else if (element.bullets)
                    return element.bullets.map((e, i) => {
                      return (
                        <View style={styles.listView} key={`Vb_${i}`}>
                          <Text
                            style={styles.chaptList}
                            key={`b ${i}`}
                          >{`•  ${e}\n`}</Text>
                        </View>
                      )
                    })
                  else if (element.header)
                    return element.header.map((e, i) => {
                      return (
                        <View style={styles.headerView} key={`V_${i}`}>
                          <Text style={styles.chaptHeader} key={`h${i}`}>
                            {e}
                          </Text>
                        </View>
                      )
                    })
                })}
              </View>
            </ScrollView>
            {this.state.isModalBackButtonActive && (
              <View style={styles.bholder}>
                <AButton
                  title="Regresar"
                  onPress={() => {
                    this.setState({
                      ...this.state,
                      isModalActive: false,
                    })
                  }}
                />
              </View>
            )}
          </View>
        </Modal>
      </View>
    )
  }
}
