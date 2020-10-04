import TownCandidates from '../TownCandidates'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Image, Text, View, Dimensions } from 'react-native'
import { images } from 'theme'
import prtowns from '../../../assets/candidatxs/PRTowns.json'

const pueblos = prtowns.pueblos
const styles = globalStyles.townInfo

const TownInfo = ({ townKey }) => {
  const selectedTown = pueblos.find((x) => {
    return x.key == townKey
  })
  return (
    <View style={styles.container}>
      <TownCandidates townKey={townKey} />
      {/* 
        <NationalCandidates />
        <DistrictCandidates /> 
      */}
    </View>
  )
}
export default TownInfo
