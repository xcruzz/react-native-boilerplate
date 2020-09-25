import React from 'react'
import PropTypes from 'prop-types'
import { Linking, ImageBackground, Button } from 'react-native'

const ImgButton = ({ onPressURL, imgSource, styles, isDisabled }) => {
  return (
    <ImageBackground style={styles} source={imgSource}>
      <Button
        title=""
        onPress={() => {
          if (!isDisabled) Linking.openURL(onPressURL)
        }}
      />
    </ImageBackground>
  )
}

ImgButton.propTypes = {
  onPressUrl: PropTypes.string,
  imgSource: PropTypes.number,
  styles: PropTypes.object,
  isDisabled: PropTypes.bool,
}

ImgButton.defaultProps = {
  onPressUrl: '',
  imgSource: null,
  styles: {},
  isDisabled: false,
}

export default ImgButton
