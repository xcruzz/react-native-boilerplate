import ImgButton from '../../components/ImgButton'
import AButton from '../../components/ALugaroButton'
import globalStyles from '../../theme/styles'
import React from 'react'
import { Text, View, StatusBar, Image } from 'react-native'
import { images } from 'theme'

const styles = globalStyles.alugaro

const ALugaro = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.verb}>{'\n'}</Text>
      <Text style={styles.title}>{'  '}¡Terminemos lo que empezamos!</Text>
      <Image style={styles.display_lugaro} source={images.lugaro_work}></Image>
      <Text style={styles.verb}>{'\n'}</Text>
      <ImgButton
        styles={styles.logo}
        onPressURL="https://www.alexandralugaro2020.com/"
        imgSource={images.alugaro_2020}
      />
      <Text style={styles.verb}>{'\n'}</Text>

      <AButton
        title="Defiende el voto"
        onPressURL="https://www.defiendeelvoto.com/"
      />
      <AButton
        title="Haz tu donación"
        onPressURL="https://secure.qgiv.com/for/cala"
      />
      <AButton
        title="Noticias"
        onPressNavigate={navigation}
        navigationProps={{
          to: 'NewsFeed',
          from: 'ALugaro',
        }}
      />
      <Text style={styles.verb}>{'\n'}</Text>

      <View style={{ flex: 0, flexDirection: 'row' }}>
        <ImgButton
          styles={styles.icon}
          onPressURL="https://www.facebook.com/alugaro/"
          imgSource={images.fb_icon}
        />
        <ImgButton
          styles={styles.icon}
          onPressURL="https://twitter.com/alexandralugaro"
          imgSource={images.twitter_icon}
        />
        <ImgButton
          styles={styles.icon}
          onPressURL="https://www.instagram.com/alexandralugaro/"
          imgSource={images.ig_icon}
        />
      </View>
      <Text style={styles.verb}>{'\n'}</Text>
    </View>
  )
}
export default ALugaro
