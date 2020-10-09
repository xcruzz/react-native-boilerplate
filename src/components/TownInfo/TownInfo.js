import TownCandidates from '../TownCandidates'
import DistrictInfo from '../DistrictInfo'
import globalStyles from '../../theme/styles'
import React from 'react'
import { View } from 'react-native'
import mvcdb from '../../../assets/candidatxs/candidatxs.json'

const pueblos = mvcdb.pueblos
const styles = globalStyles.townInfo

const TownInfo = (props) => {
  return (
    <View style={styles.container}>
      <TownCandidates townKey={props.townKey} />
      <DistrictInfo townKey={props.townKey} />
    </View>
  )
}
export default TownInfo
