import SocialBar from '../../components/SocialBar'
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
      <SocialBar
        fbHandle="alugaro"
        twitterHandle="alexandralugaro"
        igHandle="alexandralugaro"
      />
      <Text style={styles.verb}>{'\n'}</Text>
    </View>
  )
}
export default ALugaro
