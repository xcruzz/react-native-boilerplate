import PropTypes from 'prop-types'
import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { images, colors, fonts } from 'theme'
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
    marginBottom: 5,
    fontFamily: fonts.NeuePlak.Bold,
  },
  logo: {
    width: 30,
    height: 34,
    marginBottom: 5,
    marginRight: 10,
  },
  separator: {
    alignSelf: 'center',
    height: 2,
    width: '95%',
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
      <View>
        {this.state.renderHeader && (
          <View>
            <View style={styles.header}>
              <Image style={styles.logo} source={images['logo_negro']} />
              <Text style={styles.title}>{this.state.selectedTown.name}gg</Text>
            </View>
          </View>
        )}
        {this.state.selectedTownMayor && (
          <CandiProfile
            renderHeader={true}
            candidateKey={this.state.selectedTownMayor.key}
          />
        )}
        {!this.state.selectedTownMayor &&
          this.state.selectedTownCandidates.length > 0 && (
            <View style={{ alignItems: 'center' }}>
              <View style={styles.separator} />
              <Text style={styles.title}>{'Candidaturas Municipales'}</Text>
              <View style={styles.separator} />
            </View>
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
  renderHeader: PropTypes.bool,
}

TownCandidates.defaultProps = {
  townKey: '',
  renderHeader: true,
}
