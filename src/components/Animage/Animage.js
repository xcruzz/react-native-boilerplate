import React from 'react'
import { View, StyleSheet, Animated, Image } from 'react-native'
import { colors } from 'theme'

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: colors.whit,
  },
})

class Animage extends React.Component {
  thumbnailAnimated = new Animated.Value(1)

  imageAnimated = new Animated.Value(0.5)

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  render() {
    const { thumbnailSource, source, style, ...props } = this.props

    return (
      <View style={styles.container}>
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={{
            height: style.height * 0.5 + 10,
            width: style.width * 0.5 + 3,
            opacity: this.thumbnailAnimated,
            margin: style.height * 0.25 - 10,
          }}
          onLoad={this.handleThumbnailLoad}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    )
  }
}

export default Animage
