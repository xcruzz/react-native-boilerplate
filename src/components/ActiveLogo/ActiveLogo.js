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
    width: deviceSize.width*.8,
    height: deviceSize.width*.8*.19,
    marginTop: 15 + (Platform.OS === 'ios' && deviceSize.height > 800 ? 5 : 0),
    marginBottom: 0,
  },
  headerLogo: {
    flex: 0,
    width:  deviceSize.width*.5,
    height: deviceSize.width*.5*.19,
    marginBottom: 5 + (Platform.OS === 'ios' ? deviceSize.height > 800 ? 20 :10 : 0), 
  },
})

export default class ActiveLogo extends React.Component {
  constructor(props) {
    super(props)
    let logos = [
      images.alugaro_sloganRow, 
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
