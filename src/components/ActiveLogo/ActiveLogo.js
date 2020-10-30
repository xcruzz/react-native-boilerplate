import React from 'react'
import {
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import { images } from 'theme'

const deviceSize = Dimensions.get('window')
const styles = StyleSheet.create({
  containerH: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: deviceSize.width * 0.7,
    height: deviceSize.width * 0.7 * 0.1749,
    marginBottom: 20,
  },
  headerLogo: {
    width: deviceSize.width * 0.7,
    height: deviceSize.width * 0.7 * 0.1749,
    marginRight: Platform.OS !== 'ios' ? deviceSize.width / 5.6 : 0,
    marginBottom: 4 + (Platform.OS !== 'ios' ? 10 : 0),
  },
})

export default class ActiveLogo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onPress: props.onPress,
      logoStyle: props.isHeader ? styles.headerLogo : styles.logo,
      containerStyle: props.isHeader ? styles.containerH : styles.container,
      activeLogo: {
        img: props.isHeader
          ? images.alugaro_sloganRowB
          : images.alugaro_sloganRow,
      },
    }
  }

  render() {
    return (
      <View style={this.state.containerStyle}>
        <TouchableOpacity onPress={this.state.onPress}>
          <Image
            style={this.state.logoStyle}
            source={this.state.activeLogo.img}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
