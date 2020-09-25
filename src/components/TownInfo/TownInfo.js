import DistrictInfo from '../DistrictInfo'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Image, Text, View, Dimensions } from 'react-native'
import { images } from 'theme'
import prtowns from '../../../assets/candidatxs/PRTowns.json'

const deviceSize = Dimensions.get('window')
const pueblos = prtowns.pueblos
const styles = globalStyles.townInfo

const TownInfo = ({ townKey }) => {
  const selectedTown = pueblos.find((x) => {
    return x.key == townKey
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{selectedTown.name}</Text>
        <Image style={styles.logo} source={images['logo_negro']} />
      </View>
      {selectedTown.distritoS.map((dno) => {
        return <DistrictInfo key={dno} districtNumber={dno} />
      })}
    </View>
  )
}

export default TownInfo
