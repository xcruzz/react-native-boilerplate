import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { images } from 'theme'

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: 54,
    height: 60,
    marginTop: Platform.OS !== 'ios' ? 0 : 25,
    marginBottom: 5,
  },
  headerLogo: {
    width: 32,
    height: 38,
  },
})

export default class ActiveLogo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onPress: this.nextLogo,
      logoStyle: props.isHeader ? styles.headerLogo : styles.logo,
      logos: [
        images.logo_arcoiris,
        images.spinner_arcoiris,
        images.victoria_icon_white,
      ],
      activityDisplay: { i: -1, img: images.victoria_icon_white },
    }
  }

  nextLogo = () => {
    let next =
      this.state.activityDisplay.i > this.state.logos.length - 2
        ? 0
        : this.state.activityDisplay.i + 1
    this.setState({
      ...this.state,
      activityDisplay: { i: next, img: this.state.logos[next] },
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.state.onPress}>
          <Image
            style={this.state.logoStyle}
            source={this.state.activityDisplay.img}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
