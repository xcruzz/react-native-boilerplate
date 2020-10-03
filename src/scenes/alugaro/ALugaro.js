import SocialBar from '../../components/SocialBar'
import AButton from '../../components/ALugaroButton'
import globalStyles from '../../theme/styles'
import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  Image,
  Linking,
  Platform,
} from 'react-native'
import { images } from 'theme'
import { ScrollView } from 'react-native-gesture-handler'

const styles = globalStyles.alugaro

const ALugaro = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{'  '}¡Terminemos lo que empezamos!</Text>

      <ScrollView>
        <View style={styles.root}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.alexandralugaro2020.com/')
            }}
          >
            <Image style={styles.logo} source={images.alugaro_2020} />
          </TouchableOpacity>
          <Image style={styles.display_lugaro} source={images.lugaro_work} />

          {Platform.OS === 'ios' ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Map', {
                    from: 'ALugaro',
                  })
                }}
              >
                <Image style={styles.tile} source={images.PRTowns} />
              </TouchableOpacity>
              <Text style={styles.verb}>
                {'Busca tus candidatos en el mapa'}
              </Text>
              <View style={styles.separator} />
            </View>
          ) : (
            <View />
          )}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CandiBrowser', {
                from: 'ALugaro',
              })
            }}
          >
            <Image style={styles.tile} source={images.candidatxsButton} />
          </TouchableOpacity>

          <Text style={styles.verb}>{'Conoce todxs los Candidatxs'}</Text>
          <View style={styles.separator} />
        </View>
        <AButton
          title="Defiende el voto"
          onPressURL="https://www.defiendeelvoto.com/"
        />
        <AButton
          title="Haz tu donación"
          onPressURL="https://secure.qgiv.com/for/cala"
        />
        <SocialBar
          fbHandle="alugaro"
          twitterHandle="alexandralugaro"
          igHandle="alexandralugaro"
        />
        <Text />
      </ScrollView>
    </View>
  )
}
export default ALugaro
