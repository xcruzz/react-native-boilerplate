import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { colors } from 'theme'
import CandiTile from '../CandiTile'
import mvcdb from '../../../assets/candidatxs/candidatxsDev.json'

const candidatxs = mvcdb.candidatxs

const styles = StyleSheet.create({
  root: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 9,
    backgroundColor: colors.white,
  },
  icon: {
    width: 145,
    height: 145,
    marginHorizontal: 10,
  },
  head: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 10,
  },
  separator: {
    alignSelf: 'center',
    height: 2,
    width: '100%',
    backgroundColor: colors.victoryGold,
  },
})

export default class NationalList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      props: props,
      candidates: candidatxs.filter((c) => {
        return c.pueblo == 'nacional'
      }),
    }
    // console.log('candidates')
    // console.log(JSON.stringify(this.state.candidates))
  }

  render() {
    return (
      // <ScrollView>
      <View>
        <Text />
        <View style={styles.separator} />
        <Text style={styles.head}>Candidatos Nacionales</Text>
        <View style={styles.separator} />
        <View style={styles.root}>
          {this.state.candidates.map((c, i) => {
            return <CandiTile key={i} candidateKey={c.key} />
          })}
        </View>
      </View>
      // </ScrollView>
    )
  }
}
