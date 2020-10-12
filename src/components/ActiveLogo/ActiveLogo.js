import React from 'react'
import { Platform, Dimensions, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { images } from 'theme'

const deviceSize = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 0, 
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 15 + (Platform.OS === 'ios' && deviceSize.height > 800  ? 5 : 0)
  },
  logo: {
    width: deviceSize.height*.0749,
    height: deviceSize.height*.0749,
    marginTop: 5 + (Platform.OS === 'ios' && deviceSize.height > 800 ? 5 : 0),
    marginBottom: 5,
  },
  headerLogo: {
    flex: 0,
    width:  deviceSize.height*.049,
    height: deviceSize.height*.049,
    marginBottom: 5 + (Platform.OS === 'ios' ? deviceSize.height > 800 ? 20 :10 : 0), 
  },
})

export default class ActiveLogo extends React.Component {
  constructor(props) {
    super(props)
    let logos = [
      images.victoria_icon_bmBlack,
      images.victoria_icon_bmLGBTQ,
      images.victoria_icon_bmPurple,
      images.victoria_icon_bmLugaro,
      images.victoria_icon_bmWhite
    ]
    this.state = {
      onPress: this.nextLogo,
      logoStyle: props.isHeader ? styles.headerLogo : styles.logo,
      logos: logos,
      activeLogo: { i: 0, img: logos[0] },
    }
  }

  nextLogo = () => {
    let next =
      this.state.activeLogo.i > this.state.logos.length - 2
        ? 0
        : this.state.activeLogo.i + 1
    this.setState({
      ...this.state,
      activeLogo: { i: next, img: this.state.logos[next] },
    })
  }

  render() {
    return (
      <View style={styles.container}>
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
