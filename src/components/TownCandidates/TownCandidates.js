import PropTypes from 'prop-types'

// import globalStyles from '../../theme/styles'
import React from 'react'
import { Image, Text, View, ScrollView, StyleSheet } from 'react-native'
import { images, colors } from 'theme'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import CandiProfile from '../CandiProfile'
import CandiTile from '../CandiTile'

const candidatxs = mvcdb.candidatxs
const pueblos = mvcdb.pueblos
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 26,
    marginBottom: 0,
    // fontFamily: 'AvenirNext-Regular',
  },
  logo: {
    width: 30,
    height: 34,
    marginBottom: 5,
    marginRight: 10,
  },

  center: {
    alignSelf: 'center',
    paddingTop: 5,
    // paddingRight: 10,
    // paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 25,
    // // fontFamily: 'AvenirNextCondensed-Regular',
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 22,
    // // fontFamily: 'AvenirNextCondensed-Regular',
    textAlign: 'left',
  },
  separator: {
    alignSelf: 'center',
    height: 2,
    width: '100%',
    backgroundColor: colors.victoryGold,
  },
})

export default class TownCandidates extends React.Component {
  constructor(props) {
    super(props)

    const townKey = props.townKey

    const selectedTownCandidates = candidatxs.filter((c) => {
      return c.pueblo == townKey
    })

    const selectedTownMayor = candidatxs.find((c) => {
      return c.pueblo == townKey && c.alcalde === true
    })

    const selectedTown = pueblos.find((x) => {
      return x.key == townKey
    })

    this.state = {
      townKey: townKey,
      distritoS: null,
      selectedTown: selectedTown,
      selectedTownCandidates: selectedTownCandidates,
      selectedTownMayor: selectedTownMayor,
    }
  }

  render() {
    return (
      <View style={styles.holder}>
        <View style={styles.separator} />

        <View style={styles.header}>
          <Image style={styles.logo} source={images['logo_negro']} />
          <Text style={styles.title}>{this.state.selectedTown.name}</Text>
        </View>
        <View style={styles.separator} />
        {this.state.selectedTownMayor && (
          <CandiProfile
            renderHeader={true}
            candidateKey={this.state.selectedTownMayor.key}
          />
        )}
        <Text />
        {this.state.selectedTownCandidates.map((candidate, i) => {
          if (candidate.alcalde !== true)
            return <CandiTile key={i} candidateKey={candidate.key} />
        })}
      </View>
    )
  }
}

TownCandidates.propTypes = {
  townKey: PropTypes.string,
}

TownCandidates.defaultProps = {
  townKey: '',
}
