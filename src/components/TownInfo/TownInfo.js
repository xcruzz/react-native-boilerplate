import globalStyles from '../../theme/styles'
import React from 'react'
import { Image, Text, View, Dimensions } from 'react-native'
import { images } from 'theme'
import prtowns from '../../../assets/candidatxs/PRTowns.json'
import { ScrollView } from 'react-native-gesture-handler'

const deviceSize = Dimensions.get('window')
const distritosS = prtowns.distritosS
const pueblos = prtowns.pueblos
const styles = globalStyles.townInfo

const TownInfo = ({ townKey }) => {
  const town = pueblos.find((x) => {
    return x.key == townKey
  })

  const districtSen = distritosS.filter((x) => {
    if (town.distritoS.length == 2)
      return x.number == town.distritoS[0] || x.number == town.distritoS[1]
    else return x.number == town.distritoS[0]
  })

  return (
    <View style={styles.container}>
      <Text />
      <View style={styles.header}>
        <Text style={styles.title}>{town.name}</Text>
        <Image style={styles.logo} source={images['logo_negro']} />
        <Text />
        <Text style={styles.title}>
          {`Distrito : ` + districtSen
            ? districtSen.map((d, i) => (i > 0 ? ' - ' : '') + d.name)
            : town.distritosS}
        </Text>
      </View>
      <ScrollView>
        {districtSen[0] && districtSen[0].content && districtSen[0].content ? (
          <Image
            style={{
              width: deviceSize.width * 0.98,
              height: districtSen[0].content.imgHeight,
            }}
            source={images[districtSen[0].content.image]}
          />
        ) : (
          <Text />
        )}
      </ScrollView>
    </View>
  )
}

export default TownInfo
