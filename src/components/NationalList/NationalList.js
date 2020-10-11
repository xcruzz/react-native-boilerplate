import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors, fonts } from 'theme'
import CandiTile from '../CandiTile'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'

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
  head: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: fonts.NeuePlak.Bold,
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
      candidates: candidatxs.filter((c) => {
        return c.pueblo == 'nacional'
      }),
    }
  }

  render() {
    return (
      <View>
        <Text />
        <View style={styles.separator} />
        <Text style={styles.head}>Candidaturas Nacionales</Text>
        <View style={styles.separator} />
        <View style={styles.root}>
          {this.state.candidates.map((c, i) => {
            return <CandiTile key={i} candidateKey={c.key} />
          })}
        </View>
      </View>
    )
  }
}
