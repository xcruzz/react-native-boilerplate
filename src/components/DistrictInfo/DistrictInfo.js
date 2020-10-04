import AButton from '../../components/ALugaroButton'
import SocialBar from '../../components/SocialBar'
import globalStyles from '../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, View, Text, Image } from 'react-native'
import candidatxs from '../../../assets/candidatxs/candidatxsDev.json'
import { ScrollView } from 'react-native-gesture-handler'
import { images } from 'theme'

const styles = globalStyles.districtInfo
const deviceSize = Dimensions.get('window')

const DistrictInfo = (props) => {
  const currentDistrict = candidatxs.porDistritoSenatorial.find((ds) => {
    return ds.number == props.districtNumber
  })
  if (currentDistrict.candidatxs != null) {
    return (
      <View style={styles.holder}>
        <View style={styles.center}>
          <Text style={styles.content}>
            {`Distrito Senatorial ` + currentDistrict.name}
          </Text>
        </View>
        <View style={styles.separator} />
        <ScrollView>
          {currentDistrict.candidatxs.map((candidate, i) => {
            return (
              <View key={candidate.key + i} style={styles.holder}>
                <Text key={`t0${i}`} />
                <Text key={`t00${i}`} />
                <View key={`vn${i}`} style={styles.rightView}>
                  <Text key={`tn${i}`} style={styles.candName}>
                    {candidate.nombre}
                  </Text>
                </View>
                <Text key={`t1${i}`} />
                <View key={`vcb${i}`} style={styles.candidatureBar}>
                  <Text key={`tcb${i}`} style={styles.candTitle}>
                    {candidate.candidatura.toUpperCase()}
                  </Text>
                </View>
                <Text key={`t2${i}`} />
                <Text key={`t3${i}`} />
                <View key={`biov${i}`}>
                  <Text key={`biot${i}`} style={styles.textB}>
                    Biografía
                  </Text>
                  <Text key={`t11${i}`} />
                  <Text key={`bio${i}`} style={styles.content}>
                    {candidate.biografia.map((i) => {
                      return i + '\n\n'
                    })}
                  </Text>
                </View>
                <View key={`pdtv${i}`} style={styles.box}>
                  {candidate.planDeTrabajo ? (
                    <Text key={`pdt${i}`} style={styles.boxTB}>
                      {'Plan de Trabajo\n'}
                    </Text>
                  ) : (
                    <View key={`bv1${i}`} style={{ height: 0 }} />
                  )}
                  {candidate.planDeTrabajo ? (
                    candidate.planDeTrabajo.map((i) => {
                      return (
                        <Text key={`pdtt${i}`} style={styles.boxT}>
                          {'• ' + i + '\n'}
                        </Text>
                      )
                    })
                  ) : (
                    <View key={`bv2${i}`} style={{ height: 0 }} />
                  )}
                  <SocialBar
                    key={`SB${i}`}
                    fbHandle={candidate.contacto.fb}
                    twitterHandle={candidate.contacto.twitter}
                    igHandle={candidate.contacto.ig}
                    emailAddr={candidate.contacto.email}
                  />
                  <Text key={`tb1${i}`} />
                </View>
                <Text />
                <View key={`sp${i}`} style={styles.separator} />
              </View>
            )
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
        <Text></Text>
      </View>
    )
  } else if (currentDistrict.content != null) {
    return (
      <View style={styles.holder}>
        <View style={styles.center}>
          <Text style={styles.content}>
            {`Distrito Senatorial ` + currentDistrict.name}
          </Text>
        </View>
        <View style={styles.separator} />
        <ScrollView>
          <Text />
          <Image
            style={{
              width: deviceSize.width * 0.98,
              height: currentDistrict.content.imgHeight,
            }}
            source={images[currentDistrict.content.image]}
          />
        </ScrollView>
      </View>
    )
  } else {
    return (
      <View style={styles.holder}>
        <View style={styles.center}>
          <Text style={styles.content}>
            {`Distrito Senatorial ` + currentDistrict.name}
          </Text>
        </View>
        <View style={styles.separator} />
      </View>
    )
  }
}

DistrictInfo.propTypes = {
  number: PropTypes.number,
}

DistrictInfo.defaultProps = {
  number: 0,
}

export default DistrictInfo
