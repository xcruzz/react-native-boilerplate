import globalStyles from '../../theme/styles'
import { ScrollView } from 'react-native-gesture-handler'
import React from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  Button,
  Linking,
  ImageBackground,
} from 'react-native'
import { images, colors } from 'theme'

const styles = globalStyles.alugaro

const ALugaro = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <Text style={styles.verb} />
        <Text style={styles.verb} />
        <Text style={styles.verb} />
        <Text style={styles.title}>{'  '}¡Terminemos lo que empezamos!</Text>
        <Text style={styles.verb} />
        <Image style={styles.display} source={images.lugaro_work}></Image>
        <Text style={styles.verb} />
        <Text style={styles.verb} />
        <Button
          title="Agenda Urgente"
          color="white"
          style={styles}
          backgroundColor={colors.white}
          onPress={() => {
            navigation.navigate('Details', {
              from: 'ALugaro',
              articleKey: 'agenda_urgente',
            })
          }}
        />
        <Text style={styles.verb} />
        <Button
          title="Defiende el voto"
          color="white"
          textStyle={styles.title}
          backgroundColor={colors.white}
          onPress={() => {
            Linking.openURL('https://www.defiendeelvoto.com/')
          }}
        />
        <Text style={styles.verb} />
        <Button
          title="Haz tu donación"
          color="white"
          textStyle={styles.title}
          backgroundColor={colors.white}
          onPress={() => {
            Linking.openURL('https://secure.qgiv.com/for/cala')
          }}
        />
        <Text style={styles.verb} />
        <Text style={styles.verb} />
        <ImageBackground
          style={styles.backgroundImg}
          source={images.victoria_final}
        >
          <Text style={styles.verb} />
        </ImageBackground>
        <Text style={styles.verb} />
        <Text style={styles.verb} />
        <View style={styles.root}>
          <ImageBackground style={styles.logo} source={images.alugaro_2020}>
            <Button
              title=""
              onPress={() => {
                Linking.openURL('https://www.alexandralugaro2020.com/')
              }}
            />
          </ImageBackground>
        </View>
        <Text style={styles.verb} />
        <Text style={styles.verb} />
      </ScrollView>
      <Text style={styles.verb} />
      <View style={{ flex: 0, flexDirection: 'row' }}>
        <ImageBackground style={styles.icon} source={images.fb_icon}>
          <Button
            title=""
            onPress={() => {
              Linking.openURL('https://www.facebook.com/alugaro/')
            }}
          />
        </ImageBackground>

        <ImageBackground style={styles.icon} source={images.twitter_icon}>
          <Button
            title=""
            onPress={() => {
              Linking.openURL('https://twitter.com/alexandralugaro')
            }}
          />
        </ImageBackground>
        <ImageBackground style={styles.icon} source={images.ig_icon}>
          <Button
            title=""
            onPress={() => {
              Linking.openURL('https://www.instagram.com/alexandralugaro/')
            }}
          />
        </ImageBackground>
      </View>
      <Text style={styles.verb} />
      <Text style={styles.verb} />
    </View>
  )
}
export default ALugaro
