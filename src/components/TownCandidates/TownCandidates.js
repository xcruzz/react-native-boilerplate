import PropTypes from 'prop-types'
import AButton from '../../components/ALugaroButton'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Image, Text, View, ScrollView } from 'react-native'
import { images } from 'theme'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'
import CandiProfile from '../CandiProfile'

const candidatxs = mvcdb.candidatxs
const pueblos = mvcdb.pueblos
const styles = globalStyles.townCandidates

export default class TownCandidates extends React.Component {
  constructor(props) {
    super(props)
    let townKey = props.townKey
    const selectedTown = pueblos.find((x) => {
      return x.key == townKey
    })

    let selectedTownCandidates = candidatxs.filter((c) => {
      return c.distritoS == selectedTown.distritoS[0]
    })

    if (selectedTown.distritoS.length == 2) {
      selectedTownCandidates = selectedTownCandidates.concat(
        candidatxs.map((c) => {
          return c.distritoS == selectedTown.distritoS[1]
        }),
      )
    }

    this.state = {
      townKey: townKey,
      distritoS: null,
      selectedTown: selectedTown,
      selectedTownCandidates: selectedTownCandidates,
    }
  }

  render() {
    return (
      <View style={styles.holder}>
        <View style={styles.header}>
          <Image style={styles.logo} source={images['logo_negro']} />
          <Text style={styles.title}>{this.state.selectedTown.name}</Text>
        </View>
        <View style={styles.separator} />
        <ScrollView>
          {this.state.selectedTownCandidates.map((candidate, i) => {
            return <CandiProfile key={i} candidateKey={candidate.key} />
          })}
          <Text />
          <AButton
            title="Haz tu donación"
            onPressURL="https://www.mvcpr.org/donativos/"
            isDark={true}
          />
          <Text />
          <View style={styles.separator} />
          <Text style={styles.center}>Fin</Text>
        </ScrollView>
      </View>
    )
  }
}

TownCandidates.propTypes = {
  townKey: PropTypes.string,
}

TownCandidates.defaultProps = {
  townKey: -1,
}
