import globalStyles from '../../theme/styles'
import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import { images } from 'theme'

const styles = globalStyles.activeDisplay

export default class ActiveDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      props: props,
      onPress: props.onPress ? props.onPress : this.nextLogo,
      title: props.title ? props.title : 'MOVIMIENTO VICTORIA CIUDADANA',
      logos: [
        images.logo_blanco,
        images.logo_arcoiris,
        images.spinner_arcoiris,
        images.logo_arcoiris,
      ],
      activityDisplay: { i: -1, img: images.logo_blanco },
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
          <Image style={styles.logo} source={this.state.activityDisplay.img} />
        </TouchableOpacity>
        <Text style={styles.headerText} />
        <Text style={styles.headerText} />
        <Text style={styles.headerText}>{this.state.title}</Text>
        <Text style={styles.headerText} />
        <Text style={styles.headerText} />
        <Text style={styles.headerText} />
      </View>
    )
  }
}
