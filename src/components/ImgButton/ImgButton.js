import React from 'react'
import PropTypes from 'prop-types'
import { Linking, ImageBackground, Button } from 'react-native'

const ImgButton = ({ onPressURL, imgSource, styles }) => {
  return (
    <ImageBackground style={styles} source={imgSource}>
      <Button
        title=""
        onPress={() => {
          Linking.openURL(onPressURL)
        }}
      />
    </ImageBackground>
  )
}

ImgButton.propTypes = {
  onPressUrl: PropTypes.string,
  imgSource: PropTypes.number,
  styles: PropTypes.object,
}

ImgButton.defaultProps = {
  onPressUrl: '',
  imgSource: null,
  styles: {},
}

export default ImgButton
